import { NavLink, useLoaderData } from "@remix-run/react";

function Nav() {
  const user = useLoaderData<User>();

  return (
    <nav className='flex items-center justify-between py-3 px-200'>
      <h1>Bloggy</h1>
      <ul className='flex gap-3 text-xs'>
        <li className='hover:text-gray-300'>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className='hover:text-gray-300'>
          <NavLink to={"/blogs"}>Blogs</NavLink>
        </li>
        <li className='hover:text-gray-300'>
          <NavLink to={"/tags"}>Tags</NavLink>
        </li>
        {user?.id ? (
          <li className='hover:text-gray-300'>
            <NavLink to={"/user"}>{user.firstName}</NavLink>
          </li>
        ) : (
          <>
            <li className='hover:text-gray-300'>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li className='hover:text-gray-300'>
              <NavLink to={"/register"}>Register</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
