import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import BlogItem from "~/components/BlogItem";
import { getBlogs } from "~/utils/server/blog.server";

export const loader: LoaderFunction = async () => {
  const blogs = await getBlogs();
  return { blogs };
};

function Blogs() {
  const { blogs } = useLoaderData<{ blogs: Blog[] }>();

  return (
    <div>
      <div className='w-fit mx-auto pt-20 space-y-12'>
        {blogs?.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
