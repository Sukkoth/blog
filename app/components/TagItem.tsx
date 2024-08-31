import { Link } from "@remix-run/react";

function TagItem() {
  return (
    <div className='flex items-center gap-8'>
      <div>
        <img
          className='size-[10rem] rounded-3xl object-cover'
          src='https://demo.getpublii.eu/themes/simple/v3/media/tags/2/responsive/kimo-AUX_FYWjUXY-unsplash-xs.webp'
          alt=''
        />
      </div>
      <div>
        <Link
          to={`/tags/2`}
          className='text-xl text-blue-500 pb-3 hover:text-orange-300 cursor-pointer transition-colors duration-300'
        >
          Adventure
        </Link>
        <p className='text-gray-400 text-xs pt-3'>Featuring 7 posts</p>
      </div>
    </div>
  );
}

export default TagItem;
