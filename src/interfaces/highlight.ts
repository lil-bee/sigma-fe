export interface StrapiMediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface StrapiMedia {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ContentSection {
  id: number;
  sectionTitle: string;
  sectionDescription: string;
  images: StrapiMedia[];
}

export interface Testimonial {
  id: number;
  testi: string;
  nama: string;
  jabatan: string;
  perusahaan: string;
}

export interface Highlight {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  client: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  date: string;
  locale: string;
  heroImage: StrapiMedia;
  Content?: ContentSection[];
  Testimoni?: Testimonial;
}

export interface StrapiPaginationMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface HighlightResponse {
  data: Highlight[];
  meta: StrapiPaginationMeta;
}
