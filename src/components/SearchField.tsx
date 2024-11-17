import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SearchFieldProps {
  icon: LucideIcon;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function SearchField({ icon: Icon, placeholder, value, onChange }: SearchFieldProps) {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        className="pl-10 w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}