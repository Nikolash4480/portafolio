// src/data/blog.ts
export interface BlogPost {
  title: string;
  date: string;
  readingTime: number;
  platform: string;
  link: string;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "Construyendo un Portafolio Moderno con Astro",
    date: "Abril 2024",
    readingTime: 8,
    platform: "Medium",
    link: "https://medium.com/your-post-1",
    tags: ["astro", "desarrollo web", "portafolio"]
  },
  {
    title: "Por qué Elegí Astro para mi Portafolio",
    date: "Marzo 2024",
    readingTime: 5,
    platform: "Medium",
    link: "https://medium.com/your-post-2",
    tags: ["astro", "carrera"]
  }
];