import { Category } from "./Article";
import clsx from "clsx";
import { cva } from "class-variance-authority";

interface Props {
  category: Category;
}

const badgeVariants = cva(
  "hidden @sm:inline-flex absolute left-0 top-4 items-center rounded-r-2xl px-6 py-2 text-base font-medium z-20",
  {
    variants: {
      variant: {
        CSS: "bg-blue-100 text-blue-700",
        JS: "bg-yellow-100 text-yellow-700",
        HTML: "bg-pink-100 text-pink-700",
        VUE: "bg-green-100 text-green-700",
        REACT: "bg-blue-100 text-blue-700",
        NODE: "bg-purple-100 text-purple-700",
        DESIGN: "bg-red-100 text-red-700",
      },
    },
  }
);

export default function Badge({ category }: Props) {
  return (
    <span className={clsx(badgeVariants({ variant: category }))}>
      {category}
    </span>
  );
}
