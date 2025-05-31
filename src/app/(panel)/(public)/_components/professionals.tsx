
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// faz puxar a imagens da pasta public raiz do projeto
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export function Professionals() {
    return (
        // BG significa background, para dar uma cor ao fundo da seção, py significa
        // padding vertical (padding top e bottom)
        <section className="bg-[#33415C] py-16">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-[#C0C0C0] text-3xl text-center mb-12 font-bold">
                    Profissionais disponíveis
                </h2>
                {/* Grid cria uma grade de colunas, abaixo estamos variando o tamanho
                das colunas dependendo do tamanho da tela */}
                <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Card 0 */}
                    <Card className="overflow-hidden bg-[#ffddf3]">
                        <CardContent className="p-0">
                            <div>
                                {/* controla o tamanho da imagem dentro do card para que 
                                o fill não coloque ela em toda a tela, o fill é necessário 
                                para que ela ajuste automaticamente ao tamanho da tela */}
                                <div className="relative h-48">
                                    <Image
                                        src="/people/Mercador_Seeq_01.png"
                                        alt="Foto Mercador Seeq 01"
                                        fill
                                        className="object-cover"
                                        />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            <u>Seeq - Ferreiro</u>
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Broken Sands, Dalmasca Estersand, Rabanastre, X-13 Y+02 - Ivalice
                                        </p>
                                    </div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500">                        
                                    </div>
                                    </div>
                                    <Link href="/clinica/123"
                                    className="w-full bg-[#1E90FF] hover:bg-[#C6A94D] text-white flex items-center justify-center py-2 rounded-md text-sm ms:text-base font-medium">
                                    Agendar Horário
                                    <ArrowRight className="ml-2"/>
                                    </Link>
                            </div>

                        </CardContent>
                    </Card>

                    {/* Card 1 */}
                    <Card className="overflow-hidden bg-[#ffddf3]">
                        <CardContent className="p-0">
                            <div>
                                {/* controla o tamanho da imagem dentro do card para que 
                                o fill não coloque ela em toda a tela, o fill é necessário 
                                para que ela ajuste automaticamente ao tamanho da tela */}
                                <div className="relative h-48">
                                    <Image
                                        src="/people/Mercador_Jote.png"
                                        alt="Foto Mercador Jote 01"
                                        fill
                                        className="object-cover"
                                        />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            <u>Jote - Alfaiate</u>
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Fane of the Path, Eruyt Village, Jagd Difohr, X+09 Y+02 - Ivalice
                                        </p>
                                    </div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500">                        
                                    </div>
                                    </div>
                                    <Link href="/clinica/123"
                                    className="w-full bg-[#1E90FF] hover:bg-[#C6A94D] text-white flex items-center justify-center py-2 rounded-md text-sm ms:text-base font-medium">
                                    Agendar Horário
                                    <ArrowRight className="ml-2"/>
                                    </Link>
                            </div>

                        </CardContent>
                    </Card>
                    
                    {/* Card 2 */}
                    <Card className="overflow-hidden bg-[#ffddf3]">
                        <CardContent className="p-0">
                            <div>
                                {/* controla o tamanho da imagem dentro do card para que 
                                o fill não coloque ela em toda a tela, o fill é necessário 
                                para que ela ajuste automaticamente ao tamanho da tela */}
                                <div className="relative h-48">
                                    <Image
                                        src="/people/Mercador_Mjrn.png"
                                        alt="Foto Mercador Mjrn 01"
                                        fill
                                        className="object-cover"
                                        />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            <u>Mjrn - Alquimista</u>
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            The Spiritwood, Eruyt Village, Jagd Difohr, X+00 Y+15 - Ivalice
                                        </p>
                                    </div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500">                        
                                    </div>
                                    </div>
                                    <Link href="/clinica/123"
                                    className="w-full bg-[#1E90FF] hover:bg-[#C6A94D] text-white flex items-center justify-center py-2 rounded-md text-sm ms:text-base font-medium">
                                    Agendar Horário
                                    <ArrowRight className="ml-2"/>
                                    </Link>
                            </div>

                        </CardContent>
                    </Card>

                    {/* Card 3 */}
                    <Card className="overflow-hidden bg-[#ffddf3]">
                        <CardContent className="p-0">
                            <div>
                                {/* controla o tamanho da imagem dentro do card para que 
                                o fill não coloque ela em toda a tela, o fill é necessário 
                                para que ela ajuste automaticamente ao tamanho da tela */}
                                <div className="relative h-48">
                                    <Image
                                        src="/people/Mercador_Bagamnan_01.png"
                                        alt="Foto Mercador Bagamnan 01"
                                        fill
                                        className="object-cover"
                                        />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            <u>Bagamnan - Caçador</u>
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Cape Tialan, Phon Coast, Archadia, X-07 Y+01 - Ivalice
                                        </p>
                                    </div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500">                        
                                    </div>
                                    </div>
                                    <Link href="/clinica/123"
                                    className="w-full bg-[#1E90FF] hover:bg-[#C6A94D] text-white flex items-center justify-center py-2 rounded-md text-sm ms:text-base font-medium">
                                    Agendar Horário
                                    <ArrowRight className="ml-2"/>
                                    </Link>
                            </div>

                        </CardContent>
                    </Card>

                    {/* Card 4 */}
                    <Card className="overflow-hidden bg-[#ffddf3]">
                        <CardContent className="p-0">
                            <div>
                                {/* controla o tamanho da imagem dentro do card para que 
                                o fill não coloque ela em toda a tela, o fill é necessário 
                                para que ela ajuste automaticamente ao tamanho da tela */}
                                <div className="relative h-48">
                                    <Image
                                        src="/people/Fufucha.jpg"
                                        alt="Foto Mercador Fufucha 01"
                                        fill
                                        className="object-cover"
                                        />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            <u>Fufucha - Jardineiro</u>
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Old Gridania, Gridania, The Black Shroud, X+32 Y-18 - Eorzea
                                        </p>
                                    </div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500">                        
                                    </div>
                                    </div>
                                    <Link href="/clinica/123"
                                    className="w-full bg-[#1E90FF] hover:bg-[#C6A94D] text-white flex items-center justify-center py-2 rounded-md text-sm ms:text-base font-medium">
                                    Agendar Horário
                                    <ArrowRight className="ml-2"/>
                                    </Link>
                            </div>

                        </CardContent>
                    </Card>

                    {/* Card 5 */}
                    <Card className="overflow-hidden bg-[#ffddf3]">
                        <CardContent className="p-0">
                            <div>
                                {/* controla o tamanho da imagem dentro do card para que 
                                o fill não coloque ela em toda a tela, o fill é necessário 
                                para que ela ajuste automaticamente ao tamanho da tela */}
                                <div className="relative h-48">
                                    <Image
                                        src="/people/Mercador_Slowfix_Cointoss.jpg"
                                        alt="Foto Mercador Slowfix Cointoss 01"
                                        fill
                                        className="object-cover"
                                        />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            <u>Slowfix Cointoss - Mecânico</u>
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Centro, Idyllshire, Dravanian Hinterlands, X+02 Y+05 - Eorzea
                                        </p>
                                    </div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500">                        
                                    </div>
                                    </div>
                                    <Link href="/clinica/123"
                                    className="w-full bg-[#1E90FF] hover:bg-[#C6A94D] text-white flex items-center justify-center py-2 rounded-md text-sm ms:text-base font-medium">
                                    Agendar Horário
                                    <ArrowRight className="ml-2"/>
                                    </Link>
                            </div>

                        </CardContent>
                    </Card>

                    {/* Card 6 */}
                    <Card className="overflow-hidden bg-[#ffddf3]">
                        <CardContent className="p-0">
                            <div>
                                {/* controla o tamanho da imagem dentro do card para que 
                                o fill não coloque ela em toda a tela, o fill é necessário 
                                para que ela ajuste automaticamente ao tamanho da tela */}
                                <div className="relative h-48">
                                    <Image
                                        src="/people/Mercador_Gulool_Ja_Ja.jpg"
                                        alt="Foto Mercador Gulool Ja Ja 01"
                                        fill
                                        className="object-cover"
                                        />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            <u>Gulool Ja Ja - Guia</u>
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Castelo, Tuliyollal, Yok Tural, X+45 Y+21 - Eorzea
                                        </p>
                                    </div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500">                        
                                    </div>
                                    </div>
                                    <Link href="/clinica/123"
                                    className="w-full bg-[#1E90FF] hover:bg-[#C6A94D] text-white flex items-center justify-center py-2 rounded-md text-sm ms:text-base font-medium">
                                    Agendar Horário
                                    <ArrowRight className="ml-2"/>
                                    </Link>
                            </div>

                        </CardContent>
                    </Card>

                    {/* Card 6 */}
                    <Card className="overflow-hidden bg-[#ffddf3]">
                        <CardContent className="p-0">
                            <div>
                                {/* controla o tamanho da imagem dentro do card para que 
                                o fill não coloque ela em toda a tela, o fill é necessário 
                                para que ela ajuste automaticamente ao tamanho da tela */}
                                <div className="relative h-48">
                                    <Image
                                        src="/people/Mercador_Jandelaine.jpg"
                                        alt="Foto Mercador Jandelaine.jpg 01"
                                        fill
                                        className="object-cover"
                                        />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            <u>Jandelaine - Cabelereiro</u>
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            The Upper Decks, Limsa Lominsa, La Noscea, X+01 Y-07 - Eorzea
                                        </p>
                                    </div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500">                        
                                    </div>
                                    </div>
                                    <Link href="/clinica/123"
                                    className="w-full bg-[#1E90FF] hover:bg-[#C6A94D] text-white flex items-center justify-center py-2 rounded-md text-sm ms:text-base font-medium">
                                    Agendar Horário
                                    <ArrowRight className="ml-2"/>
                                    </Link>
                            </div>

                        </CardContent>
                    </Card>

                    {/* Card 7 */}
                    <Card className="overflow-hidden bg-[#ffddf3]">
                        <CardContent className="p-0">
                            <div>
                                {/* controla o tamanho da imagem dentro do card para que 
                                o fill não coloque ela em toda a tela, o fill é necessário 
                                para que ela ajuste automaticamente ao tamanho da tela */}
                                <div className="relative h-48">
                                    <Image
                                        src="/people/Mercador_Lalah_Jinjahl.jpg"
                                        alt="Foto Mercador Lalah Jinjahl.jpg 01"
                                        fill
                                        className="object-cover"
                                        />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            <u>Lalah Jinjahl - Guarda-Costas</u>
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Sharlayan, Old Sharlayan, The Northern Empty, X+25 Y+00 - Eorzea
                                        </p>
                                    </div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500">                        
                                    </div>
                                    </div>
                                    <Link href="/clinica/123"
                                    className="w-full bg-[#1E90FF] hover:bg-[#C6A94D] text-white flex items-center justify-center py-2 rounded-md text-sm ms:text-base font-medium">
                                    Agendar Horário
                                    <ArrowRight className="ml-2"/>
                                    </Link>
                            </div>

                        </CardContent>
                    </Card>

                </section>
            </div>


        </section>
    )
}