import { Link } from "@remix-run/react";

type Props = {
  blog: Blog;
};

function BlogItem({ blog }: Props) {
  if (!blog) return;
  return (
    <div className='flex gap-12 items-start'>
      <div className='w-[12rem] h-[12rem] aspect-square rounded-xl overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src='https://demo.getpublii.eu/themes/simple/v3/media/posts/7/responsive/chris-czermak-7ybKmhDTcz0-unsplash-xs.webp'
          alt=''
        />
      </div>
      <div className='w-[40rem]'>
        <div className='text-xs pb-4 flex items-center'>
          <div className='flex items-center gap-3'>
            <img
              src={blog.author?.avatarImg || ""}
              alt='author'
              className='rounded-full size-[2rem]'
            />
            <Link
              to={`/authors/${blog.author.id}`}
              className='text-blue-500 hover:text-orange-300 pe-2 transition-colors duration-300 cursor-pointer'
            >
              {blog.author.firstName} {blog.author?.lastName}
            </Link>{" "}
          </div>
          -{" "}
          <span className='ps-1 text-gray-400 font-serif italic'>
            {new Date(blog.createdAt).toDateString()}
          </span>
        </div>
        <Link
          to={"/blogs/2"}
          className='font-serif text-3xl text-blue-500 hover:text-orange-300 transition-colors duration-300 cursor-pointer'
        >
          {blog.title}
        </Link>
        <p className='font-serif pt-3 text-sm text-gray-400 line-clamp-3'>
          {blog.body}
        </p>
        <p className='py-5'>
          <Link
            to={`/blogs/${blog.id}`}
            className='text-xs underline text-gray-400 font-serif italic hover:text-orange-300 transition-colors duration-300 cursor-pointer'
          >
            Continue reading...
          </Link>
        </p>
      </div>
    </div>
  );
}

export default BlogItem;
