export interface SponsorshipData {
  id: string;
  campaignName: string;
  subtitle?: string;
  amount: number;
  rating: number;
  ratingCount: number;
  listingId: string;
  status: string;
  listingTimeWindow: {
    startDate: string;
    endDate: string;
  };
  sponsorshipTimeWindow: {
    startDate: string;
    endDate: string;
  };
  relatedTotalDeals: number;
  relatedExecutedDeals: number;
  assets: number;
  assetClasses: string[];
  brand: {
    name: string;
    ticker: string;
    logo: string;
  };
  images: string[];
}

export type ViewMode = 'basic' | 'advanced';
