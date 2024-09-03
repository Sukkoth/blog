import {
  ActionFunction,
  ActionFunctionArgs,
  LoaderFunction,
} from "@remix-run/node";
import {
  Form,
  json,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { useState } from "react";
import { getUser } from "~/utils/server/auth.server";
import { createBlog } from "~/utils/server/blog.server";
import { getCategories } from "~/utils/server/categories.server";
import { BlogValidation } from "~/utils/validation/client";
import ParseValidationErrors from "~/utils/validation/ParseValidationErrors";

export const action: ActionFunction = async ({
  request,
}: ActionFunctionArgs) => {
  const user = await getUser(request);
  const authorId = user!.id;
  const formData = Object.fromEntries(await request.formData());
  const validation = BlogValidation.safeParse(formData);
  if (!validation.success) {
    return json(
      {
        message: "Make sure to provide required fields",
        error: validation.error.flatten(),
      },
      { status: 422 }
    );
  }

  const blog = await createBlog({
    data: validation.data,
    authorId: authorId,
  });

  if (!blog) {
    return json(
      {
        message: "Could not create the blog",
      },
      {
        status: 500,
      }
    );
  }

  return redirect(`/blogs/${blog.id}`);
};

export const loader: LoaderFunction = async () => {
  const categories = await getCategories();
  return json({ categories: categories as Category[] });
};

function NewBlog() {
  const actionRes = useActionData<typeof action>();
  const navigation = useNavigation();
  const { categories } = useLoaderData<typeof loader>();
  const formErrors = ParseValidationErrors(BlogValidation, actionRes?.error);

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tags: {
    id: number;
    categoryId: number;
    name: string;
  }[] = categories.filter(
    (category: Category) => category.id.toString() === selectedCategoryId
  )?.[0]?.tags;

  const isAdding = navigation.state === "submitting";
  return (
    <div className='w-[45%] mx-auto font-serif'>
      <div className='mt-16 border-b pb-12'>
        <h1 className='text-4xl font-medium '>New Blog</h1>
        <p className='text-sm text-gray-400 pt-5'>Create your blog here</p>
      </div>
      <Form className='mt-16 w-full space-y-8' method='POST'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='title'>Title {navigation.state}</label>
          <input
            type='text'
            name='title'
            id='title'
            className='bg-transparent border rounded-xl py-3 px-3'
          />
          {formErrors?.title && (
            <p className='text-red-400 text-sm'>{formErrors.title[0]}</p>
          )}
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='title'>Category</label>
          <select
            defaultValue={undefined}
            onChange={(e) => {
              setSelectedCategoryId(e.target.value);
              console.log(e.target.value);
            }}
            name='categoryId'
            id='categoryId'
            className='bg-transparent border rounded-xl py-3 px-3'
          >
            <option disabled>Select Category</option>
            {categories &&
              categories.map((category: Category) => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
          {formErrors?.categoryId && (
            <p className='text-red-400 text-sm'>{formErrors.categoryId[0]}</p>
          )}
        </div>
        {tags?.length && (
          <div className='flex flex-col gap-2'>
            <label htmlFor='title'>Tags</label>
            <select
              multiple
              value={selectedTags}
              onChange={(e) => {
                const selectedValues = Array.from(e.target.selectedOptions).map(
                  (option) => option.value
                );
                setSelectedTags(selectedValues);
                console.log(selectedValues);
              }}
              className='bg-transparent border rounded-xl py-3 px-3'
            >
              <option selected disabled>
                Select Tags
              </option>
              {tags?.map((tag) => (
                <option value={tag.id} key={tag?.id}>
                  {tag?.name}
                </option>
              ))}
            </select>
            {formErrors?.tags && (
              <p className='text-red-400 text-sm'>{formErrors.tags[0]}</p>
            )}
            <input
              type='hidden'
              name='tags'
              value={selectedTags?.toString() || undefined}
            />
          </div>
        )}
        <div className='flex flex-col gap-2'>
          <label htmlFor='body'>Body</label>
          <textarea
            name='body'
            id='body'
            className='bg-transparent border rounded-xl py-3 px-3'
          ></textarea>
          {formErrors?.body && (
            <p className='text-red-400 text-sm'>{formErrors.body[0]}</p>
          )}
        </div>
        <button
          disabled={isAdding}
          type='submit'
          className='bg-white w-full text-black border rounded-3xl py-3 hover:bg-gray-300 disabled:bg-black disabled:text-white disabled:cursor-not-allowed'
        >
          {isAdding ? "Creating . . . . " : "Create Blog"}
        </button>
      </Form>
    </div>
  );
}

export default NewBlog;
