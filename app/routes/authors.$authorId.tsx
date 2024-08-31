import BlogItem from "~/components/BlogItem";

function Author() {
  return (
    <div>
      <div className='w-[50%] mx-auto mt-8'>
        <div className='ps-16 flex gap-10 text-xs font-serif pt-8 items-start'>
          <div className='w-[8%]'>
            <img
              src='https://demo.getpublii.eu/themes/simple/v3/media/website/author-2.jpg'
              alt=''
              className='size-[5rem] rounded-full object-cover'
            />
          </div>
          <div className='w-[85%]'>
            <h3 className='text-4xl text-white pb-4'>Dayna D. Finkelstein</h3>
            <p className='leading-5 text-justify text-gray-400'>
              Dayna D. Finkelstein As an experienced writer with over a decade
              of experience, EmilyDayna D. Finkelstein has honed their skills in
              crafting compelling and engaging content across a wide range of
              topics. From technology and business to travel and lifestyle, they
              have the ability to turn complex ideas into accessible and
              enjoyable reads.
            </p>
            <button className='px-3 py-[8px] rounded-3xl border border-slate-200 text-gray-200 text-[10px] mt-5 hover:bg-stone-300 hover:text-black transition-colors duration-300'>
              Visit Website
            </button>
          </div>
        </div>
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

export default Author;
