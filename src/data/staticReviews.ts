import type { Language } from '../i18n/types';

export interface StaticReview {
  id: string;
  authorName: string;
  profilePhotoUrl: string;
  rating: number;
  relativeTimeDescription: Record<Language, string>;
  text: Record<Language, string>;
}

export const staticReviews: StaticReview[] = [];

export function getLocalizedReviews(lang: Language = 'en') {
  return [];
}
