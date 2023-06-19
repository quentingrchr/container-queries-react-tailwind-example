import Article from "@/components/Article";
import Image from "next/image";
import articles from "./data";
export default function Home() {
  return (
    <main className="flex flex-col">
      <header className="flex flex-col gap-5 h-10 w-full bg-gray-200"></header>
      <h1 className="text-2xl md:text-4xl font-bold text-center mt-10 mb-5">
        CSS container queries with React and Tailwind
      </h1>
      <div className="grid-custom p-10 sm:p-5 ">
        {articles.map((article) => (
          <Article key={article.id} {...article} className="@container child" />
        ))}
        <aside className="sidebar bg-teal-500 p-5 text-xl font-bold">
          {"I'm an additional sidebar"}
        </aside>
      </div>
    </main>
  );
}
