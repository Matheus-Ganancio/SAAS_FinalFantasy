import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header(){
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
                    <a href="#">Profissionais</a>
                </nav>
                <Sheet>
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
                            <a href="#">Profissionais</a>
                        </nav>

                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}