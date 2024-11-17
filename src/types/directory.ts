export interface DirectoryEntry {
  id: number;
  ostiId: string;
  title: string;
  nnsaLabs?: string;
  nnsaSites?: string;
  technicalAreas?: string;
  date?: string;
  marketSize: string;
  topPlayers: string;
}

export const initialData: DirectoryEntry[] = [
  {
    id: 1,
    ostiId: "1548726",
    title: "Predictive Maintenance System Using Machine Learning",
    nnsaLabs: "LLNL",
    nnsaSites: "KCP",
    technicalAreas: "Computational",
    date: "2023-05-15",
    marketSize: "$240B",
    topPlayers: "IBM, Microsoft, Oracle"
  },
  {
    id: 2,
    ostiId: "1548727",
    title: "Quantum Computing Processing Architecture",
    nnsaLabs: "LANL",
    nnsaSites: "Y-12",
    technicalAreas: "Applied Physics",
    date: "2023-08-22",
    marketSize: "$550B",
    topPlayers: "Intel, TSMC, Samsung"
  },
  {
    id: 3,
    ostiId: "1548728",
    title: "Novel Drug Delivery Mechanism",
    nnsaLabs: "SNL",
    nnsaSites: "SRS",
    technicalAreas: "Bioscience",
    date: "2023-11-30",
    marketSize: "$125B",
    topPlayers: "Pfizer, Moderna, Johnson & Johnson"
  }
];