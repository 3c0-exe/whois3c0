export interface Project {
  id: string;
  title: string;
  tagline: string;
  role: string[];
  type: 'deep' | 'quick';
  url: string;
  tags: string[];
  year: number;
  description: string;
}
