export interface PartnerLogo {
  id: number;
  company_name: string;
  logos: {
    url: string;
    alternativeText?: string;
  };
}
