'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { GitHub } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
 
export function Hero() {
  const pathname = usePathname()
 
  return (
    <section className='py-20 px-20 fixed max-[990px]:py-18 max-[990px]:px-7 max-[990px]:relative'>
        <div className='py-3'>
            <h1 className="text-5xl font-bold text-slate-300 pb-5">Thiago Bastos</h1>
            <h2 className="text-xl text-slate-300">Front-end & Web Analytics Developer</h2>
        </div>
        <div className='py-3'>
            <p className="text-slate-400">Construindo interfaces interativas e</p>
            <p className="text-slate-400">mensurando resultados.</p>
        </div>
        <div className='py-9'>
            <ul>
                <a href="#about"><li className="flex items-center text-slate-400 cursor-pointer py-3"><div className='w-14 h-0 border-t-2 border-slate-500 mr-2'></div>SOBRE</li></a>
                <a href="#experience"><li className="flex items-center text-slate-500 cursor-pointer py-3"><div className='w-10 h-0 border-t-2 border-slate-600 mr-2'></div>EXPERIÊNCIA</li></a>
                <a href="#projects"><li className="flex items-center text-slate-500 cursor-pointer py-3"><div className='w-10 h-0 border-t-2 border-slate-600 mr-2'></div>PROJETOS</li></a>
            </ul>
        </div>

        <div className='py-3'>
            <ul className='flex'>
                <li className="text-slate-600 pr-3">
                    <a href="https://github.com/thh-carvalho" target='_blank'><GitHub fontSize="large"/></a>                    
                </li>
                <li className="text-slate-600">
                    <a href="https://www.linkedin.com/in/thiagohcarvalho/" target='_blank'><LinkedIn fontSize="large"/></a>                    
                </li>
            </ul>
        </div>
    </section>
  )
}