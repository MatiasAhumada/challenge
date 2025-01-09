'use client';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  const router = useRouter();
  const handleClickLogin = () => {
    router.push('http://localhost:3000/login');
  };
  const handleClickRegister = () => {
    router.push('http://localhost:3000/register');
  };
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div></div>
          <div className="absolute inset-y-0 right-0 flex items-center space-x-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              onClick={handleClickLogin}
              type="button"
              className="rounded-md bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Login
            </button>
            <button
              onClick={handleClickRegister}
              type="button"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Home;
