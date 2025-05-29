
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
        <section className="bg-gray-50 py-16">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text 3xl text-center mb-12 font-bold">
                    Clinicas disponíveis
                </h2>
                {/* Grid cria uma grade de colunas, abaixo estamos variando o tamanho
                das colunas dependendo do tamanho da tela */}
                <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Card 0 */}
                    <Card className="overflow-hidden">
                        <CardContent className="p-0">
                            <div>
                                {/* controla o tamanho da imagem dentro do card para que 
                                o fill não coloque ela em toda a tela, o fill é necessário 
                                para que ela ajuste automaticamente ao tamanho da tela */}
                                <div className="relative h-48">
                                    <Image
                                        src="/foto1.png"
                                        alt="Foto da clinica"
                                        fill
                                        className="object-cover"
                                        />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            Clínica Centro
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Rua das Flores, centro, Campo grande, 123 - MS
                                        </p>
                                    </div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500">                        
                                    </div>
                                    </div>
                                    <Link href="/clinica/123"
                                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center py-2 rounded-md text-sm ms:text-base font-medium">
                                    Agendar Horário
                                    <ArrowRight className="ml-2"/>
                                    </Link>
                            </div>

                        </CardContent>
                    </Card>

                    {/* Card 1 */}
                    <Card className="overflow-hidden">
                        <CardContent className="p-0">
                            <div>
                                {/* controla o tamanho da imagem dentro do card para que 
                                o fill não coloque ela em toda a tela, o fill é necessário 
                                para que ela ajuste automaticamente ao tamanho da tela */}
                                <div className="relative h-48">
                                    <Image
                                        src="/foto1.png"
                                        alt="Foto da clinica"
                                        fill
                                        className="object-cover"
                                        />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            Clínica Centro
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Rua das Flores, centro, Campo grande, 123 - MS
                                        </p>
                                    </div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500">                        
                                    </div>
                                    </div>
                                    <Link href="/clinica/123"
                                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center py-2 rounded-md text-sm ms:text-base font-medium">
                                    Agendar Horário
                                    <ArrowRight className="ml-2"/>
                                    </Link>
                            </div>

                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card className="overflow-hidden">
                        <CardContent className="p-0">
                            <div>
                                {/* controla o tamanho da imagem dentro do card para que 
                                o fill não coloque ela em toda a tela, o fill é necessário 
                                para que ela ajuste automaticamente ao tamanho da tela */}
                                <div className="relative h-48">
                                    <Image
                                        src="/foto1.png"
                                        alt="Foto da clinica"
                                        fill
                                        className="object-cover"
                                        />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            Clínica Centro
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Rua das Flores, centro, Campo grande, 123 - MS
                                        </p>
                                    </div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500">                        
                                    </div>
                                    </div>
                                    <Link href="/clinica/123"
                                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center py-2 rounded-md text-sm ms:text-base font-medium">
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