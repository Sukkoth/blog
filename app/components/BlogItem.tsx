import { Link } from "@remix-run/react";

function BlogItem() {
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
              src='https://demo.getpublii.eu/themes/simple/v3/media/website/author-2.jpg'
              alt='author'
              className='rounded-full size-[2rem]'
            />
            <Link
              to={"/authors/1"}
              className='text-blue-500 hover:text-orange-300 pe-2 transition-colors duration-300 cursor-pointer'
            >
              Dayna D. Finkelstein
            </Link>{" "}
          </div>
          -{" "}
          <span className='ps-1 text-gray-400 font-serif italic'>
            October 22, 2018
          </span>
        </div>
        <Link
          to={"/blogs/2"}
          className='font-serif text-3xl text-blue-500 hover:text-orange-300 transition-colors duration-300 cursor-pointer'
        >
          The Ultimate Travel Guide to Japan: Culture, Cuisine, and Hidden Gems
        </Link>
        <p className='font-serif pt-3 text-sm text-gray-400'>
          Discover the vibrant culture, delectable cuisine, and hidden gems of
          Japan. From bustling cities to serene temples, immerse yourself in the
          unique experiences that Japan has to offer. This guide covers
          everything from must-see attractions to local delicacies. Whether
          you&apos;re a foodie, history buff, or…
        </p>
        <p className='py-5'>
          <Link
            to={"/blogs/1"}
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
