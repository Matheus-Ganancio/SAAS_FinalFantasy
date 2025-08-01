import getSession from '@/lib/getSession';
import { redirect } from 'next/navigation';
import { getUserData } from './_data-access/get-info-user';
import { ProfileContent } from './_components/profile';

export default async function Profile()
{
        const session = await getSession();
    
    
        // Caso o usuário não esteja logado, ele será redirecionado para a pagina abaixo
        if (!session) {
            redirect("/");
        }

        const user = await getUserData({ userID: session.user?.id });
        console.log("getUserData: ", user);

    return (
        <ProfileContent />
    )
}