"use server"

import prisma from "@/lib/prisma";

interface GetUserDataProps {
    userID: string;
}

export async function getUserData({ userID }: GetUserDataProps) {
    try{

        // se não tiver userID, retorna null para não gastar processamento do banco de dados
        if(!userID) {
            return null;
        }
        const user = await prisma.user.findFirst({
            where: {
                id: userID
            },
            include: {
                subscription: true,
            }
        })    

        if(!user) {
            return null;
        }

        return user;
        
    }
    catch(err){
        console.log(err);
        return null;
    }
}