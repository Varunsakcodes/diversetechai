import React from 'react';
import { FileText, Briefcase, BarChart3, Building2 } from 'lucide-react';
import type { DirectoryEntry } from '../types/directory';

interface ResultCardProps {
  entry: DirectoryEntry;
}

export function ResultCard({ entry }: ResultCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <img
            src={entry.image}
            alt={`${entry.industry} visualization`}
            className="h-16 w-16 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{entry.patent}</h3>
            <p className="text-gray-600">{entry.description}</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <Building2 className="h-4 w-4 mr-2" />
            <span>NAICS: {entry.naicsCode}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Briefcase className="h-4 w-4 mr-2" />
            <span>{entry.industry}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <BarChart3 className="h-4 w-4 mr-2" />
            <span>Market Size: {entry.marketSize}</span>
          </div>
        </div>
      </div>
    </div>
  );
}