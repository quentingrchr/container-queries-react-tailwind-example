import { Props as ArticleProps } from "../components/Article";

interface Article extends ArticleProps {
  id: string;
}

const articles = [
  {
    id: "1",
    title: "A good article on CSS",
    category: "CSS",
    imageUrl: "/article-1.webp",
  },
  {
    id: "2",
    title: "A good article on HTML",
    category: "HTML",
    imageUrl: "/article-2.webp",
  },
  {
    id: "3",
    title: "A good article on JavaScript",
    category: "JS",
    imageUrl: "/article-3.webp",
  },
  // Additional articles
  {
    id: "4",
    title: "Introduction to React Hooks",
    category: "REACT",
    imageUrl: "/article-4.webp",
  },
  {
    id: "5",
    title: "Best Practices for Responsive Web Design",
    category: "CSS",
    imageUrl: "/article-5.webp",
  },
  {
    id: "6",
    title: "Building Real-Time Chat Applications with Node.js",
    category: "NODE",
    imageUrl: "/article-6.webp",
  },
  {
    id: "7",
    title: "Getting Started with Vue.js",
    category: "VUE",
    imageUrl: "/article-1.webp",
  },
  {
    id: "8",
    title: "Mastering CSS Grid Layout",
    category: "CSS",
    imageUrl: "/article-2.webp",
  },
  {
    id: "9",
    title: "Optimizing Performance in JavaScript Applications",
    category: "JS",
    imageUrl: "/article-3.webp",
  },
  {
    id: "10",
    title: "Creating Interactive UIs with React Components",
    category: "REACT",
    imageUrl: "/article-4.webp",
  },
  {
    id: "11",
    title: "Server-Side Rendering with Next.js",
    category: "REACT",
    imageUrl: "/article-5.webp",
  },
  {
    id: "12",
    title: "Building a RESTful API with Node.js and Express",
    category: "NODE",
    imageUrl: "/article-6.webp",
  },
] as Article[];

export default articles;
