export interface PageSEO {
  url: string;
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTailKeywords: string[];
  searchIntent: string;
  h1: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  schemaType: string;
  breadcrumbs: { name: string; item: string }[];
}

export const domain = 'https://www.sanjaycutpiece.in';

export const seoConfig: Record<string, PageSEO> = {
  '/': {
    url: '/',
    title: 'Sanjay Cut Piece | Blouse Pieces, Dupattas, Leggings & Dress Material in Thane, Jambli Naka — Since 1977',
    description: 'Sanjay Cut Piece is Thane\'s trusted fabric & matching centre since 1977 — shop blouse pieces, cotton & silk dress material, dupattas, leggings, saree petticoats and saree matching fabric near Jambli Naka, Thane West. Visit us today!',
    primaryKeyword: 'fabric shop Thane',
    secondaryKeywords: ['cut piece centre Thane', 'matching centre Jambli Naka', 'ladies fabric shop Thane', 'cotton fabric shop Thane', 'leggings shop Thane', 'dupatta shop Jambli Naka', 'blouse pieces Thane West', 'dress material Thane'],
    longTailKeywords: ['cut piece shop Jambli Naka Thane', 'matching centre near me Thane West', 'women dress material shop Thane West', 'leggings and dupatta shop near Jambli Naka Thane'],
    searchIntent: 'Commercial / Local',
    h1: 'Sanjay Cut Piece — Fabric Shop & Matching Centre in Thane Since 1977',
    priority: 1.0,
    changefreq: 'weekly',
    schemaType: 'ClothingStore',
    breadcrumbs: [
      { name: 'Home', item: '/' }
    ]
  },
  '/dress-materials': {
    url: '/dress-materials',
    title: 'Dress Material Shop in Thane | Ladies Dress Material, Salwar Suit Material & Kurti Fabric',
    description: 'Dress material shop near Jambli Naka, Thane West — ladies dress material, salwar suit material, kurti fabric, pure cotton dress material, unstitched dress material, printed dress material, chanderi, georgette & silk. Visit Sanjay Cut Piece Thane.',
    primaryKeyword: 'dress material shop Thane',
    secondaryKeywords: ['ladies dress material Thane', 'salwar suit material Thane', 'kurti fabric Thane', 'cotton dress material shop', 'unstitched dress material Thane'],
    longTailKeywords: ['dress material shop near Jambli Naka Thane', 'ladies fabric and dress material Thane', 'cotton fabric and dress material Thane'],
    searchIntent: 'Commercial / Product',
    h1: 'Dress Material Shop in Thane — Ladies Dress Material & Suit Material',
    priority: 0.9,
    changefreq: 'weekly',
    schemaType: 'Product',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/#collections' },
      { name: 'Dress Materials', item: '/dress-materials' }
    ]
  },
  '/blouse-materials': {
    url: '/blouse-materials',
    title: 'Blouse Material Shop in Thane | Blouse Matching Fabric, Silk & Brocade',
    description: 'Blouse material shop & blouse matching fabric store near Jambli Naka, Thane West — cotton blouse material, blouse cloth, silk brocade, bandhani, raw silk & embroidered blouse fabric. Expert blouse matching at Sanjay Cut Piece Thane.',
    primaryKeyword: 'blouse material shop Thane',
    secondaryKeywords: ['blouse matching fabric Thane', 'cotton blouse material Thane', 'blouse cloth shop Thane', 'blouse fabric shop Thane', 'blouse matching centre Thane'],
    longTailKeywords: ['blouse matching fabric shop near Jambli Naka Thane', 'matching blouse and fabric Thane', 'designer blouse shop Thane'],
    searchIntent: 'Commercial / Product',
    h1: 'Blouse Material Shop in Thane — Blouse Matching Fabric & Silk',
    priority: 0.9,
    changefreq: 'weekly',
    schemaType: 'Product',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/#collections' },
      { name: 'Blouse Materials', item: '/blouse-materials' }
    ]
  },
  '/ready-made-blouses': {
    url: '/ready-made-blouses',
    title: 'Readymade Blouse Shop in Thane | Blouse Shop Near Me — Designer & Cotton Blouses',
    description: 'Readymade blouse shop near Jambli Naka, Thane West — readymade ladies blouse, designer blouse, cotton blouse, stretchable & padded blouse in all sizes. Your blouse shop near me in Thane. Readymade blouse Jambli Naka at Sanjay Cut Piece.',
    primaryKeyword: 'readymade blouse shop Thane',
    secondaryKeywords: ['blouse shop near me', 'readymade ladies blouse Thane', 'designer blouse shop Thane', 'ladies blouse shop Thane', 'readymade blouse Jambli Naka'],
    longTailKeywords: ['readymade blouse shop near Jambli Naka Thane', 'readymade blouse and matching fabric Thane', 'blouse shop open near me Thane'],
    searchIntent: 'Commercial / Product',
    h1: 'Readymade Blouse Shop in Thane — Designer & Cotton Blouses Near Me',
    priority: 0.8,
    changefreq: 'weekly',
    schemaType: 'Product',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/#collections' },
      { name: 'Ready Made Blouses', item: '/ready-made-blouses' }
    ]
  },
  '/fabrics': {
    url: '/fabrics',
    title: 'Fabric Shop & Textile Store in Thane West | Cotton Fabric, Cotton Cloth & More',
    description: 'Fabric shop & textile store near Jambli Naka, Thane West — cotton fabric, cotton cloth, printed cotton fabric, plain fabric, linen, rayon, silk & designer textiles for custom tailoring. Buy fabric in Thane at Sanjay Cut Piece.',
    primaryKeyword: 'fabric shop Thane West',
    secondaryKeywords: ['cotton fabric shop Thane', 'cotton cloth shop Thane', 'textile shop Thane', 'cloth shop Thane', 'fabric store Thane West'],
    longTailKeywords: ['buy fabric Thane', 'buy cotton fabric Thane', 'cotton textile shop Thane', 'fabric shop near Jambli Naka Thane'],
    searchIntent: 'Commercial / Product',
    h1: 'Fabric Shop & Textile Store in Thane — Cotton Fabric & Cloth',
    priority: 0.9,
    changefreq: 'weekly',
    schemaType: 'Product',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/#collections' },
      { name: 'Fabrics', item: '/fabrics' }
    ]
  },
  '/dupattas': {
    url: '/dupattas',
    title: 'Dupattas Shop in Thane | Banarasi, Silk, Chiffon & Bandhani Dupattas',
    description: 'Find elegant dupattas in Banarasi silk, Bandhani, Organza, Net, Chiffon & Kalamkari near Jambli Naka, Thane West. Complete your outfit with matching dupattas at Sanjay Cut Piece — your dupatta & matching fabric shop in Thane.',
    primaryKeyword: 'dupatta shop in Thane',
    secondaryKeywords: ['banarasi dupatta Thane', 'bandhani dupatta Thane West', 'matching fabrics Thane', 'cloth shop Jambli Naka'],
    longTailKeywords: ['heavy designer dupatta matching store in Thane West', 'silk dupatta collection near Jambli Naka Thane'],
    searchIntent: 'Commercial / Product',
    h1: 'Designer & Traditional Dupattas in Thane',
    priority: 0.8,
    changefreq: 'weekly',
    schemaType: 'Product',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/#collections' },
      { name: 'Dupattas', item: '/dupattas' }
    ]
  },
  '/cut-pieces': {
    url: '/cut-pieces',
    title: 'Cut Piece Centre & Cut Piece Shop in Thane | Fabric Cut Pieces Near Jambli Naka',
    description: 'Cut piece centre & cut piece shop near Jambli Naka, Thane West — cotton cut pieces, fabric cut pieces, cut piece fabric, blouse cuts & suit pieces. Sanjay Cut Piece: your trusted cut piece store & cut piece center in Thane.',
    primaryKeyword: 'cut piece shop Thane',
    secondaryKeywords: ['cut piece centre Thane', 'cut piece center Thane', 'fabric cut piece shop Thane', 'cotton cut piece shop Thane', 'cut piece shop Jambli Naka'],
    longTailKeywords: ['best cut piece shop in Thane', 'cut piece centre near me Thane', 'cut piece shop near Jambli Naka Thane', 'cotton cut piece centre Thane'],
    searchIntent: 'Commercial / Product',
    h1: 'Cut Piece Centre & Cut Piece Shop in Thane — Near Jambli Naka',
    priority: 0.9,
    changefreq: 'weekly',
    schemaType: 'Product',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/#collections' },
      { name: 'Cut Pieces', item: '/cut-pieces' }
    ]
  },
  '/matching-materials': {
    url: '/matching-materials',
    title: 'Matching Centre in Thane | Matching Center, Blouse Matching Fabric & Matching Cloth',
    description: 'Matching centre & matching center near Jambli Naka, Thane — blouse matching fabric, matching cloth, matching dress material, matching fabrics & coordinated sets. Expert colour matching for sarees, suits & blouses. Your matching centre near me in Thane West.',
    primaryKeyword: 'matching centre Thane',
    secondaryKeywords: ['matching center Thane', 'blouse matching centre Thane', 'matching cloth shop Thane', 'matching fabric centre Thane', 'matching centre Jambli Naka'],
    longTailKeywords: ['matching centre near me Thane', 'blouse matching center near Jambli Naka', 'matching centre near Jambli Naka Thane', 'fabric and matching centre Thane'],
    searchIntent: 'Commercial / Product',
    h1: 'Matching Centre in Thane — Blouse Matching Fabric & Matching Cloth',
    priority: 0.8,
    changefreq: 'weekly',
    schemaType: 'Product',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/#collections' },
      { name: 'Matching Materials', item: '/matching-materials' }
    ]
  },
  '/saree-petticoats': {
    url: '/saree-petticoats',
    title: 'Saree Petticoats Shop in Thane | Pure Cotton & Satin Inskirts',
    description: 'Buy comfortable pure cotton saree petticoats and satin inskirts in all colors & sizes at Sanjay Cut Piece Thane West. Stitched and elastic options available.',
    primaryKeyword: 'saree petticoat shop Thane',
    secondaryKeywords: ['cotton petticoats Thane', 'readymade petticoat Thane', 'saree inskirt store Thane West'],
    longTailKeywords: ['cotton & satin saree petticoats in Thane West near Jambli Naka', 'readymade saree inskirt shop Thane'],
    searchIntent: 'Commercial / Product',
    h1: 'Saree Petticoats & Inskirts in Thane',
    priority: 0.8,
    changefreq: 'weekly',
    schemaType: 'Product',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/#collections' },
      { name: 'Saree Petticoats', item: '/saree-petticoats' }
    ]
  },
  '/saree-shapewear': {
    url: '/saree-shapewear',
    title: 'Saree Shapewear Shop in Thane | Seamless Saree Underskirts & Contouring',
    description: 'Get smooth saree draping with comfortable saree shapewear in Thane West. Breathable, mermaid fit saree shapewear in all shades at Sanjay Cut Piece.',
    primaryKeyword: 'saree shapewear Thane',
    secondaryKeywords: ['saree petticoat shapewear', 'underskirt shapewear Thane', 'mermaid saree shapewear'],
    longTailKeywords: ['seamless saree shapewear shop in Thane West near Jambli Naka', 'comfortable saree contouring underskirt Thane'],
    searchIntent: 'Commercial / Product',
    h1: 'Seamless Saree Shapewear in Thane',
    priority: 0.8,
    changefreq: 'weekly',
    schemaType: 'Product',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/#collections' },
      { name: 'Saree Shapewear', item: '/saree-shapewear' }
    ]
  },
  '/leggings': {
    url: '/leggings',
    title: 'Cotton Leggings Shop in Thane | Ankle Length, Churidar & 4-Way Stretch',
    description: 'Shop soft, durable cotton leggings in Thane West. Ankle-length, churidar style, and 4-way stretch leggings in 50+ colors at Sanjay Cut Piece.',
    primaryKeyword: 'cotton leggings Thane',
    secondaryKeywords: ['ankle length leggings Thane', 'churidar leggings Thane', '4 way stretch leggings'],
    longTailKeywords: ['premium cotton leggings store in Thane West near Jambli Naka', 'ladies cotton leggings shop Thane'],
    searchIntent: 'Commercial / Product',
    h1: 'Women Cotton Leggings Collection in Thane',
    priority: 0.8,
    changefreq: 'weekly',
    schemaType: 'Product',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/#collections' },
      { name: 'Leggings', item: '/leggings' }
    ]
  },
  '/sitemap.html': {
    url: '/sitemap.html',
    title: 'HTML Sitemap | Sanjay Cut Piece Thane',
    description: 'Explore the complete sitemap directory of pages and collections for Sanjay Cut Piece, Thane West.',
    primaryKeyword: 'HTML sitemap',
    secondaryKeywords: ['website navigation', 'page directory', 'sanjay matching centre sitemap'],
    longTailKeywords: ['sitemap of Sanjay Cut Piece Thane fabric store'],
    searchIntent: 'Informational',
    h1: 'Website Sitemap — Sanjay Cut Piece',
    priority: 0.7,
    changefreq: 'monthly',
    schemaType: 'ItemPage',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Sitemap', item: '/sitemap.html' }
    ]
  }
};
