import React from 'react';
import { SponsorshipData, ViewMode } from '../types';
import SponsorshipCard from './SponsorshipCard';

interface CardGridProps {
  sponsorships: SponsorshipData[];
  viewMode: ViewMode;
}

const CardGrid: React.FC<CardGridProps> = ({ sponsorships, viewMode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sponsorships.map(sponsorship => (
        <SponsorshipCard key={sponsorship.id} sponsorship={sponsorship} viewMode={viewMode} />
      ))}
    </div>
  );
};

export default CardGrid;
