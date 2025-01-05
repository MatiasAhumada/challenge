'use client';

import { useRouter } from 'next/navigation';

const login: React.FC = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push(
      'https://auth0.auth0.com/u/login/identifier?state=hKFo2SBva1U4N01pVWRXYlVqcXJFMFI0ZGowbDdURXdsU25sWKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHVXRnZGYWV1cjRkOXNKTFdrQUE3eG9wMlQ1MXduNGFJo2NpZNkgekVZZnBvRnpVTUV6aWxoa0hpbGNXb05rckZmSjNoQUk'
    );
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-white text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            action="#"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 text-white  font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full  rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 text-white  font-medium text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="separator mt-8">
            <span>Or continue with</span>
          </div>
          <div className="mt-8">
            <button
              onClick={handleClick}
              type="submit"
              className="flex w-full items-center justify-center gap-x-2 rounded-md bg-white text-black px-3 py-1.5 text-sm font-semibold shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <img
                src="https://ps.w.org/auth0/assets/icon-256x256.png?rev=3020657"
                alt="Auth0 logo"
                className="h-6 w-6"
              />
              Auth 0
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default login;
