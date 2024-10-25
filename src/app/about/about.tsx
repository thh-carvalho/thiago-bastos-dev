'use client'
 
import { usePathname } from 'next/navigation'
 
export function About() {
  const pathname = usePathname()
 
  return (
    <section id='about' className='py-20 pr-20 max-[990px]:py-18 max-[990px]:px-7'>
        <div className='py-3'>
            <p className="text-slate-400 text-justify leading-7 pb-3">
                Em 2017, decidi entrar na faculdade de Análise e Desenvolvimento de Sistemas da Fatec de Mogi
                das Cruzes após aprender a programar no meu curso técnico em eletroeletrônica. Tive o privilégio de conseguir um estágio em Web Analytics
                na <a href="https://www.stalse.com/" className='text-white'>Stalse Analytics</a>, que é a empresa onde trabalho atualmente, e colocar todo meu conhecimento em prática.
            </p>
            <p className="text-slate-400 text-justify leading-7 pb-3">
                Meu foco principal atualmente é trabalhar com desenvolvimento Web orientado a resultados, onde coloco em prática meu conhecimento em
                desenvolvimento Front-End criando experiências para CRO utilizando ferramentas de teste AB visando otimizar os resultados de nossos clientes.
                Atuo também com Web Analytics, fazendo o traqueamento de dados e analisando o comportamento de usuários dentro de plataformas de ecommerce. Assim
                consigo mapear e criar estratégias de conversão ou de captação de leads.
            </p>
            <p className="text-slate-400 text-justify leading-7 pb-3">
                Quando não estou na frente do computador, estou lendo alguns livros, tocando meu violão, ou fazendo alguma trilha por ai.
                Gosto também de passar um tempo com minha família e ter momentos de qualidade enquanto estou com eles.
            </p>
        </div>
    </section>
  )
}