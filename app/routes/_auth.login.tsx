import { Form, Link } from "@remix-run/react";

function Login() {
  return (
    <Form className='flex-grow'>
      <h1 className='text-center font-serif text-4xl font-medium'>Login</h1>
      <div className='flex items-center justify-center mt-10 flex-col gap-10'>
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
          Login
        </button>
      </div>
      <p className='text-center py-5 text-xs'>
        Do not have an account?{" "}
        <Link
          to='/register'
          className='text-blue-500 hover:text-orange-300 transition-colors duration-300 cursor-pointer font-serif italic'
        >
          Register Here
        </Link>
      </p>
    </Form>
  );
}

export default Login;
