import { Outlet } from "@remix-run/react";

function auth() {
  return (
    <div className='w-[50%] mx-auto min-h-[40rem] flex items-center justify-center border border-gray-600 rounded-3xl text-sm p-5 mt-10'>
      <Outlet />
    </div>
  );
}

export default auth;
