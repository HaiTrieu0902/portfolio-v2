'use client';
import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import { PATH_DEFAULT } from '@/constants/paths';
import { useAppSelector } from '@/store/store';
import { Skeleton } from 'antd';

const HomePage = () => {
  const { lang } = useAppSelector((state) => state.common);
  redirect(`/${lang}${PATH_DEFAULT.dashboard}`);
};
export default function Page() {
  return (
    <Suspense fallback={<Skeleton active />}>
      <HomePage />
    </Suspense>
  );
}
