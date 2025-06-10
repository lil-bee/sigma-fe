export interface Footer {
  logo: {
    url: string;
    alternativeText?: string;
  };
  address: string;
  email: string;
  phone: string;
  social_links: {
    name: string;
    url: string;
    icon?: string; // opsional jika icon pakai string name (misal "facebook")
  }[];
  footer_menu: {
    label: string;
    url: string;
  }[];
}
