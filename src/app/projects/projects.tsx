'use client'
 
import { usePathname } from 'next/navigation'
import { Angular, Javascript } from '../ui/images'
import { ArrowForward } from '@mui/icons-material'
 
export function Projects() {
  const pathname = usePathname()
 
  return (
    <section id='projects' className='py-10 pr-20 max-[990px]:py-18 max-[990px]:px-7'>
        <div className='flex justify-start py-10 pr-20 max-[990px]:flex-col max-[990px]:pr-0'>
            <div className='pr-5 max-[990px]:pr-0 max-[990px]:mb-3'>
                <Angular/>
            </div>
            <div className='p-0'>
                <h3 className='text-slate-300 text-justify font-bold leading-7 pb-3'><a href="https://github.com/thh-carvalho/auth-login-firebase-angular" target='_blank'>Login Social - Firebase Angular <ArrowForward/></a></h3>
                <p className='text-slate-400 text-justify leading-7'>
                    Testando a funcionalidade de login com midias sociais do Firebase integrado com Angular.
                </p>

                <div className='flex justify-start pt-3'>
                    <span className='bg-teal-800 bg-opacity-25 text-teal-400 p-2 mr-2 rounded-full'>Angular</span>
                    <span className='bg-teal-800 bg-opacity-25 text-teal-400 p-2 rounded-full'>Firebase</span>
                </div>
            </div>
        </div>

        <div className='flex justify-start py-10 pr-20 max-[990px]:flex-col max-[990px]:pr-0'>
            <div className='pr-5 max-[990px]:pr-0 max-[990px]:mb-3'>
                <Javascript/>
            </div>
            <div className='p-0'>
                <h3 className='text-slate-300 text-justify font-bold leading-7 pb-3'><a href="https://github.com/thh-carvalho/javascript_data_structure" target='_blank'>Estrutura de dados em Javascript <ArrowForward/></a></h3>
                <p className='text-slate-400 text-justify leading-7'>
                    Códigos de algumas estrutura de dados em Javascript
                </p>

                <div className='flex justify-start pt-3'>
                    <span className='bg-teal-800 bg-opacity-25 text-teal-400 p-2 mr-2 rounded-full'>Javascript</span>
                </div>
            </div>
        </div>
    </section>
  )
}