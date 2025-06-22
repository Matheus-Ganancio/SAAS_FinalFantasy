
import { PrismaClient } from '@prisma/client';


// Cria uma variavel chamada "prisma" pra conversar com o banco de dados
let prisma: PrismaClient;

// Verifica o tipo do ambiente(produção ou desenvolvimento)
if (process.env.NODE_ENV === 'production') {
    // Se for produção, cria uma nova conexão com o banco de dados
    prisma = new PrismaClient();
} 
// Se for desenvolvimento, cria uma variavel para uma versão global de conexão do 
// PrismaClient
 else {
    let globalWithPrisma = global as typeof globalThis & {
        prisma: PrismaClient;
    }

    // verifica se já existe uma conexão global com o PrismaClient
    if( !globalWithPrisma.prisma){
        // Se não existir, cria uma nova conexão e atribui uma variável global
        globalWithPrisma.prisma = new PrismaClient();
    }

    // Usa a conexão guardada na variável global
    prisma = globalWithPrisma.prisma;
 }

 // Exporta a conexão do PrismaClient para outros arquivos acessarem o banco de dados
 export default prisma;