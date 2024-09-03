import { LoaderFunction, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getUser } from "~/utils/server/auth.server";

export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  const user = await getUser(request);

  if (!user) {
    redirect("/login");
  }
  return user as User;
};

function User() {
  const user = useLoaderData<User>();
  return (
    <div>
      <div className='w-[50%] mx-auto mt-8'>
        <div className='ps-16 flex gap-10 text-xs font-serif pt-8 items-start'>
          <div className='w-[8%]'>
            <img
              src={
                user?.avatarImg ??
                `https://demo.getpublii.eu/themes/simple/v3/media/website/author-2.jpg`
              }
              alt=''
              className='size-[5rem] rounded-full object-cover'
            />
          </div>
          <div className='w-[85%]'>
            <h3 className='text-4xl text-white pb-4'>
              {user.firstName} {user?.lastName}
            </h3>
            <p className='leading-5 text-justify text-gray-400 mb-8'>
              {user?.about}
            </p>
            <Link
              to='/blogs/new'
              className='px-3 py-[8px] rounded-3xl border border-slate-200 text-gray-200 text-[10px] hover:bg-stone-300 hover:text-black transition-colors duration-300'
            >
              Make new blog
            </Link>
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
    </div>
  );
}

export default User;
