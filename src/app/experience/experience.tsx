'use client'
 
import { usePathname } from 'next/navigation'
 
export function Experience() {
  const pathname = usePathname()
 
  return (
    <section id='experience' className='flex justify-start py-10 pr-20 max-[990px]:flex-col max-[990px]:py-18 max-[990px]:px-7'>
        <div className='p-0 max-[990px]:pb-3 max-[990px]:flex'>
            <p className='w-32 text-slate-400'>Stalse Analytics</p>
            <p className='w-32 text-slate-400'>2021 - PRESENT</p>
        </div>
        <div className='p-0'>
            <h3 className='text-slate-300 text-justify leading-7 pb-3'>Front-end & Web Analytics Developer Jr</h3>
            <p className='text-slate-400 text-justify leading-7'>
                Desenvolvo e implemento estratégias de teste AB para melhorar as taxas de 
                conversão de ecommerce e otimizar o desempenho do fúnil de vendas.
            .</p>
            <p className='text-slate-400 text-justify leading-7'>
                Utilizo Angular e outros frameworks para desenvolver aplicações web, simplificando o 
                gerenciamento de dados e processos de marketing digital para equipes internas.
                Realizo análises detalhadas utilizando Google Analytics, Adobe Target e outras 
                ferramentas de análise para identificar oportunidades de otimização do site e 
                melhorias na experiência do usuário.
            </p>

            <div className='flex justify-between max-[990px]:grid max-[990px]:grid-cols-2 pt-3'>
                <span className='bg-teal-800 bg-opacity-25 text-teal-400 p-2 rounded-full max-[990px]:p-1 max-[990px]:mt-2 max-[990px]:flex max-[990px]:justify-center max-[990px]:items-center'>Javascript</span>
                <span className='bg-teal-800 bg-opacity-25 text-teal-400 p-2 rounded-full max-[990px]:p-1 max-[990px]:mt-2 max-[990px]:flex max-[990px]:justify-center max-[990px]:items-center'>Angular</span>
                <span className='bg-teal-800 bg-opacity-25 text-teal-400 p-2 rounded-full max-[990px]:p-1 max-[990px]:mt-2 max-[990px]:flex max-[990px]:justify-center max-[990px]:items-center'>Google Tag Manager</span>
                <span className='bg-teal-800 bg-opacity-25 text-teal-400 p-2 rounded-full max-[990px]:p-1 max-[990px]:mt-2 max-[990px]:flex max-[990px]:justify-center max-[990px]:items-center'>Adobe Target</span>
            </div>
        </div>
    </section>
  )
}