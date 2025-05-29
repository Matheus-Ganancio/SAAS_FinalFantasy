import { Button } from "@/components/ui/button";
import Image from "next/image";
// Lembrar também de adicionar import de imagem aqui caso estejam fora da pasta
// public raiz do projeto

export function Hero() {
  return (
    // Aqui é onde o Hero é estilizado utilizando o Tailwind CSS.
    <section className="bg-white">
          {/* 
     container → Controla o tamanho máximo do elemento e ajusta automaticamente
     mx-auto → Centraliza horizontalmente qualquer elemento dentro dele que tenha
    uma largura máxima definida.

    px-4 → Define um padding horizontal
    pt-20 → Define um padding top/superior

     sm:px-6 → Quando a largura da tela for ≥ 640px (breakpoint 'sm'), o padding horizontal passa a
    ser 1.5rem (24px)

     lg:px-8   - Quando a largura da tela for ≥ 1024px (breakpoint 'lg'), o padding horizontal passa
    a ser 2rem (32px)

     Breakpoints podem ser encontrados nestá página da documentação do Tailwind CSS:
    "tailwindcss.com/docs/responsive-design"

     Legenda dos Breakpoints:
    - sm: 640px ou mais.
    - md: 768px ou mais.
    - lg: 1024px ou mais.
    - xl: 1280px ou mais.
    - 2xl: 1536px ou mais.
  */}
      <div className="container mx-auto px-4 pt-20 pb-4 sm:pb-0 sm:px-6 lg:px-8">

        <main className="flex items-center justify-center">
          {/* max-w-3x1 delimita pra área do article space-y-8 → Adiciona 
          um espaçamento vertical */}
            <article className="flex-[2] max-w-3xl Space-y-8 flex flex-col jus">
              {/* Define o tamanho do texto normal e o tamanho em tela grande, também
              deixa em negrito */}
                <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl tracking-tighter">
                    Encontre os melhores profissionais em um único local!
                </h1>
                <p>
                    Nós somos uma plataforma para profissionais da sáude com foco em agilizar seu atendimento de forma simplificada e organizada.
                </p>

                {/* Aqui adicionei o mt-4 pra dar um espaçamento entre o texto e o botão
                mt significa margin-top */}
                <Button className="bg-emerald-500 hover:bg-emerald-400 w-fit px-6 font-semibold mt-4">
                    Profissionais disponíveis
                </Button>
            </article>

            {/* Faz com que a imagem seja exibida apenas em telas grandes (lg) */}
            <div className="hidden lg:block">
              {/* Chama a imagem importando da pasta public raiz do projeto
              e dá uma alternativa pra caso a imagem não carregue */}
            <Image 
              src="/doctor-hero.png"
              alt="Foto ilustrativa de um profissional da saúde"
              width={340}
              height={400}
              className="object-contain"
              quality={100}
              priority={true}
              />
            </div>

        </main>        

      </div>
    </section>
  )
}
