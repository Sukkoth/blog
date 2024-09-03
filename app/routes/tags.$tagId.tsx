import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import BlogItem from "~/components/BlogItem";
import { getTagBlogs } from "~/utils/server/tags.server";

type LoaderData = {
  blogs: Blog[];
  tag: Tag;
};

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  invariant(params.tagId, "Tag id is required on this page");

  const { blogs, tag } = await getTagBlogs(parseInt(params.tagId));

  return { blogs, tag };
};

export default function Tag() {
  const { blogs, tag } = useLoaderData<LoaderData>();

  return (
    <div>
      <div className='mt-16 w-[45%] mx-auto'>
        <h1 className='font-serif text-start text-4xl font-medium pb-5 capitalize'>
          {tag.name}
        </h1>
        <div className='text-xs pb-4 flex items-center'>
          <span className='ps-1 text-gray-400 font-serif'>
            {tag?.desciption}
          </span>
        </div>
      </div>

      <div className='w-[90%] mx-auto h-[28rem] mt-8 rounded-xl overflow-hidden'>
        <img
          className='h-full w-full object-cover'
          src='https://demo.getpublii.eu/themes/simple/v3/media/website/responsive/christopher-ruel-cvw75oY6Mjc-unsplash-2xl.webp'
          alt='Blog'
        />
      </div>
      <div className='w-fit mx-auto pt-20 space-y-12'>
        {!blogs?.length ? (
          <div className='text-center text-2xl font-serif text-gray-400'>
            No blogs found
          </div>
        ) : (
          blogs.map((blog) => <BlogItem blog={blog} key={blog.id} />)
        )}
      </div>
    </div>
  );
}
