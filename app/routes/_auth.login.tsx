import {
  ActionFunction,
  ActionFunctionArgs,
  LoaderFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";
import { Form, json, Link, redirect, useActionData } from "@remix-run/react";
import { getUser, login } from "~/utils/server/auth.server";
import { LoginValidation } from "~/utils/validation/client";
import ParseValidationErrors from "~/utils/validation/ParseValidationErrors";

export const action: ActionFunction = async ({
  request,
}: ActionFunctionArgs) => {
  if (await getUser(request)) redirect("/");
  const formData = Object.fromEntries(await request.formData());

  const validation = LoginValidation.safeParse(formData);

  if (!validation.success) {
    return json(
      {
        message: "Validation Failed",
        error: validation.error.flatten(),
      },
      {
        status: 422,
      }
    );
  }

  //login user
  return await login(validation.data);
};

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

function Login() {
  const actionRes = useActionData<typeof action>();

  const formErrors = ParseValidationErrors(LoginValidation, actionRes?.error);

  return (
    <Form className='flex-grow' method='POST'>
      <h1 className='text-center font-serif text-4xl font-medium'>Login</h1>
      <div className='flex items-center justify-center mt-10 flex-col gap-10'>
        <p className='text-red-400 text-sm font-serif'>{actionRes?.message}</p>
        <div className='flex flex-col gap-2 w-[60%]'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            className='bg-transparent border rounded-xl py-3 px-3 '
          />
          {formErrors?.email && (
            <p className='text-red-400 text-sm font-serif'>
              {formErrors.email[0]}
            </p>
          )}
        </div>
        <div className='flex flex-col gap-2 w-[60%]'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            className='bg-transparent border rounded-xl py-3 px-3 '
          />
          {formErrors?.password && (
            <p className='text-red-400 text-sm font-serif'>
              {formErrors.password[0]}
            </p>
          )}
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
