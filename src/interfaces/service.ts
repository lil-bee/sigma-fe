export interface ServiceSection {
  title: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  image?: {
    url: string;
    alternativeText?: string;
    documentId: string;
    name: string;
  };
  bgColor?: string;
  hasComplexImage?: boolean;
}

export interface ServiceCategory {
  id: number;
  category_title: string;
  services: ServiceItem[];
}
