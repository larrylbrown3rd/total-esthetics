export const SITE_URL = 'https://totalesthetics.com';

export const BRAND_TAGLINE = 'Lash & Brow Studio';
export const BRAND_TAGLINE_UPPER = 'LASH & BROW STUDIO';

export const BOOKING_URL =
  'https://totalesthetics.as.me/schedule/d6a31974';

/** Acuity scheduler embed — update this URL to your live booking menu */
export const ACUITY_SCHEDULER_URL = 'https://totalesthetics.as.me/';

export const ACUITY_IFRAME_URL =
  'https://app.acuityscheduling.com/schedule.php?owner=16827071';

const ACUITY_BASE = 'https://totalesthetics.as.me/?appointmentType=category:';

export const bookingAppointmentCategories = [
  { title: 'Brows', url: `${ACUITY_BASE}Brows` },
  { title: 'Full Sets', url: `${ACUITY_BASE}Full%20Sets` },
  { title: 'In Fills', url: `${ACUITY_BASE}In%20Fills` },
  { title: 'Miscellaneous', url: `${ACUITY_BASE}Miscellaneous` },
];

export const bookingPackageCategories = [
  {
    title: 'THE TOTAL PACKAGE',
    url: `${ACUITY_BASE}THE%20TOTAL%20PACKAGE`,
  },
];

export const SOCIAL = {
  instagram: 'https://instagram.com/totalesthetics',
  facebook: 'https://facebook.com/totalesthetics',
  tiktok: 'https://tiktok.com/@totalesthetics',
};

export const services = [
  {
    slug: 'lash-lift',
    title: 'Lash Lift',
    category: 'lash-lift',
    duration: '45 min',
    price: '$85',
    description:
      'A semi-permanent treatment that curls and lifts your natural lashes from the root for a wide-eyed natural look without mascara.',
  },
  {
    slug: 'lash-extensions',
    title: 'Lash Extensions',
    category: 'lash-extensions',
    duration: '90 min',
    price: '$120',
    description:
      'Custom lash extensions applied one by one for a full natural or dramatic look tailored to your eye shape and lifestyle.',
  },
  {
    slug: 'brow-lamination',
    title: 'Brow Lamination',
    category: 'brow-lamination',
    duration: '60 min',
    price: '$75',
    description:
      'Restructures brow hairs into a uniform shape for a full fluffy brushed-up look that lasts weeks.',
  },
  {
    slug: 'brow-tint',
    title: 'Brow Tint',
    category: 'brow-tint',
    duration: '30 min',
    price: '$45',
    description:
      'Semi-permanent dye that defines and darkens brows to match your desired shade and frame your face.',
  },
  {
    slug: 'brow-wax',
    title: 'Brow Wax',
    category: 'brow-wax',
    duration: '20 min',
    price: '$35',
    description:
      'Precise waxing that shapes and cleans up brows for a polished defined look that opens up the eyes.',
  },
  {
    slug: 'combo',
    title: 'Lash + Brow Combo',
    category: 'combos',
    duration: '120 min',
    price: '$145',
    description:
      'Lash lift and brow lamination together for a complete eye transformation in one luxurious visit.',
  },
];

export const serviceSelectOptions = [
  { value: '', label: 'Select a service' },
  ...services.map((s) => ({
    value: s.slug,
    label: `${s.title} — ${s.price}`,
  })),
];

export const faqs = [
  {
    question: 'How long do lash extensions last?',
    answer:
      'With proper care lash extensions last 2-4 weeks before a fill is needed. Avoid oil-based products and excessive moisture to extend longevity.',
  },
  {
    question: 'How should I prepare for my appointment?',
    answer:
      'Arrive with clean skin and no eye makeup or mascara. Avoid caffeine if you are sensitive to stimulation. Remove contact lenses before lash services.',
  },
  {
    question: 'Can I wear makeup after my appointment?',
    answer:
      'Avoid eye makeup for 24 hours after lash services. After that you may wear makeup but avoid oil-based products near the lash line.',
  },
  {
    question: 'How often should I get a lash lift?',
    answer:
      'A lash lift typically lasts 6-8 weeks following your natural lash growth cycle. Most clients book every 6-8 weeks for best results.',
  },
];

export const values = [
  {
    title: 'Precision',
    description:
      'Every lash and brow treatment is carefully crafted to complement your unique facial features and personal style.',
  },
  {
    title: 'Hygiene',
    description:
      'Strict sanitation standards are maintained for every tool and surface before and after every client.',
  },
  {
    title: 'Confidence',
    description:
      'The goal of every appointment is for you to leave feeling your absolute best and completely in love with your look.',
  },
];

export const testimonials = [
  {
    quote:
      'Absolutely obsessed with my lash lift. She is so precise and professional. Will never go anywhere else.',
    author: 'Jasmine T.',
  },
  {
    quote:
      'The brow lamination changed my entire morning routine. I wake up with perfect brows every single day.',
    author: 'Monique R.',
  },
  {
    quote:
      'Best lash artist in Atlanta hands down. The attention to detail is unmatched and the studio is so clean and calming.',
    author: 'Destiny W.',
  },
];


export const credentials = [
  'Licensed esthetician — State of Georgia',
  'Advanced lash extension certification',
  'Brow lamination & tint specialist training',
  'Sanitation & safety protocols certified',
  'Continuing education — luxury lash artistry',
];

export const contactFaqs = [
  {
    q: 'How do I book?',
    a: 'Book online 24/7 through our scheduling page or send us a message below.',
  },
  {
    q: 'Where are you located?',
    a: 'We are based in Hapeville, GA — serving the greater Atlanta area.',
  },
  {
    q: 'What is your cancellation policy?',
    a: '24 hours notice required. Late cancellations may incur a 50% service fee.',
  },
];

export const bookInfoSections = [
  {
    title: 'Cancellation Policy',
    body: 'We require 24 hours notice to cancel or reschedule your appointment. Cancellations with less than 24 hours notice may be charged 50% of the service fee. No-shows will be charged in full.',
  },
  {
    title: 'What to Expect',
    body: 'Your appointment begins with a brief consultation to discuss your goals and assess your natural lashes or brows. All treatments are performed in a private calm studio setting. Most services take 20 to 120 minutes depending on your selection.',
  },
  {
    title: 'Preparation Tips',
    body: 'Arrive with completely clean skin and no eye makeup or mascara. Avoid caffeine if you are sensitive to stimulation. For lash extensions do not curl your lashes or use mascara for 24 hours beforehand. For brow services allow your brows to grow in for at least 4 weeks for best shaping results.',
  },
];

export const defaultMetadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Total Esthetics | Lash & Brow Studio in Hapeville, GA',
  description:
    'Premier lash and brow studio in Hapeville, GA. Book luxury lash extensions, brow lamination, and artistry online.',
  keywords: [
    'lash extensions hapeville ga',
    'brow lamination atlanta',
    'luxury esthetician near me',
    'lash lift georgia',
  ],
  openGraph: {
    title: 'Total Esthetics | Lash & Brow Studio',
    description: 'Premium lash and brow artistry in Hapeville GA',
    type: 'website',
    images: [{ url: '/media/lash-brow-result-1.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Total Esthetics',
    description: 'Luxury lash and brow artistry in Hapeville GA',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};
