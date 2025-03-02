import React from 'react';
import { 
  Star, 
  Calendar, 
  DollarSign, 
  Tag, 
  BarChart3, 
  Edit, 
  Copy, 
  FileDown, 
  Diamond, 
  Trash2
} from 'lucide-react';
import { SponsorshipData, ViewMode } from '../types';

interface SponsorshipCardProps {
  sponsorship: SponsorshipData;
  viewMode: ViewMode;
}

const SponsorshipCard: React.FC<SponsorshipCardProps> = ({ sponsorship, viewMode }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : 
          i === Math.floor(rating) && rating % 1 > 0 ? "fill-amber-400 text-amber-400" : 
          "fill-gray-200 text-gray-200"
        }`} 
      />
    ));
  };

  const renderAssetClassBadge = (assetClass: string) => {
    switch(assetClass) {
      case 'video':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white border border-gray-200">📹 video</span>;
      case 'image':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white border border-gray-200">🖼️ img</span>;
      case 'audio':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white border border-gray-200">🔊 audio</span>;
      case 'document':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white border border-gray-200">📄 doc</span>;
      case 'social':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white border border-gray-200">🔗 social</span>;
      case 'event':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white border border-gray-200">📅 event</span>;
      case 'product':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white border border-gray-200">📦 product</span>;
      case 'digital':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white border border-gray-200">💻 digital</span>;
      case 'retail':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white border border-gray-200">🏪 retail</span>;
      default:
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white border border-gray-200">🔗 link</span>;
    }
  };

  // Detailed view card
  const DetailedCard = () => (
    <div className="overflow-hidden border-0 rounded-xl shadow-lg bg-white h-full">
      {/* Header with campaign image and overlay */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 mix-blend-multiply z-10"></div>
        <img 
          src={sponsorship.images[0]}
          alt={sponsorship.campaignName} 
          className="w-full h-48 object-cover"
        />
        
        {/* Floating price tag */}
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md py-1 px-3 z-20 flex items-center">
          <DollarSign className="h-4 w-4 text-blue-500" />
          <span className="font-bold text-lg ml-0.5">{sponsorship.amount.toLocaleString()}</span>
        </div>
        
        {/* Sponsorship status badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-green-500 text-white hover:bg-green-600 px-3 py-1 rounded-full text-xs font-medium">
            {sponsorship.status}
          </span>
        </div>
        
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-white p-1 mr-3 flex-shrink-0">
              <img 
                src={sponsorship.brand.logo}
                alt={sponsorship.brand.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white leading-tight">{sponsorship.campaignName}</h3>
              {sponsorship.subtitle && <p className="text-white/90 text-sm">{sponsorship.subtitle}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="p-5">
        {/* Ratings */}
        <div className="flex items-center mb-4">
          <div className="flex">
            {renderStars(sponsorship.rating)}
          </div>
          <span className="text-xs text-gray-500 ml-1.5">{sponsorship.ratingCount} ratings</span>
        </div>
        
        {/* Information grid */}
        <div className="space-y-4">
          {/* ID and Details Section */}
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Tag className="h-4 w-4 mr-1.5" />
              <span className="font-medium">Campaign Details</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-medium text-gray-500 mb-1">Listing ID</p>
                <p className="text-sm font-semibold">{sponsorship.listingId}</p>
              </div>
              
              <div>
                <p className="text-xs font-medium text-gray-500 mb-1">Brand</p>
                <p className="text-sm font-semibold flex items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">{sponsorship.brand.ticker}</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Time Windows Section */}
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Calendar className="h-4 w-4 mr-1.5" />
              <span className="font-medium">Time Windows</span>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-xs font-medium text-gray-500 mb-1">Listing period</p>
                <div className="flex items-center">
                  <div className="bg-white px-2 py-1 rounded border border-gray-200 text-sm">
                    <span className="font-semibold">Start:</span> {formatDate(sponsorship.listingTimeWindow.startDate)}
                  </div>
                  <div className="mx-2 text-gray-300">→</div>
                  <div className="bg-white px-2 py-1 rounded border border-gray-200 text-sm">
                    <span className="font-semibold">End:</span> {formatDate(sponsorship.listingTimeWindow.endDate)}
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-xs font-medium text-gray-500 mb-1">Sponsorship period</p>
                <div className="flex items-center">
                  <div className="bg-white px-2 py-1 rounded border border-gray-200 text-sm">
                    <span className="font-semibold">Start:</span> {formatDate(sponsorship.sponsorshipTimeWindow.startDate)}
                  </div>
                  <div className="mx-2 text-gray-300">→</div>
                  <div className="bg-white px-2 py-1 rounded border border-gray-200 text-sm">
                    <span className="font-semibold">End:</span> {formatDate(sponsorship.sponsorshipTimeWindow.endDate)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Metrics & Assets Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <BarChart3 className="h-4 w-4 mr-1.5" />
                <span className="font-medium">Deals</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 text-blue-800 text-sm font-semibold rounded-lg px-2.5 py-1 mr-2">
                  {sponsorship.relatedTotalDeals} total
                </div>
                <div className="bg-green-100 text-green-800 text-sm font-semibold rounded-lg px-2.5 py-1">
                  {sponsorship.relatedExecutedDeals} executed
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Assets</span>
                </div>
                <span className="bg-blue-100 text-blue-800 hover:bg-blue-100 px-2.5 py-0.5 rounded-full text-xs font-medium">
                  {sponsorship.assets}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {sponsorship.assetClasses.slice(0, 5).map((assetClass, index) => (
                  <div key={index}>
                    {renderAssetClassBadge(assetClass)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with actions */}
      <div className="flex justify-between px-4 py-3 border-t bg-gray-50 mt-auto">
        <div className="flex space-x-2">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-9 px-4 py-2">
            <Edit className="h-4 w-4 mr-1.5" />
            Edit
          </button>
        </div>
        <div className="flex space-x-2">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-white hover:bg-gray-50 h-8 w-8 p-0">
            <FileDown className="h-4 w-4 text-blue-600" />
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-white hover:bg-gray-50 h-8 w-8 p-0">
            <Diamond className="h-4 w-4 text-purple-600" />
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-white hover:bg-gray-50 h-8 w-8 p-0">
            <Trash2 className="h-4 w-4 text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );

  // Compact view card
  const CompactCard = () => (
    <div className="overflow-hidden border-0 rounded-xl shadow-sm bg-white h-full">
      <div className="flex">
        {/* Image thumbnail */}
        <div className="relative w-1/3">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-purple-600/70 mix-blend-multiply"></div>
          <img 
            src={sponsorship.images[0]}
            alt={sponsorship.campaignName} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2">
            <span className="text-xs px-1.5 py-0 bg-green-500 text-white rounded-full">
              {sponsorship.status}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="w-2/3 p-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-sm leading-tight">{sponsorship.campaignName}</h3>
              {sponsorship.subtitle && <p className="text-xs text-gray-500">{sponsorship.subtitle}</p>}
            </div>
            <div className="flex items-center">
              <DollarSign className="h-3 w-3 text-blue-500" />
              <span className="font-bold text-sm">{sponsorship.amount.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="mt-2 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-white mr-1 flex-shrink-0 border border-blue-200">
                <img 
                  src={sponsorship.brand.logo}
                  alt={sponsorship.brand.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="text-xs font-medium">{sponsorship.brand.ticker}</span>
            </div>
            
            <div className="flex space-x-1 ml-auto">
              <span className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-xs px-1.5 py-0 rounded-full">
                {sponsorship.relatedTotalDeals}/{sponsorship.relatedExecutedDeals}
              </span>
              
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`h-3 w-3 ${
                      star <= sponsorship.rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"
                    }`} 
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-between mt-3">
            <div className="text-xs text-gray-600">
              ID: <span className="font-semibold">{sponsorship.listingId}</span>
            </div>
            <div className="flex space-x-1">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-6 w-6 p-0">
                <Edit className="h-3 w-3 text-gray-600" />
              </button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-6 w-6 p-0">
                <FileDown className="h-3 w-3 text-gray-600" />
              </button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-6 w-6 p-0">
                <Diamond className="h-3 w-3 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return viewMode === 'advanced' ? <DetailedCard /> : <CompactCard />;
};

export default SponsorshipCard;
