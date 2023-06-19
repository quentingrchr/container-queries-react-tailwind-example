import React from "react";

export default function Article() {
  return (
    <div className="@container resize-x overflow-auto w-[500px] p-6">
      <article className="shadow-lg rounded-lg @sm:rounded-2xl relative overflow-hidden flex flex-row @sm:flex-col cursor-pointer group h-auto @2xl:h-[300px]">
        <header className="hidden @xs:block relative z-10 w-24 @sm:w-full @sm:h-auto @2xl:h-full overflow-hidden">
          <span className="hidden @sm:inline-flex absolute left-0 top-4 items-center rounded-r-2xl bg-blue-100 px-6 py-2 text-base font-medium text-blue-700 z-20">
            CSS
          </span>
          <span className="absolute z-10 left-0 top-0 right-0 bottom-0 bg-black opacity-10"></span>
          <img
            src="https://images.unsplash.com/photo-1682686580186-b55d2a91053c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="w-auto h-full @sm:w-full @sm:h-40 @2xl:h-full object-cover object-center @2xl:group-hover:scale-110 @2xl:transition-transform @2xl:duration-500 @2xl:ease-in-out"
          />
        </header>
        <div className="flex flex-col gap-3 @sm:gap-6 justify-start p-3 @sm:p-5 rounded-b-2xl overflow-hidden z-20 @2xl:absolute @2xl:bg-transparent @2xl:left-0 @2xl:right-0 @2xl:bottom-0 @4xl:h-full @4xl:justify-center @4xl:items-center">
          <p className="text-ellipsis overflow-hidden whitespace-nowrap @sm:whitespace-normal text-base @sm:text-xl @2xl:text-2xl @4xl:text-4xl @4xl:text-center font-bold w-auto @sm:w-[15ch] @2xl:w-[25ch] max-w-[100%] text-black @2xl:text-white @2xl:pointer-events-none">
            Learn CSS containers queries with Tailwind
          </p>
          <button
            type="button"
            className="rounded-md bg-indigo-50 px-2 py-1 @sm:px-3 @sm:py-2 text-xs @sm:text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100 mr-auto @2xl:hidden"
          >
            Read Article
          </button>
        </div>
      </article>
    </div>
  );
}
