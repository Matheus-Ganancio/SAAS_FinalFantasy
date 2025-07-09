// use client é uma diretiva do Next.js que indica que este componente deve ser renderizado no lado do cliente, permitindo o uso de hooks como useState.
"use client"
// Importa o React e outros componentes necessários para criar o cabeçalho do site.
import { useState } from 'react';
// Importa o Link do Next.js para criar links de navegação entre páginas.
import Link from 'next/link';
// Importa componentes de UI personalizados, como Sheet e Button, para criar um menu lateral responsivo.
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
// Importa o componente Button da biblioteca de UI para criar botões estilizados.
import { Button } from "@/components/ui/button"

// Importa o ícones da biblioteca Lucide React.
import { Menu } from "lucide-react"
import { LogIn } from "lucide-react"
import { useSession } from "next-auth/react";
// Importa a função handleRegister que será usada para lidar com o registro de usuários.
// usar sempre o _ para declarar o local quando não é uma rota do Next.js
import { handleRegister } from '../_actions/login'

export function Header(){
    // Sinaliza se existe usuário logado.
    const { data: session, status } = useSession();
    
    const [isOpen, setIsOpen] = useState(false);
    
    const navItems = [
        { href: "#profissionais", label: "Profissionais" }
    ]

    async function handleLogin() {
        await handleRegister("github")

    }

    // Define o componente NavLinks.
    // Este componente é responsável por renderizar a lista de links de navegação.
    // É uma "arrow function" que retorna JSX (a sintaxe que parece HTML).
    const NavLinks = () => (
        
        // <> </> é um Fragment. Usamos isso quando queremos retornar múltiplos elementos
        // sem adicionar um nó extra desnecessário à estrutura da página.
        // É como um agrupador invisível.
        <>
        {/*
            'navItems' é como um array de objetos, onde cada objeto representa um link.
            Exemplo: [{ href: "/inicio", label: "Início" }, { href: "/sobre", label: "Sobre" }]

            '.map()' é um método de array em JavaScript que cria um novo array
            transformando cada item do array original.
            Aqui, para cada 'item' no array 'navItems', cria um componente <Button>.
        */}
        {navItems.map((item) => (
            // É um componente de botão que é vindo da biblioteca de UI
            <Button
                // sinaliza para voltar ao estado de false/fechado do menu de hambúrguer
                // quando o botão é clicado, ou seja, fecha o menu lateral ao clicar em um link
                onClick={() => setIsOpen(false)}
                // 'key' é pra quando quando renderiza uma lista de itens, o React precisa de uma 
                // 'key' única para cada item para poder identificá-los e atualizá-los
                // eficientemente se a lista mudar.
                // Usar 'item.href' (o endereço do link) como chave é uma boa prática aqui,
                // já que os hrefs são únicos.
                key={item.href}
                // 'asChild' indica que este botão deve se comportar como um link
                asChild
                // 'className' define o estilo do botão, no caso está sendo removido o fundo e a sombra
                // também definindo a cor do texto
                className="bg-transparent hover:bg-transparent text-[#FF4B33] hover:text-[#1E90FF] shadow-none"
                >
                    {/* 'Link' é um componente do Next.js que permite navegar entre páginas
                    e item.labbel é o texto que será exibido no link */}
                    <Link href={item.href} className='text-base'>
                    {item.label}
                    </Link>

            </Button>
            ))}
            
            {/* confere se existe login ativo, caso não, renderiza o botão login na tela do painel*/}
            {status === 'loading' ? (<>
            </>
            ) : session ? (
                <Link
                href="/dashboard"
                className='flex items-center justify-center gap-2 bg-zinc-900 text-white py-1 rounded-md px-4'
                >
                Painel da clinica
                </Link>
            ) : (
                <Button onClick={handleLogin}  
                className="text-[#000000] hover:text-[#C6A94D] bg-[#C6A94D] hover:bg-[#000000]">
                    <LogIn/>
                    Portal
                </Button>
            )}
        </>
    )

    return(
        <header
        // Coloca a Logo "OdontoPro" com "Odonto" em negrito e "PRO" em verde
        // e esse logo é um texto e não uma imagem, ele também é um link
        // clicavel
        className ="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-[#060b10]">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/"
                className="text-3xl font-bold text-[#C0C0C0]">
                Ivalice<span className="text-[#C6A94D]">BAZAAR</span>
                </Link>
                
                {/* Menu de navegação principal do site.
                A classe "hidden md:flex" faz com que esse menu só apareça em telas médias ou maiores (por exemplo, desktops e tablets).
                Em telas pequenas (como celulares), o menu fica escondido e será substituído pelo menu lateral (hambúrguer).
                O link "Profissionais" é um exemplo de item do menu, que pode levar para uma página de profissionais cadastrados. */}
                <nav className="hidden md:flex items-center space-x-4">

                    {/* O Navlinks renderiza os links de navegação, que já foram definidos acima. */}
                    <NavLinks/>
                </nav>
                {/* isOpen é um estado que controla se o menu lateral está aberto ou fechado.
                onOpenChange é uma função que atualiza o estado do menu de hamguerger para aberto ou fechado */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        {/* Botão de menu lateral (hambúrguer) que aparece em telas pequenas. */}
                    <SheetTrigger asChild className="md:hidden">
                        <Button className="text-[#33FFDD] hover:text-[#C0C0C0] hover:bg-transparent"
                        variant="ghost"
                        size="icon">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>

                    {/* controla o tamanho de quando é um dispositivo menor w-[px] e maior sm:w-[300px] e faz o eixo z na pagina em z-[xxxx]*/}
                    <SheetContent side="right" className="w-[240px] sm:w-[300px] z-[9999] bg-[#35383D]">
                        
                        <SheetTitle className="text-[#33FFDD] ">
                            Menu
                            </SheetTitle>
                        <SheetHeader></SheetHeader>

                        {/* Descrição da da rotução do menu (como um titulo do menu), no caso os links são em referencia ao conteudo abaixo dele */}
                        <SheetDescription className="text-[#F5F5F5] font-semibold">
                            Veja nossos links
                        </SheetDescription>
                        {/* esse className é para dar um espaçamento entre o titulo e os links */}
                        <nav className='flex flex-col space-y-4 mt-6'>
                        {/* Aqui estão os links do menu lateral, que aparecem quando o botão de menu lateral (hambúrguer) é clicado. */}
                            <NavLinks/>
                        </nav>

                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}