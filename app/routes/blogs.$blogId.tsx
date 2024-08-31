import { Link } from "@remix-run/react";

function BlogDetail() {
  return (
    <div>
      <div className='mt-16 w-[45%] mx-auto'>
        <h1 className='font-serif text-start text-4xl font-medium pb-5'>
          The Ultimate Travel Guide to Japan: Culture, Cuisine, and Hidden Gems
        </h1>
        <div className='text-xs pb-4 flex items-center'>
          <div className='flex items-center gap-3'>
            <img
              src='https://demo.getpublii.eu/themes/simple/v3/media/website/author-2.jpg'
              alt='author'
              className='rounded-full size-[2rem]'
            />
            <Link
              to={"/author/1"}
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
          Discover the vibrant culture, delectable cuisine, and hidden gems of
          Japan. From bustling cities to serene temples, immerse yourself in the
          unique experiences that Japan has to offer. This guide covers
          everything from must-see attractions to local delicacies. Whether
          you&apos;re a foodie, history buff, or adventure seeker, Japan has
          something special for you. Lacus donec id. At pede sed. Tellus
          placerat semper. Consectetuer neque nibh. Quam vehicula leo cursus
          magnis ultricies pede placerat dolor enim mattis lorem vivamus urna
          ante lectus tortor at. Aliquet vitae velit luctus vestibulum
          sollicitudin. Ut pharetra vel. Quam ornare aliquam mi pulvinar tempus
          lectus eros aliquam amet orci imperdiet. Mi hendrerit neque eu amet
          eget. Elit ultricies non. Et adipiscing ultricies eros lacus pulvinar.
          Turpis vestibulum risus amet dui eget justo non libero a dictum
          aenean. Et suscipit in est.
        </p>

        <p className='italic font-serif text-xs text-gray-400 pt-20'>
          This article was updated on July 6, 2024
        </p>
        {/* tags list   */}
        <div className='flex gap-3 items-center pt-5'>
          <Link
            to={"/tags/2"}
            className='px-3 py-1 border border-gray-600 text-xs hover:border-white rounded-3xl transition-colors duration-300'
          >
            Adventure
          </Link>
          <Link
            to={"/tags/2"}
            className='px-3 py-1 border border-gray-600 text-xs hover:border-white rounded-3xl transition-colors duration-300'
          >
            Mountains
          </Link>
          <Link
            to={"/tags/2"}
            className='px-3 py-1 border border-gray-600 text-xs hover:border-white rounded-3xl transition-colors duration-300'
          >
            Photos
          </Link>
          <Link
            to={"/tags/2"}
            className='px-3 py-1 border border-gray-600 text-xs hover:border-white rounded-3xl transition-colors duration-300'
          >
            Travel
          </Link>
        </div>

        <div className='ps-16 flex gap-5 text-xs text-gray-400 font-serif pt-8 items-center'>
          <div className=''>
            <img
              src='https://demo.getpublii.eu/themes/simple/v3/media/website/author-2.jpg'
              alt=''
              className='size-[3rem] rounded-full'
            />
          </div>
          <div className='w-[30rem]'>
            <h3 className='text-lg text-blue-500 pb-3 hover:text-orange-300 cursor-pointer transition-colors duration-300'>
              {" "}
              Dayna D. Finkelstein
            </h3>
            <p className='leading-6 text-justify'>
              Dayna D. Finkelstein As an experienced writer with over a decade
              of experience, EmilyDayna D. Finkelstein has honed their skills in
              crafting compelling and engaging content across a wide range of
              topics. From technology and business to travel and lifestyle, they
              have the ability to turn complex ideas into accessible and
              enjoyable reads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
