import DashboardHeader from '@/app/components/DashboardHeader'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashboardHeader />
      <main>{children}</main>
    </>
  );
}
