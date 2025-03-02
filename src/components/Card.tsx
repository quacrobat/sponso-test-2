import React, { useState } from 'react';
import { Star, Calendar, DollarSign, BarChart3, Tag, ChevronDown, ChevronUp } from 'lucide-react';
import { CardData, ViewMode } from '../types';

interface CardProps {
  card: CardData;
  viewMode: ViewMode;
}

const Card: React.FC<CardProps> = ({ card, viewMode }) => {
  const [expanded, setExpanded] = useState(false);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col w-full max-w-[300px] h-full border border-gray-200 hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src={card.image} 
          alt={card.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            card.assetClass === 'Equity' ? 'bg-blue-100 text-blue-800' :
            card.assetClass === 'ETF' ? 'bg-green-100 text-green-800' :
            card.assetClass === 'Fixed Income' ? 'bg-yellow-100 text-yellow-800' :
            card.assetClass === 'REIT' ? 'bg-purple-100 text-purple-800' :
            card.assetClass === 'Sector' ? 'bg-indigo-100 text-indigo-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {card.assetClass}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 h-12">{card.title}</h3>
        
        {/* Price and Change */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <DollarSign size={16} className="text-gray-500 mr-1" />
            <span className="font-medium text-gray-900">{formatPrice(card.price)}</span>
          </div>
          <div className={`flex items-center ${card.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <span className="font-medium">
              {card.change >= 0 ? '+' : ''}{card.change}%
            </span>
          </div>
        </div>
        
        {/* Rating and Date */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Star size={16} className="text-amber-400 mr-1" />
            <span className="text-sm text-gray-700">{card.rating}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar size={14} className="mr-1" />
            <span>{formatDate(card.date)}</span>
          </div>
        </div>
        
        {/* Tags */}
        {viewMode === 'advanced' && (
          <div className="flex flex-wrap gap-1 mb-3">
            {card.tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Description - Only in advanced mode */}
        {viewMode === 'advanced' && (
          <div className="mt-auto">
            <button 
              onClick={() => setExpanded(!expanded)}
              className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              {expanded ? (
                <>
                  <ChevronUp size={16} className="mr-1" />
                  <span>Less info</span>
                </>
              ) : (
                <>
                  <ChevronDown size={16} className="mr-1" />
                  <span>More info</span>
                </>
              )}
            </button>
            
            {expanded && (
              <p className="mt-2 text-sm text-gray-600">{card.description}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
