import type { APIRoute } from 'astro';
import { staticReviews } from '../../data/staticReviews';

export interface ReviewItem {
  id: string;
  authorName: string;
  authorUrl?: string;
  profilePhotoUrl?: string;
  rating: number;
  relativeTimeDescription: string;
  text: string;
  time?: number;
}

export interface ReviewsResponse {
  success: boolean;
  code?: string;
  error?: string;
  placeId: string;
  businessName?: string;
  rating?: number;
  totalRatings?: number;
  reviews: ReviewItem[];
  fetchedAt?: number;
}

const fallbackReviews: ReviewItem[] = staticReviews.map(r => ({
  id: r.id,
  authorName: r.authorName,
  profilePhotoUrl: r.profilePhotoUrl,
  rating: r.rating,
  relativeTimeDescription: r.relativeTimeDescription.en,
  text: r.text.en
}));

// In-memory cache to respect API quotas and minimize Google API requests
let reviewsCache: { data: ReviewsResponse; expiresAt: number } | null = null;
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour

export const GET: APIRoute = async () => {
  const placeId =
    import.meta.env.GOOGLE_PLACE_ID ||
    process.env.GOOGLE_PLACE_ID ||
    'ChIJoXx2Iie55zsRwmoITWfwPEc';

  const apiKey =
    import.meta.env.GOOGLE_PLACES_API_KEY ||
    process.env.GOOGLE_PLACES_API_KEY ||
    import.meta.env.GOOGLE_API_KEY ||
    process.env.GOOGLE_API_KEY;

  // Serve from cache if available and still valid
  if (reviewsCache && reviewsCache.expiresAt > Date.now()) {
    return new Response(JSON.stringify(reviewsCache.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  }

  // If no API key is configured, return empty response indicating API key required
  if (!apiKey || apiKey === 'your_google_places_api_key_here') {
    const response: ReviewsResponse = {
      success: false,
      code: 'MISSING_API_KEY',
      error: 'GOOGLE_PLACES_API_KEY environment variable is not configured.',
      placeId,
      reviews: []
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  }

  try {
    let reviewsList: ReviewItem[] = [];
    let businessName = 'Sanjay Cut Piece';
    let rating: number | undefined;
    let totalRatings: number | undefined;

    // Strategy 1: Google Places Details API (Legacy)
    const fetchSortOrder = async (sortOrder: 'most_relevant' | 'newest') => {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
        placeId
      )}&fields=name,rating,reviews,user_ratings_total&reviews_sort=${sortOrder}&key=${encodeURIComponent(
        apiKey
      )}`;
      const res = await fetch(url);
      return res.json();
    };

    const [relevantResult, newestResult] = await Promise.allSettled([
      fetchSortOrder('most_relevant'),
      fetchSortOrder('newest')
    ]);

    const legacyData =
      relevantResult.status === 'fulfilled' ? relevantResult.value : null;

    if (legacyData && legacyData.status === 'OK' && legacyData.result) {
      businessName = legacyData.result.name || businessName;
      rating = legacyData.result.rating;
      totalRatings = legacyData.result.user_ratings_total;

      const rawReviews: any[] = [];
      if (Array.isArray(legacyData.result.reviews)) {
        rawReviews.push(...legacyData.result.reviews);
      }

      if (
        newestResult.status === 'fulfilled' &&
        newestResult.value?.status === 'OK' &&
        Array.isArray(newestResult.value.result?.reviews)
      ) {
        rawReviews.push(...newestResult.value.result.reviews);
      }

      // Deduplicate reviews by author + time or text
      const seen = new Set<string>();
      for (const r of rawReviews) {
        const key = `${r.author_name}-${r.time || r.text?.slice(0, 30)}`;
        if (!seen.has(key) && r.text) {
          seen.add(key);
          reviewsList.push({
            id: `review-${r.time || Math.random().toString(36).slice(2, 9)}`,
            authorName: r.author_name || 'Google User',
            authorUrl: r.author_url,
            profilePhotoUrl: r.profile_photo_url,
            rating: Number(r.rating) || 5,
            relativeTimeDescription: r.relative_time_description || '',
            text: r.text || '',
            time: r.time
          });
        }
      }
    } else if (
      legacyData &&
      (legacyData.status === 'REQUEST_DENIED' ||
        legacyData.status === 'INVALID_REQUEST')
    ) {
      // Strategy 2: Google Places API (New v1)
      const newPlacesUrl = `https://places.googleapis.com/v1/places/${encodeURIComponent(
        placeId
      )}?languageCode=en`;

      const newRes = await fetch(newPlacesUrl, {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask':
            'id,displayName,rating,userRatingCount,reviews'
        }
      });

      if (newRes.ok) {
        const newData = await newRes.json();
        businessName = newData.displayName?.text || businessName;
        rating = newData.rating;
        totalRatings = newData.userRatingCount;

        if (Array.isArray(newData.reviews)) {
          for (const r of newData.reviews) {
            reviewsList.push({
              id: r.name || `review-${Math.random().toString(36).slice(2, 9)}`,
              authorName:
                r.authorAttribution?.displayName || 'Google User',
              authorUrl: r.authorAttribution?.uri,
              profilePhotoUrl: r.authorAttribution?.photoUri,
              rating: Number(r.rating) || 5,
              relativeTimeDescription:
                r.relativePublishTimeDescription || '',
              text: r.text?.text || r.originalText?.text || '',
              time: r.publishTime ? new Date(r.publishTime).getTime() : undefined
            });
          }
        }
      } else {
        const errorBody = await newRes.text();
        return new Response(
          JSON.stringify({
            success: false,
            code: 'GOOGLE_API_ERROR',
            error:
              legacyData?.error_message ||
              `Google API error (${newRes.status}): ${errorBody}`,
            placeId,
            reviews: []
          } satisfies ReviewsResponse),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
    } else if (legacyData && legacyData.status !== 'OK') {
      return new Response(
        JSON.stringify({
          success: false,
          code: legacyData.status,
          error:
            legacyData.error_message ||
            `Google Places API returned status: ${legacyData.status}`,
          placeId,
          reviews: []
        } satisfies ReviewsResponse),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const payload: ReviewsResponse = {
      success: true,
      placeId,
      businessName,
      rating,
      totalRatings,
      reviews: reviewsList,
      fetchedAt: Date.now()
    };

    // Cache successful responses
    reviewsCache = {
      data: payload,
      expiresAt: Date.now() + CACHE_DURATION_MS
    };

    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        success: false,
        code: 'FETCH_ERROR',
        error: err.message || 'Failed to fetch Google Reviews',
        placeId,
        reviews: []
      } satisfies ReviewsResponse),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

