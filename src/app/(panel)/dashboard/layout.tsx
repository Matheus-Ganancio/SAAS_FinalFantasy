
import { SidebarDashboard } from "./_components/sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='bg-[#33415C]'>
        <>
        <SidebarDashboard>
        {children}
            </SidebarDashboard>
            </>
            </div>
    )
}