export type Language = 'en' | 'hi' | 'mr' | 'gu';

export interface LocalizedCollection {
  id: string;
  name: string;
  description: string;
  alt: string;
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    collections: string;
    whyUs: string;
    gallery: string;
    visitUs: string;
    sitemap: string;
  };
  langNames: {
    en: string;
    hi: string;
    mr: string;
    gu: string;
  };
  langCodes: {
    en: string;
    hi: string;
    mr: string;
    gu: string;
  };
  ctas: {
    call: string;
    whatsapp: string;
    callNow: string;
    whatsappUs: string;
    visitStore: string;
    getDirections: string;
    exploreCollections: string;
    openInMaps: string;
    inquireWhatsapp: string;
    viewAllCategories: string;
    messageWhatsapp: string;
    callStore: string;
    explore: string;
  };
  hero: {
    since: string;
    brandName: string;
    nameSubtitle: string;
    h1Subtitle: string;
    tagline: string;
    description: string;
    location: string;
  };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    badgeNumber: string;
    badgeText: string;
  };
  collectionsSection: {
    label: string;
    title: string;
    subtitle: string;
    exploreCollection: string;
    visitNote: string;
  };
  featured: {
    label: string;
    title: string;
    description: string;
  };
  whyUs: {
    label: string;
    title: string;
    items: Array<{ title: string; description: string }>;
  };
  heritage: {
    label: string;
    title: string;
    quote: string;
    milestones: Array<{ year: string; label: string; desc: string }>;
    tagline: string;
  };
  gallery: {
    label: string;
    title: string;
    subtitle: string;
    alts: Record<string, string>;
  };
  reviews: {
    label: string;
    title: string;
    text: string;
    btnText: string;
  };
  visit: {
    label: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    hoursLabel: string;
    phoneLabel: string;
    whatsappLabel: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    collections: string;
    contactUs: string;
    allRightsReserved: string;
  };
  collectionDetail: {
    breadcrumbHome: string;
    breadcrumbCollections: string;
    badge: string;
    whyChooseTitle: string;
    leadTextPrefix: string;
    leadTextSuffix: string;
    features: Array<{ title: string; desc: string }>;
    keywordBoxTitle: string;
    keywordBoxTextPrefix: string;
    keywordBoxTextSuffix: string;
    relatedLabel: string;
    relatedTitle: string;
    exploreRelated: string;
    sitemapBtn: string;
    visitTitle: string;
    openDaily: string;
  };
  sitemapPage: {
    title: string;
    subtitle: string;
    mainPagesHeading: string;
    homeTitle: string;
    homeDesc: string;
    sitemapTitle: string;
    sitemapDesc: string;
    productsHeading: string;
    xmlHeading: string;
    xmlDesc: string;
  };
  collections: Record<string, LocalizedCollection>;
}
