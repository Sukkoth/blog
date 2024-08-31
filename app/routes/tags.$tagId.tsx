import BlogItem from "~/components/BlogItem";

export default function Tag() {
  return (
    <div>
      <div className='mt-16 w-[45%] mx-auto'>
        <h1 className='font-serif text-start text-4xl font-medium pb-5'>
          Photos
        </h1>
        <div className='text-xs pb-4 flex items-center'>
          <span className='ps-1 text-gray-400 font-serif'>
            description here
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
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  );
}
