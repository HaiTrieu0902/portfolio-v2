'use client';
import { MainLayout } from '../_layouts';

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
