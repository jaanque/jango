import DashboardHeader from '@/app/components/DashboardHeader'
import './dashboard.css'

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
