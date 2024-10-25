'use client'
 
import { usePathname } from 'next/navigation'
 
export function Footer() {
  const pathname = usePathname()
 
  return (
    <section id='projects' className='py-10 pr-20 max-[990px]:py-18 max-[990px]:px-7'>
        <p className='text-slate-300'>Site desenvolvido com React.js & Tailwind por Thiago Bastos</p>
    </section>
  )
}