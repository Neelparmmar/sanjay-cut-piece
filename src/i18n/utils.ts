import type { Language, Translations } from './types';
import { en } from './en';
import { hi } from './hi';
import { mr } from './mr';
import { gu } from './gu';
import type { PageSEO } from '../data/seo';
import { seoConfig, domain } from '../data/seo';

const translationsMap: Record<Language, Translations> = {
  en,
  hi,
  mr,
  gu,
};

export function getLanguageFromPath(pathname: string): Language {
  const normalized = pathname.replace(/\/$/, '');
  if (normalized === '/hi' || normalized.startsWith('/hi/')) return 'hi';
  if (normalized === '/mr' || normalized.startsWith('/mr/')) return 'mr';
  if (normalized === '/gu' || normalized.startsWith('/gu/')) return 'gu';
  return 'en';
}

export function getCleanPath(pathname: string): string {
  let clean = pathname.split('?')[0].split('#')[0];
  clean = clean.replace(/^\/(hi|mr|gu)(\/|$)/, '/');
  if (clean !== '/' && clean.endsWith('/')) {
    clean = clean.slice(0, -1);
  }
  return clean || '/';
}

export function getLocalizedPath(pathname: string, targetLang: Language): string {
  // Extract hash/query if any
  const hashIndex = pathname.indexOf('#');
  const hash = hashIndex !== -1 ? pathname.slice(hashIndex) : '';
  const basePath = hashIndex !== -1 ? pathname.slice(0, hashIndex) : pathname;

  const clean = getCleanPath(basePath);

  let result = clean;
  if (targetLang !== 'en') {
    result = clean === '/' ? `/${targetLang}/` : `/${targetLang}${clean}`;
  }

  return `${result}${hash}`;
}

export function getTranslations(lang: Language): Translations {
  return translationsMap[lang] || en;
}

export function getLocalizedSeo(cleanPath: string, lang: Language): PageSEO {
  const baseSeo = seoConfig[cleanPath] || seoConfig['/'];
  const t = getTranslations(lang);

  if (lang === 'en') {
    return baseSeo;
  }

  const isHome = cleanPath === '/';
  const isSitemap = cleanPath === '/sitemap.html';
  const collectionId = cleanPath.replace(/^\//, '');
  const locCollection = t.collections[collectionId];

  // Localized Titles & Descriptions
  let title = baseSeo.title;
  let description = baseSeo.description;
  let h1 = baseSeo.h1;

  if (isHome) {
    if (lang === 'hi') {
      title = 'ठाणे में फैब्रिक और ड्रेस मटेरियल की दुकान | संजय कट पीस — 1977 से';
      description = 'संजय कट पीस, जांभली नाका, ठाणे पश्चिम में गुणवत्तापूर्ण फैब्रिक्स, ड्रेस मटेरियल्स, ब्लाउज मटेरियल्स, कट पीस, दुपट्टे और मैचिंग फैब्रिक्स खोजें। 1977 से विश्वास के साथ सेवारत।';
      h1 = 'संजय कट पीस एंड कट पीस सेंटर — ठाणे में गुणवत्तापूर्ण फैब्रिक्स 1977 से';
    } else if (lang === 'mr') {
      title = 'ठाण्यात कापड आणि ड्रेस मटिरिअलचे दुकान | संजय कट पीस — 1977 पासून';
      description = 'संजय कट पीस, जांभळी नाका, ठाणे पश्चिम येथे उत्तम दर्जाचे कापड, ड्रेस मटिरियल्स, ब्लाउज मटिरियल्स, कट पीस, दुपट्टे आणि मॅचिंग कापड पहा. 1977 पासून विश्वासाने सेवा.';
      h1 = 'संजय कट पीस आणि कट पीस सेंटर — ठाण्यात दर्जेदार कापड 1977 पासून';
    } else if (lang === 'gu') {
      title = 'ઠાણેમાં કાપડ અને ડ્રેસ મટિરિયલની દુકાન | સંજય કટ પીસ — 1977 થી';
      description = 'સંજય કટ પીસ, જામભળી નાકા, ઠાણે વેસ્ટમાં ગુણવત્તાયુક્ત કાપડ, ડ્રેસ મટિરિયલ્સ, બ્લાઉઝ મટિરિયલ્સ, કટ પીસ, દુપટ્ટા અને મેચિંગ કાપડ શોધો. 1977 થી વિશ્વાસ સાથે સેવરત.';
      h1 = 'સંજય કટ પીસ એન્ડ કટ પીસ સેન્ટર — ઠાણેમાં ગુણવત્તાયુક્ત કાપડ 1977 થી';
    }
  } else if (isSitemap) {
    title = `${t.sitemapPage.title} | Sanjay Cut Piece Thane`;
    description = t.sitemapPage.subtitle;
    h1 = `${t.sitemapPage.title} — Sanjay Cut Piece`;
  } else if (locCollection) {
    if (lang === 'hi') {
      title = `${locCollection.name} की दुकान ठाणे में | कॉटन, सिल्क और फैंसी सूट्स — संजय कट पीस`;
      description = `संजय कट पीस ठाणे पश्चिम में प्योर कॉटन, चंदेरी, जॉर्जेट और सिल्क में बेहतरीन बिना सिले ${locCollection.name} खोजें।`;
      h1 = `${locCollection.name} — ठाणे पश्चिम में संजय कट पीस`;
    } else if (lang === 'mr') {
      title = `${locCollection.name} चे दुकान ठाण्यात | कॉटन, सिल्क आणि फॅन्सी सूट्स — संजय कट पीस`;
      description = `संजय कट पीस ठाणे पश्चिम येथे प्युअर कॉटन, चंदेरी, जॉर्जेट आणि सिल्क मध्ये उत्तम ${locCollection.name} पहा.`;
      h1 = `${locCollection.name} — ठाणे पश्चिम येथे संजय कट पीस`;
    } else if (lang === 'gu') {
      title = `${locCollection.name} ની દુકાન ઠાણેમાં | કોટન, સિલ્ક અને ફેન્સી સૂટ્સ — સંજય કટ પીસ`;
      description = `સંજય કટ પીસ ઠાણે વેસ્ટમાં પ્યોર કોટન, ચંદેરી, જ્યોર્જેટ અને સિલ્કમાં શ્રેષ્ઠ ${locCollection.name} શોધો.`;
      h1 = `${locCollection.name} — ઠાણે વેસ્ટમાં સંજય કટ પીસ`;
    }
  }

  // Localized Breadcrumbs
  const breadcrumbs = baseSeo.breadcrumbs.map((crumb) => {
    let localizedName = crumb.name;
    if (crumb.item === '/') {
      localizedName = t.collectionDetail.breadcrumbHome;
    } else if (crumb.item === '/#collections') {
      localizedName = t.collectionDetail.breadcrumbCollections;
    } else if (crumb.item === '/sitemap.html') {
      localizedName = t.nav.sitemap;
    } else if (locCollection && crumb.item === cleanPath) {
      localizedName = locCollection.name;
    }

    const localizedItem = getLocalizedPath(crumb.item, lang);

    return {
      name: localizedName,
      item: localizedItem,
    };
  });

  return {
    ...baseSeo,
    url: getLocalizedPath(cleanPath, lang),
    title,
    description,
    h1,
    breadcrumbs,
  };
}
