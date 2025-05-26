// use client é uma diretiva do Next.js que indica que este componente deve ser renderizado no lado do cliente, permitindo o uso de hooks como useState.
"use client"
// Importa o React e outros componentes necessários para criar o cabeçalho do site.
import { userState } from 'react';
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
// Importa o ícone Menu da biblioteca Lucide React para usar como ícone do menu lateral.
import { Menu } from "lucide-react"

export function Header(){
    const [isOpen, setIsOpen] = userState(false);

    const navItems = [
        { href: "#profissionais", label: "Profissionais" }
    ]

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
                className="bg-transparent hover:bg-transparent text-black shadow-none"
                >
                    {/* 'Link' é um componente do Next.js que permite navegar entre páginas
                    e item.labbel é o texto que será exibido no link */}
                    <Link href={item.href}>
                    {item.label}
                    </Link>

            </Button>
            ))}
        </>
    )

    return(
        <header
        // Coloca a Logo "OdontoPro" com "Odonto" em negrito e "PRO" em verde
        // e esse logo é um texto e não uma imagem, ele também é um link
        // clicavel
        className ="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/"
                className="text-3xl font-bold text-zinc-900">
                OdontoPro<span className="text-emerald-500">PRO</span>
                </Link>
                
                {/* Menu de navegação principal do site.
                A classe "hidden md:flex" faz com que esse menu só apareça em telas médias ou maiores (por exemplo, desktops e tablets).
                Em telas pequenas (como celulares), o menu fica escondido e será substituído pelo menu lateral (hambúrguer).
                O link "Profissionais" é um exemplo de item do menu, que pode levar para uma página de profissionais cadastrados. */}
                <nav className="hidden md:flex items-center">

                    {/* O Navlinks renderiza os links de navegação, que já foram definidos acima. */}
                    <NavLinks/>
                </nav>
                {/* isOpen é um estado que controla se o menu lateral está aberto ou fechado.
                onOpenChange é uma função que atualiza o estado do menu de hamguerger para aberto ou fechado */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        {/* Botão de menu lateral (hambúrguer) que aparece em telas pequenas. */}
                    <SheetTrigger asChild className="md:hidden">
                        <Button className="text-black hover:bg-transparent"
                        variant="ghost"
                        size="icon">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>

                    {/* controla o tamanho de quando é um dispositivo menor w-[px] e maior sm:w-[300px] e faz o eixo z na pagina em z-[xxxx]*/}
                    <SheetContent side="right" className="w-[240px] sm:w-[300px] z-[9999]">
                        <SheetTitle>Menu</SheetTitle>
                        <SheetHeader></SheetHeader>

                        {/* Descrição da da rotução do menu (como um titulo do menu), no caso os links são em referencia ao conteudo abaixo dele */}
                        <SheetDescription>
                            Veja nossos links
                        </SheetDescription>
                        {/* Aqui estão os links do menu lateral, que aparecem quando o botão de menu lateral (hambúrguer) é clicado. */}
                        <nav>
                            <NavLinks/>
                        </nav>

                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}