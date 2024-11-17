import React from 'react';
import { Search } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="text-center py-12">
      <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
      <h3 className="text-lg font-medium text-gray-900">No results found</h3>
      <p className="text-gray-600">Try adjusting your search criteria</p>
    </div>
  );
}