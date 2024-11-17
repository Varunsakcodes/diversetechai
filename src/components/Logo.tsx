import React from 'react';
import { Database } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 bg-blue-100 rounded-lg">
        <Database className="h-8 w-8 text-blue-600" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900">DiverseTech</span>
        <span className="text-sm text-gray-500">Patent Directory Search</span>
      </div>
    </div>
  );
}