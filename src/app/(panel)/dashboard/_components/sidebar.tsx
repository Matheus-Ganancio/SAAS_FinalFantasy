"use client";
{ /* funcionamentos da estrutura explicados dentro de "hero.tsx", pois muito dessa pagina
    implementei primeiro em "hero.tsx" */}

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { CalendarCheck2, ChevronLeft, ChevronRight, Folder, Banknote, UserPen, List } from 'lucide-react';
import Link from 'next/link';
import { Span } from 'next/dist/trace';
import Image from 'next/image';
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";

export function SidebarDashboard({ children}: { children: React.ReactNode}) {

    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Configura o collapse da sidebar
    return (
        <div className='flex min-h-screen w-full'>
                    <aside className={clsx("flex flex-col border-r bg-[#152238] transition-all duration-300 p-4 h-full", {
                        "w-20": isCollapsed,
                        "w-64": !isCollapsed,
                        "hidden md:flex md:fixed": true,
                    })}>

                        <div className='mb-6 mt-4'>
                            {/* Imagem do logo, só vai aparecer se o sidebar não estiver
                            colapsado */}
                            {!isCollapsed && 
                            (
                            // Funcionamento explicado dentro do "hero.tsx"
                            <Image
                            src="/logo/IvaliceBazaar_Logo.png"
                            alt="Logo Ivalice Bazaar"
                            width={340}
                            height={400}
                            className="object-contain"
                            quality={100}
                            priority={true}
                            />
                            )}
                        </div>

                        {/* self-end ajusta o alinhamento dentro do display flex, no caso desse código, é o <aside> */}
                        <Button className='bg-[#C6A94D] hover-[#FFFFFF] text-[#000000] hover:text-[#C6A94D] self-end mb-2'
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        >
                            {/* Ícone de collapse, aponta pra esquerda caso esteja true, se for false ele aponta pra direita */}
                            {!isCollapsed ? <ChevronLeft className='w-12 h-12'/> : 
                            <ChevronRight className='w-12 h-12'/>}
                        </Button>

                        {/* Mostrar apenas quando a sidebar estiver colapsada */}

                        {isCollapsed && (
                            <nav className='flex flex-col gap-1 overflow-hidden mt-2'>
                                                            <SidebarLink
                            href="/dashboard/services"
                            label="Serviços"
                            pathname={pathname}
                            isCollapsed={isCollapsed}
                            icon={<Folder className='w-6 h-6' />}
                            />

                            <SidebarLink
                            href="/dashboard"
                            label="Agendamentos"
                            pathname={pathname}
                            isCollapsed={isCollapsed}
                            icon={<CalendarCheck2 className='w-6 h-6' />}
                            />

                                                        <SidebarLink
                            href="/dashboard/profile"
                            label="Perfil"
                            pathname={pathname}
                            isCollapsed={isCollapsed}
                            icon={<UserPen className='w-6 h-6' />}
                            />



                            <SidebarLink
                            href="/dashboard/plans"
                            label="Planos"
                            pathname={pathname}
                            isCollapsed={isCollapsed}
                            icon={<Banknote className='w-6 h-6' />}
                            />

                            </nav>
                        )}

                        <Collapsible open={!isCollapsed}>
                        {/* Aqui dentro nós inserimos as categorias da sidebar */}
                            <CollapsibleContent>
                                <nav className='flex flex-col gap-1 overflow-hidden'>
                                    <span className='text-sm text-gray-400 font-medium mt-1 uppercase'>
                                        Painel
                                    </span>
                            <SidebarLink
                            href="/dashboard/services"
                            label="Serviços"
                            pathname={pathname}
                            isCollapsed={isCollapsed}
                            icon={<Folder className='w-6 h-6' />}
                            />

                            <SidebarLink
                            href="/dashboard"
                            label="Agendamentos"
                            pathname={pathname}
                            isCollapsed={isCollapsed}
                            icon={<CalendarCheck2 className='w-6 h-6' />}
                            />

                                    <span className='text-sm text-gray-400 font-medium mt-1 uppercase'>
                                        Configurações
                                    </span>
                            <SidebarLink
                            href="/dashboard/profile"
                            label="Perfil"
                            pathname={pathname}
                            isCollapsed={isCollapsed}
                            icon={<UserPen className='w-6 h-6' />}
                            />



                            <SidebarLink
                            href="/dashboard/plans"
                            label="Planos"
                            pathname={pathname}
                            isCollapsed={isCollapsed}
                            icon={<Banknote className='w-6 h-6' />}
                            />

                                </nav>
                            </CollapsibleContent>
                        </Collapsible>

                    </aside>

            <div className={clsx("flex flex-1 flex-col transition-all duration-300",
                {
                    "md:ml-20": isCollapsed, 
                    "md:ml-64": !isCollapsed,
                }
            )}>


                {/*Configuração da sidebar, fica oculta (md:hidden) em tela menor que 768px, ou seja
                quando não está em mobile. sticky é o position do css
                */}
                <header className='md:hidden flex items-center justify-between border-b
                px-x md:px-6 h-14 z-10 sticky top-0 bg-white'>
                    <Sheet>
                        <div className='flex items-center gap-4'>
                            <SheetTrigger asChild>
                                <Button variant='outline' size='icon' className='md:hidden'
                                onClick={() => setIsCollapsed(false)}>
                                    <List className='w-5 h-5'/>
                                </Button>
                            </SheetTrigger>

                            <h1 className='text-base md:text-lg font-semibold'>
                                Menu Ivalice Bazaar
                            </h1>
                        </div>

                    <SheetContent side="right" className='sm:max-w-xs text-black'>
                        <SheetTitle>
                            Ivalice Bazaar
                        </SheetTitle>
                        <SheetDescription>
                            Menu de navegação
                        </SheetDescription>

                        <nav className='grid gap-2 text-base pt-5'>
                            <SidebarLink
                            href="/dashboard"
                            label="Agendamentos"
                            pathname={pathname}
                            isCollapsed={isCollapsed}
                            icon={<CalendarCheck2 className='w-6 h-6' />}
                            />

                            <SidebarLink
                            href="/dashboard/services"
                            label="Serviços"
                            pathname={pathname}
                            isCollapsed={isCollapsed}
                            icon={<Folder className='w-6 h-6' />}
                            />

                            <SidebarLink
                            href="/dashboard/profile"
                            label="Perfil"
                            pathname={pathname}
                            isCollapsed={isCollapsed}
                            icon={<UserPen className='w-6 h-6' />}
                            />



                            <SidebarLink
                            href="/dashboard/plans"
                            label="Planos"
                            pathname={pathname}
                            isCollapsed={isCollapsed}
                            icon={<Banknote className='w-6 h-6' />}
                            />

                        </nav>
                    </SheetContent>

                    </Sheet>
                </header>

                <main className='flex-1 py-4 px-2 md:p-6'>
                    {children}
                </main>

            </div>
        </div>
    )
}

// Componentes da sidebar
interface SidebarLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    pathname: string;
    isCollapsed: boolean;
}

// Utilização dos componentes da sidebar já criados
function SidebarLink({ href, icon, isCollapsed, label, pathname}: SidebarLinkProps) {
    return(
        <Link
        href={href}
        >
            {/* Confere se a pagina que vc está é igual a que vc quer navegar, quer dizer que
            você está nela, então faz os ajustes da interface baseado nisso*/}
            <div className={clsx("flex items-center gap-2px-3 py-2 rounded-md transition-colors", {"text-white bg-blue-500": pathname === href,
                "text-gray-700 hover:bg-gray-100": pathname !== href,

            })}>
                <span className='w-6 h-6'>{icon}</span>
                {!isCollapsed && <span>{label}</span>}
            </div>
        </Link>
    )
}