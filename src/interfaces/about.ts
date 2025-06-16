export interface AboutUs {
  title: string;
  content: string;
  image?: {
    url: string;
    alternativeText?: string;
    documentId: string;
    name: string;
  };
}
