'use client'

import { sendGTMEvent } from '@next/third-parties/google'
 
import { usePathname } from 'next/navigation'
import { ArrowForward } from '@mui/icons-material'
 
export function Footer() {
  const pathname = usePathname()
 
  return (
    <section id='projects' className='py-10 pr-20 max-[990px]:py-18 max-[990px]:px-7'>
        <a className='bg-teal-800 text-teal-100 p-2 px-5 mb-9 inline-block rounded-md' href="https://wa.me/11998080897?text=Olá%20Thiago,%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho" target='_blank' onClick={() => sendGTMEvent({ event: 'click_cta', event_label: 'cta:entrar-em-contato', event_category:'cta:click', event_action:'click:entrar-em-contato' })}>Entrar em contato <ArrowForward/></a>
        <p className='text-slate-300'>Site desenvolvido com Next.js & Tailwind por Thiago Bastos</p>
    </section>
  )
}