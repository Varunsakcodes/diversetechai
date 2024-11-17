import React from 'react';
import type { DirectoryEntry } from '../types/directory';

interface ResultsTableProps {
  results: DirectoryEntry[];
}

export default function ResultsTable({ results }: ResultsTableProps) {
  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No results found. Try adjusting your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto rounded-lg shadow">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              OSTI ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              NAICS Code
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              NAICS Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Market Size
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Top Players
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {results.map((result, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {result.ostiId}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {result.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {result.naicsCode}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {result.naicsName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {result.marketSize}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {result.topPlayers}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}