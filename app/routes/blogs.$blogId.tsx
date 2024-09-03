import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getBlog } from "~/utils/server/blog.server";
import invariant from "tiny-invariant";

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  invariant(params.blogId, "params.blogId is required");
  const blogId = params.blogId;

  const blog = (await getBlog(parseInt(blogId))) as Blog;

  return { blog };
};

function BlogDetail() {
  const { blog }: { blog: Blog } = useLoaderData<typeof loader>();

  return (
    <div>
      <div className='mt-16 w-[45%] mx-auto'>
        <h1 className='font-serif text-start text-4xl font-medium pb-5'>
          {blog.title}
        </h1>
        <div className='text-xs pb-4 flex items-center'>
          <div className='flex items-center gap-3'>
            <img
              src={blog.author?.avatarImg || ""}
              alt='author'
              className='rounded-full size-[2rem]'
            />
            <Link
              to={"/author/1"}
              className='text-blue-500 hover:text-orange-300 pe-2 transition-colors duration-300 cursor-pointer'
            >
              {blog.author.firstName}
            </Link>{" "}
          </div>
          -{" "}
          <span className='ps-1 text-gray-400 font-serif italic'>
            {new Date(blog.createdAt).toDateString()}
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

      <div className='mx-auto w-[40rem] mt-20'>
        <p className='font-serif dropcap leading-8 text-gray-400'>
          {blog.body}
        </p>

        <p className='italic font-serif text-xs text-gray-400 pt-20'>
          This article was updated on {new Date(blog.updatedAt).toDateString()}
        </p>
        {/* tags list   */}
        <div className='flex gap-3 items-center pt-5'>
          {blog?.tags?.map(({ tag }: { tag: Tag }) => (
            <Link
              key={tag.id}
              to={`/tags/${tag.id}`}
              className='px-3 py-1 border border-gray-600 text-xs hover:border-white rounded-3xl transition-colors duration-300'
            >
              {tag.name}
            </Link>
          ))}
        </div>

        <div className='ps-16 flex gap-5 text-xs text-gray-400 font-serif pt-8 items-center'>
          <div className=''>
            <img
              src={blog.author?.avatarImg || ""}
              alt=''
              className='size-[3rem] rounded-full'
            />
          </div>
          <div className='w-[30rem]'>
            <h3 className='text-lg text-blue-500 pb-3 hover:text-orange-300 cursor-pointer transition-colors duration-300'>
              {" "}
              {blog.author.firstName} {blog.author.lastName}
            </h3>
            <p className='leading-6 text-justify'>{blog.author?.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
