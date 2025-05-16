// interfaces/navigation.ts
export interface Navigation {
  label: string;
  path: string;
  children?: Navigation[]; // Optional dropdowns
}
