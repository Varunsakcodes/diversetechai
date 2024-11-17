import Papa from 'papaparse';
import type { DirectoryEntry } from '../types/directory';

export async function loadCSVData(): Promise<DirectoryEntry[]> {
  try {
    const response = await fetch('/src/data/patents.csv');
    const csvText = await response.text();
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        complete: (results) => {
          const data = results.data as DirectoryEntry[];
          resolve(data);
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error('Error loading CSV data:', error);
    return [];
  }
}

export function filterData(data: DirectoryEntry[], filters: {
  ostiId?: string;
  searchTerm?: string;
  nnsaLabs?: string;
  nnsaSites?: string;
  technicalAreas?: string;
  dateFrom?: string;
  dateTo?: string;
}): DirectoryEntry[] {
  return data.filter(entry => {
    const matchOstiId = !filters.ostiId || entry.ostiId.toLowerCase().includes(filters.ostiId.toLowerCase());
    const matchSearchTerm = !filters.searchTerm || entry.title.toLowerCase().includes(filters.searchTerm.toLowerCase());
    const matchLabs = !filters.nnsaLabs || entry.nnsaLabs === filters.nnsaLabs;
    const matchSites = !filters.nnsaSites || entry.nnsaSites === filters.nnsaSites;
    const matchAreas = !filters.technicalAreas || entry.technicalAreas === filters.technicalAreas;
    
    let matchDate = true;
    if (filters.dateFrom && filters.dateTo && entry.date) {
      const entryDate = new Date(entry.date);
      const fromDate = new Date(filters.dateFrom);
      const toDate = new Date(filters.dateTo);
      matchDate = entryDate >= fromDate && entryDate <= toDate;
    }

    return matchOstiId && matchSearchTerm && matchLabs && matchSites && matchAreas && matchDate;
  });
}