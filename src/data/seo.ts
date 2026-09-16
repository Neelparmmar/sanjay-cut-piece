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
    title: 'Fabric & Dress Material Shop in Thane | Sanjay Cut Piece — Since 1977',
    description: 'Discover quality fabrics, dress materials, blouse materials, cut pieces, dupattas & matching fabrics at Sanjay Cut Piece, Jambli Naka, Thane West. Serving customers with trust since 1977.',
    primaryKeyword: 'fabric shop in Thane',
    secondaryKeywords: ['dress material store Thane', 'matching centre Thane West', 'cut piece cloth shop Thane'],
    longTailKeywords: ['best cut piece fabric shop in Thane Jambli Naka', 'cloth store near station Thane West'],
    searchIntent: 'Commercial / Local',
    h1: 'Sanjay Cut Piece & Matching Centre — Quality Fabrics in Thane Since 1977',
    priority: 1.0,
    changefreq: 'weekly',
    schemaType: 'ClothingStore',
    breadcrumbs: [
      { name: 'Home', item: '/' }
    ]
  },
  '/dress-materials': {
    url: '/dress-materials',
    title: 'Dress Materials Shop in Thane | Cotton, Silk & Fancy Suits',
    description: 'Explore exquisite dress materials in pure cotton, chanderi, georgette & silk at Sanjay Cut Piece Thane West. Premium quality suit pieces for all occasions.',
    primaryKeyword: 'dress materials in Thane',
    secondaryKeywords: ['dress material Thane', 'cotton dress material shop', 'chanderi dress material Thane'],
    longTailKeywords: ['cotton dress materials manufacturer supplier in Thane', 'suit piece shop near Jambli Naka'],
    searchIntent: 'Commercial / Product',
    h1: 'Dress Materials in Thane',
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
    title: 'Blouse Materials & Brocades in Thane | Pure Silk, Raw Silk & Fancy Fabrics',
    description: 'Shop designer blouse materials, silk brocades, bandhani, raw silk, and embroidered blouse pieces in Thane West at Sanjay Cut Piece. Perfect matching guaranteed.',
    primaryKeyword: 'blouse materials Thane',
    secondaryKeywords: ['silk blouse piece Thane', 'brocade blouse fabric Thane', 'designer blouse material'],
    longTailKeywords: ['designer blouse material shop in Thane West', 'matching blouse fabric store near Jambli Naka'],
    searchIntent: 'Commercial / Product',
    h1: 'Premium Blouse Fabrics & Materials in Thane',
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
    title: 'Ready Made Blouses Shop in Thane | Stretchable, Padded & Partywear Blouses',
    description: 'Buy ready to wear blouses in Thane West. Wide range of stretchable, padded, velvet, cotton & designer readymade blouses in all sizes at Sanjay Cut Piece.',
    primaryKeyword: 'ready made blouse shop Thane',
    secondaryKeywords: ['readymade saree blouse Thane', 'stretchable blouse shop Thane', 'partywear readymade blouse'],
    longTailKeywords: ['readymade designer blouse shop near Jambli Naka Thane', 'cotton readymade blouse store Thane'],
    searchIntent: 'Commercial / Product',
    h1: 'Readymade Blouses Collection in Thane',
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
    title: 'Quality Fabrics & Textiles Shop in Thane West | Cotton, Rayon, Linen & Silk',
    description: 'Premium quality running fabric by meter in Thane West. Cotton, linen, rayon, silk, organza & designer textiles for custom tailoring at Sanjay Cut Piece.',
    primaryKeyword: 'fabric shop Thane West',
    secondaryKeywords: ['wholesale fabric supplier Thane', 'cotton cloth shop Thane', 'running fabric by meter Thane'],
    longTailKeywords: ['quality cotton & silk fabric store in Thane West', 'custom tailoring fabric shop near station Thane'],
    searchIntent: 'Commercial / Product',
    h1: 'Quality Fabrics & Tailoring Textiles in Thane',
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
    description: 'Find elegant dupattas in Banarasi silk, Bandhani, Organza, Net, Chiffon & Kalamkari at Sanjay Cut Piece Thane West. Complete your outfit with matching dupattas.',
    primaryKeyword: 'dupatta shop in Thane',
    secondaryKeywords: ['banarasi dupatta Thane', 'bandhani dupatta Thane West', 'fancy dupatta store Thane'],
    longTailKeywords: ['heavy designer dupatta matching store in Thane West', 'silk dupatta collection near Jambli Naka'],
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
    title: 'Cut Piece Cloth Centre in Thane West | Quality Fabric Cut Pieces',
    description: 'Sanjay Cut Piece Centre Thane offers wide selection of high quality fabric cut pieces, blouse cuts, suit pieces & lining materials at bargain value.',
    primaryKeyword: 'cut piece cloth shop Thane',
    secondaryKeywords: ['cut piece fabric center Thane', 'leftover cloth material Thane', 'bargain fabric cut piece'],
    longTailKeywords: ['best cut piece fabric shop near station Thane West', 'cut piece cloth market Thane'],
    searchIntent: 'Commercial / Product',
    h1: 'Cut Piece Fabric Centre in Thane',
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
    title: 'Matching Centre in Thane West | Lining, Piping & Coordinated Fabrics',
    description: 'Expert saree matching and dress lining fabrics in Thane West. Cotton lining, satin lining, piping materials & perfect color coordination at Sanjay Cut Piece.',
    primaryKeyword: 'matching centre Thane',
    secondaryKeywords: ['lining material shop Thane', 'matching dress material Thane', 'saree matching store Thane'],
    longTailKeywords: ['saree blouse matching centre in Thane West near station', 'perfect color matching fabric shop Thane'],
    searchIntent: 'Commercial / Product',
    h1: 'Saree & Dress Matching Centre in Thane',
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
