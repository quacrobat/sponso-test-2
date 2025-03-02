import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import CardGrid from './components/CardGrid'
import { SponsorshipData } from './types'

function App() {
  const [viewMode, setViewMode] = useState<'basic' | 'advanced'>('advanced')

  const mockData: SponsorshipData[] = [
    {
      id: "1",
      campaignName: "Dunkin Donut call/campaign",
      subtitle: "Halloween package",
      amount: 456789,
      rating: 5,
      ratingCount: 51,
      listingId: "3648AS",
      status: "Listed for sponsorship",
      listingTimeWindow: {
        startDate: "2024-05-23",
        endDate: "2026-05-23"
      },
      sponsorshipTimeWindow: {
        startDate: "2024-05-23",
        endDate: "2026-05-23"
      },
      relatedTotalDeals: 100,
      relatedExecutedDeals: 90,
      assets: 10,
      assetClasses: ["video", "image", "audio", "document", "other"],
      brand: {
        name: "Dunkin Donuts",
        ticker: "DNKN",
        logo: "https://images.unsplash.com/photo-1593280405106-e438ebe54a17?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      images: [
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1527904324834-3bda86da6771?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1556913396-7a3c459ef68e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: "2",
      campaignName: "Starbucks Summer Refreshers",
      subtitle: "Summer special",
      amount: 325000,
      rating: 4.5,
      ratingCount: 42,
      listingId: "4721BX",
      status: "Listed for sponsorship",
      listingTimeWindow: {
        startDate: "2024-06-15",
        endDate: "2025-08-30"
      },
      sponsorshipTimeWindow: {
        startDate: "2024-06-15",
        endDate: "2025-08-30"
      },
      relatedTotalDeals: 85,
      relatedExecutedDeals: 72,
      assets: 8,
      assetClasses: ["video", "image", "social"],
      brand: {
        name: "Starbucks",
        ticker: "SBUX",
        logo: "https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      images: [
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1572286258217-215cf8e939f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: "3",
      campaignName: "Nike Air Max Day",
      subtitle: "Global Activation",
      amount: 780000,
      rating: 4.8,
      ratingCount: 67,
      listingId: "5932CZ",
      status: "Listed for sponsorship",
      listingTimeWindow: {
        startDate: "2024-02-10",
        endDate: "2025-03-30"
      },
      sponsorshipTimeWindow: {
        startDate: "2024-03-15",
        endDate: "2025-03-26"
      },
      relatedTotalDeals: 120,
      relatedExecutedDeals: 110,
      assets: 15,
      assetClasses: ["video", "image", "event", "social", "other"],
      brand: {
        name: "Nike",
        ticker: "NKE",
        logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      images: [
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: "4",
      campaignName: "Coca-Cola Summer Music Festival",
      subtitle: "Festival Series",
      amount: 550000,
      rating: 4.7,
      ratingCount: 58,
      listingId: "6104DY",
      status: "Listed for sponsorship",
      listingTimeWindow: {
        startDate: "2024-05-01",
        endDate: "2024-09-15"
      },
      sponsorshipTimeWindow: {
        startDate: "2024-06-01",
        endDate: "2024-08-31"
      },
      relatedTotalDeals: 95,
      relatedExecutedDeals: 82,
      assets: 12,
      assetClasses: ["video", "image", "audio", "event", "social"],
      brand: {
        name: "Coca-Cola",
        ticker: "KO",
        logo: "https://images.unsplash.com/photo-1629203432180-71e9b18d855a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      images: [
        "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: "5",
      campaignName: "McDonald's Happy Meal",
      subtitle: "Movie Tie-In",
      amount: 420000,
      rating: 4.2,
      ratingCount: 39,
      listingId: "7215EF",
      status: "Listed for sponsorship",
      listingTimeWindow: {
        startDate: "2024-07-10",
        endDate: "2024-10-15"
      },
      sponsorshipTimeWindow: {
        startDate: "2024-07-15",
        endDate: "2024-09-30"
      },
      relatedTotalDeals: 75,
      relatedExecutedDeals: 65,
      assets: 9,
      assetClasses: ["video", "image", "product", "social"],
      brand: {
        name: "McDonald's",
        ticker: "MCD",
        logo: "https://images.unsplash.com/photo-1619994121345-b61cd21e9866?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      images: [
        "https://images.unsplash.com/photo-1619994121345-b61cd21e9866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1552526881-721ce8509abb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1623039405147-547794f92e9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: "6",
      campaignName: "Apple Back to School",
      subtitle: "Promotion",
      amount: 890000,
      rating: 4.9,
      ratingCount: 73,
      listingId: "8326FG",
      status: "Listed for sponsorship",
      listingTimeWindow: {
        startDate: "2024-07-01",
        endDate: "2024-09-30"
      },
      sponsorshipTimeWindow: {
        startDate: "2024-07-15",
        endDate: "2024-09-15"
      },
      relatedTotalDeals: 110,
      relatedExecutedDeals: 105,
      assets: 14,
      assetClasses: ["video", "image", "digital", "retail", "social"],
      brand: {
        name: "Apple",
        ticker: "AAPL",
        logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      images: [
        "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    }
  ]

  const toggleViewMode = () => {
    setViewMode(viewMode === 'basic' ? 'advanced' : 'basic')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center bg-white rounded-xl p-4 shadow-sm border">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Sponsorship Opportunities</h1>
            <p className="text-sm text-gray-500">Manage your marketing campaign sponsorships</p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 bg-gray-50 p-2 rounded-lg">
            <div className="flex items-center space-x-2 mr-4">
              <div className="relative inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background bg-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                onClick={toggleViewMode}
              >
                <span
                  data-state={viewMode === 'advanced' ? 'checked' : 'unchecked'}
                  className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform duration-200 ease-in-out ${
                    viewMode === 'advanced' ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </div>
              <label className="text-sm font-medium">
                {viewMode === 'advanced' ? (
                  <span className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" /> Detailed View
                  </span>
                ) : (
                  <span className="flex items-center">
                    <EyeOff className="h-4 w-4 mr-1" /> Compact View
                  </span>
                )}
              </label>
            </div>
            
            <div className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
              {mockData.length} campaigns
            </div>
          </div>
        </div>
        
        <CardGrid sponsorships={mockData} viewMode={viewMode} />
      </div>
    </div>
  )
}

export default App
