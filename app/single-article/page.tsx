import Article from "@/components/Article";
import React from "react";
import articles from "../data";

export default function page() {
  return <Article {...articles[0]} isDemo />;
}
