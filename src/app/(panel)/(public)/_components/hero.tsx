import { Button } from "@/components/ui/button";
// Lembrar também de adicionar import de imagem aqui caso estejam fora da pasta
// public raiz do projeto
import Image from "next/image";

export function Hero() {
  return (
    // Aqui é onde o Hero é estilizado utilizando o Tailwind CSS.
    <section className="bg-[#152238]">
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
                <h1 className="text-[#33FFDD] text-4xl lg:text-5xl font-bold max-w-2xl tracking-tighter mb-4 [text-indent:0.5em]">
                    Aqui você encontra todos os tipos de mercadores! para o que precisa!!
                </h1>
                <p className="text-white [text-indent:1em]">
                    A <i><b>CENTAURIO</b></i> apresenta a <i><b>Ivalice Bazaar</b></i>, sua ponte para mercadores de Ivalice e Eorzea. Facilitamos o contato, mas lembre-se: <u><b>não somos responsáveis por nenhum produto ou serviço oferecido por eles</b></u>..
                </p>

                {/* Aqui adicionei o mt-4 pra dar um espaçamento entre o texto e o botão
                mt significa margin-top */}
                <Button className="bg-[#FF4B33] hover:bg-[#1E90FF] text-[#F5F5F5] w-fit px-6 font-semibold mt-4">
                    Conheça nossos planos
                </Button>
            </article>

            {/* Faz com que a imagem seja exibida apenas em telas grandes (lg) */}
            <div className="hidden lg:block">
              {/* Chama a imagem importando da pasta public raiz do projeto
              e dá uma alternativa pra caso a imagem não carregue.
              IMPORTANTE: sempre coloque as dimensões da imagem para evitar problemas */}
            <Image 
              src="/people/Sphene_Banner.png"
              alt="Foto ilustrativa da representante Sphene"
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
