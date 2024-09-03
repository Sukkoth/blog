import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import TagItem from "~/components/TagItem";
import { getTags } from "~/utils/server/tags.server";

export const loader: LoaderFunction = async () => {
  const tags = await getTags();
  return { tags };
};

function Tags() {
  const { tags } = useLoaderData<{ tags: Tag[] }>();

  return (
    <div className='w-[45%] mx-auto'>
      <div className='mt-16 font-serif border-b pb-12'>
        <h1 className='text-4xl font-medium '>Tags</h1>
        <p className='text-sm text-gray-400 pt-5'>Collection of all 6 tags</p>
      </div>

      {/* list */}
      <div className='grid grid-cols-2 mt-16 font-serif gap-16'>
        {/* single */}
        {tags.map((tag) => (
          <TagItem key={tag.id} tag={tag} />
        ))}
      </div>
    </div>
  );
}

export default Tags;
