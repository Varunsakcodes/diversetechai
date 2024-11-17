import React from 'react';
import { Search, RotateCcw } from 'lucide-react';

interface SearchFormProps {
  onSearch: (formData: FormData) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSearch(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="searchTerm" className="block text-sm font-medium text-gray-700">
            Enter Search Term
          </label>
          <input
            type="text"
            id="searchTerm"
            name="searchTerm"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter search term..."
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="ostiId" className="block text-sm font-medium text-gray-700">
            OSTI ID
          </label>
          <input
            type="text"
            id="ostiId"
            name="ostiId"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter OSTI ID..."
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="nnsaLabs" className="block text-sm font-medium text-gray-700">
            NNSA Labs
          </label>
          <select
            id="nnsaLabs"
            name="nnsaLabs"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a lab...</option>
            <option value="LLNL">LLNL</option>
            <option value="LANL">LANL</option>
            <option value="SNL">SNL</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="nnsaSites" className="block text-sm font-medium text-gray-700">
            NNSA Sites
          </label>
          <select
            id="nnsaSites"
            name="nnsaSites"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a site...</option>
            <option value="KCP">KCP</option>
            <option value="SRS">SRS</option>
            <option value="Y-12">Y-12</option>
            <option value="NNSS">Nevada National Security Site</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="technicalAreas" className="block text-sm font-medium text-gray-700">
            Technical Areas
          </label>
          <select
            id="technicalAreas"
            name="technicalAreas"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select an area...</option>
            <option value="Applied Physics">Applied Physics</option>
            <option value="Bioscience">Bioscience</option>
            <option value="Building">Building</option>
            <option value="Chemical">Chemical</option>
            <option value="Climate">Climate</option>
            <option value="Computational">Computational</option>
            <option value="Energy">Energy</option>
            <option value="Environmental">Environmental</option>
            <option value="Fossil">Fossil</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700">
            Date Range
          </label>
          <div className="flex gap-4">
            <input
              type="date"
              id="dateFrom"
              name="dateFrom"
              min="2000-01-01"
              max="2024-01-01"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="date"
              id="dateTo"
              name="dateTo"
              min="2000-01-01"
              max="2024-01-01"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          <Search className="w-5 h-5 mr-2" />
          Search
        </button>
        <button
          type="reset"
          className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Reset
        </button>
      </div>
    </form>
  );
}