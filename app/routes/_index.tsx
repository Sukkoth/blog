import type { MetaFunction } from "@remix-run/node";
import BlogItem from "~/components/BlogItem";

export const meta: MetaFunction = () => {
  return [
    { title: "Bloggy" },
    { name: "Blogs worth your time", content: "Welcome to Bloggy!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className='mt-16 w-[45%] mx-auto'>
        <h1 className='font-serif text-start text-4xl font-medium '>
          Discover My Blogging Journey: Adventures, Travels, and Hobbies!
        </h1>
        <p className='text-xs text-gray-400 pt-5 font-serif'>
          Join me as I share captivating stories, travel experiences, and dive
          into the joys of my favorite hobbies.
        </p>

        <button className='px-3 py-[8px] rounded-3xl border border-slate-200 text-gray-200 text-[10px] mt-5 hover:bg-stone-300 hover:text-black transition-colors duration-300'>
          Read more
        </button>
      </div>

      <div className='w-[90%] mx-auto h-[28rem] mt-20 rounded-xl overflow-hidden'>
        <img
          className='h-full w-full object-cover'
          src='https://demo.getpublii.eu/themes/simple/v3/media/website/responsive/christopher-ruel-cvw75oY6Mjc-unsplash-2xl.webp'
          alt='Blog'
        />
      </div>

      <div className='w-fit mx-auto pt-20 space-y-12'>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  );
}
