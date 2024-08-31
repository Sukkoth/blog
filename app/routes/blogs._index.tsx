import BlogItem from "~/components/BlogItem";

function Blogs() {
  return (
    <div>
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

export default Blogs;
