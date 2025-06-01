
export function Footer()
{
    return(
        <footer className="py-6 text-center text-gray-500 text-sm md:text-base bg-gray-800">
            <p>
                todos direitos reservados © {new Date().getFullYear()} - 
                <span className="hover:text-red-500 duration-300">@MatheusGanancio</span>
            </p>
        </footer>
    )
}