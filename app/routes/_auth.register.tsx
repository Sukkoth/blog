import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Form, Link, redirect } from "@remix-run/react";
import { getUser } from "~/utils/server/auth.server";

//check logged in user
export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  const user = await getUser(request);
  if (user) {
    return redirect("/");
  }
  return null;
};

function Register() {
  return (
    <Form className='flex-grow'>
      <h1 className='text-center font-serif text-4xl font-medium'>Register</h1>
      <div className='flex items-center justify-center mt-10 flex-col gap-10'>
        <div className='flex flex-col gap-2 w-[60%]'>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            className='bg-transparent border rounded-xl py-3 px-3 '
          />
        </div>
        <div className='flex flex-col gap-2 w-[60%]'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            name='lastName'
            id='lastName'
            className='bg-transparent border rounded-xl py-3 px-3 '
          />
        </div>
        <div className='flex flex-col gap-2 w-[60%]'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            className='bg-transparent border rounded-xl py-3 px-3 '
          />
        </div>
        <div className='flex flex-col gap-2 w-[60%]'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            className='bg-transparent border rounded-xl py-3 px-3 '
          />
        </div>
        <button className='bg-white text-black border rounded-3xl w-[60%] py-3 hover:bg-gray-300'>
          Register
        </button>
      </div>

      <p className='text-center py-5 text-xs'>
        Already have an account?{" "}
        <Link
          to='/Login'
          className='text-blue-500 hover:text-orange-300 transition-colors duration-300 cursor-pointer font-serif italic'
        >
          Login Here
        </Link>
      </p>
    </Form>
  );
}

export default Register;
