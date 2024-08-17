// types.ts

interface Paragraph {
    text: string;
    images: string[];
  }
  
 interface Comment {
    text: string;
    author: string;
    createdAt: string;
  }
  
  interface Post {
    title: string;
    subtitles: string;
    coverPhoto: string;
    paragraphs: Paragraph[];
    comments: Comment[];
    likes: number;
    author: string;
    createdAt: string;
    updatedAt: string;
  }
  