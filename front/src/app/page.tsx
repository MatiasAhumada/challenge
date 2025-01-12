'use client';
import NavBar from '@/Components/navbar';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [token, setToken] = useState<string | undefined>(undefined);
  useEffect(() => {
    const storedToken: string | null = localStorage.getItem('token');

    setToken(storedToken ?? undefined);
  }, []);
  return <NavBar token={token} />;
};

export default Home;
