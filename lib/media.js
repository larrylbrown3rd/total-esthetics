/** Client photos & studio reels in /public/media */

export const galleryMedia = [
  {
    id: 1,
    type: 'image',
    src: '/media/lash-brow-result-1.png',
    label: 'Lash Extensions & Brow Artistry',
    category: 'Lash Extensions',
    alt: 'Client with lash extensions and sculpted brows at Total Esthetics',
  },
  {
    id: 2,
    type: 'image',
    src: '/media/lash-brow-result-2.png',
    label: 'Brow Lamination & Lash Extensions',
    category: 'Brow Lamination',
    alt: 'Close-up of brow lamination and lash extension results',
  },
  {
    id: 3,
    type: 'video',
    src: '/media/studio-reel-1.mov',
    poster: '/media/lash-brow-result-1.png',
    label: 'Studio Session Reel',
    category: 'Lash Extensions',
    alt: 'Behind the scenes lash and brow treatment at Total Esthetics',
  },
  {
    id: 4,
    type: 'video',
    src: '/media/studio-reel-2.mov',
    poster: '/media/lash-brow-result-2.png',
    label: 'Transformation Reel',
    category: 'Brow Lamination',
    alt: 'Client transformation video at Total Esthetics',
  },
  {
    id: 5,
    type: 'video',
    src: '/media/studio-reel-3.mov',
    poster: '/media/lash-brow-result-2.png',
    label: 'Luxury Lash + Brow Reel',
    category: 'Combos',
    alt: 'Luxury lash and brow artistry reel',
  },
];

export const studioReels = galleryMedia.filter((item) => item.type === 'video');

export const heroBackground = {
  image: '/hero.jpg',
  video: studioReels[0].src,
};

/** @deprecated use heroBackground */
export const heroBackgroundVideo = {
  src: heroBackground.video,
  poster: heroBackground.image,
};

/** Home & Instagram grids — pad to 6 tiles */
export const homeGalleryPreview = [
  ...galleryMedia,
  { ...galleryMedia[0], id: 6 },
];
