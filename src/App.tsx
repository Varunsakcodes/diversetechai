import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import ResultsTable from './components/ResultsTable';
import Logo from './components/Logo';
import { loadCSVData, filterData } from './services/csvService';
import type { DirectoryEntry } from './types/directory';

function App() {
  const [data, setData] = useState<DirectoryEntry[]>([]);
  const [filteredResults, setFilteredResults] = useState<DirectoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const csvData = await loadCSVData();
      setData(csvData);
      setFilteredResults(csvData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleSearch = (formData: FormData) => {
    const filters = {
      ostiId: formData.get('ostiId')?.toString(),
      title: formData.get('title')?.toString(),
      naicsCode: formData.get('naicsCode')?.toString(),
      naicsName: formData.get('naicsName')?.toString(),
    };

    const filtered = filterData(data, filters);
    setFilteredResults(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center">
            <Logo />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <SearchForm onSearch={handleSearch} />
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Search Results</h2>
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading data...</p>
              </div>
            ) : (
              <ResultsTable results={filteredResults} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;