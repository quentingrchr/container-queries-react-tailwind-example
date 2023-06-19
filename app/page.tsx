import Article from "@/components/Article";
import Image from "next/image";
import articles from "./data";
export default function Home() {
  return (
    <main>
      <div className="grid-custom p-10 sm:p-5">
        {articles.map((article) => (
          <Article key={article.id} {...article} className="@container child" />
        ))}
        <aside className="sidebar bg-teal-500 p-5 text-xl font-bold">
          {"I'm a sidebar"}
        </aside>
      </div>
    </main>
  );
}
