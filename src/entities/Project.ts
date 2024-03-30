
export interface Project {
  title: string;
  href: string;
  source: {
    default: string;
    cropped: string;
  };
  description: string;
  languages: string[];
  git: string;
}
