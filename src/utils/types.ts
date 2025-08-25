export type Resource = {
  name: string;
  description: string;
  preview: string;
  link: string;
  tags: Tag[];
};

export type Tag =
  | 'font'
  | 'design'
  | 'typography'
  | 'icon'
  | 'open-source'
  | 'audio'
  | 'video'
  | 'ai'
  | 'dev'
  | 'docs'
  | 'notes'
  | 'terminal'
  | 'pkg';

export const tagColorMap: Record<Tag, string> = {
  font: 'bg-blue-100 text-blue-800',
  design: 'bg-green-100 text-green-800',
  typography: 'bg-purple-100 text-purple-800',
  icon: 'bg-yellow-100 text-yellow-800',
  'open-source': 'bg-red-100 text-red-800',
  ai: 'bg-teal-100 text-teal-800',
  dev: 'bg-gray-100 text-gray-800',
  pkg: 'bg-pink-100 text-pink-800',
  terminal: 'bg-orange-100 text-orange-800',
  docs: 'bg-indigo-100 text-indigo-800',
  notes: 'bg-lime-100 text-lime-800',
  audio: 'bg-cyan-100 text-cyan-800',
  video: 'bg-amber-100 text-amber-800',
};
