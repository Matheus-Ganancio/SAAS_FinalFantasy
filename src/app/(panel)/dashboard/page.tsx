import getSession from '@/lib/getSession';
//usado para redirecionar o usuário para alguma pagina
import { redirect } from 'next/navigation';


// ele precisa ser assincrono para poder aguardar a sessão do usuário
export default async function Dashboard() {
    const session = getSession();


    // Caso o usuário não esteja logado, ele será redirecionado para a pagina abaixo
    if (!session) {
        redirect("/");
    }

    if (!)

    return (
        <section>
            <h1>
                Pagina Dashboard
            </h1>
            <div className="w-full h-[600px] bg-gray-200 mb-10">

            </div>

            <div className="w-full h-[600px] bg-gray-500 mb-10">

            </div>

            <div className="w-full h-[600px] bg-gray-200 mb-10">

            </div>
        </section>
    )
}