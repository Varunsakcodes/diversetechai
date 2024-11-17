import React from 'react';
import { Search, FilterX } from 'lucide-react';

interface SearchButtonsProps {
  onSearch: () => void;
  onClear: () => void;
}

export function SearchButtons({ onSearch, onClear }: SearchButtonsProps) {
  return (
    <div className="flex gap-3">
      <button
        onClick={onSearch}
        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
      >
        <Search className="h-5 w-5" />
        Search
      </button>
      <button
        onClick={onClear}
        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
      >
        <FilterX className="h-5 w-5" />
        Clear Filters
      </button>
    </div>
  );
}