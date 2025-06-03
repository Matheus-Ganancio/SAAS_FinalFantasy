
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <h1>
                Dashboard Layout
            </h1>
            {children}
        </section>
    )
}