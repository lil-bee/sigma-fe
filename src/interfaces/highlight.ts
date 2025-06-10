export interface StrapiMedia {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
  url: string;
}

export interface ContentSection {
  id: number;
  sectionTitle: string;
  sectionDescription: string;
  images: StrapiMedia[];
}

export interface Highlight {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  client: string;
  location: string;
  heroImage: StrapiMedia;
  Content?: ContentSection[];
}
