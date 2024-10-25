'use client'
 
import { usePathname } from 'next/navigation'
import { ArrowForward } from '@mui/icons-material'
import angular from '/public/angular.jpg'
import javascript from '/public/javascript.jpg'
import stalse from '/public/logo-stalse.png'
import Image from 'next/image'
 
export function Projects() {
  const pathname = usePathname()
 
  return (
    <section id='projects' className='py-10 pr-20 max-[990px]:py-18 max-[990px]:px-7'>
         <div className='flex justify-start py-10 pr-20 max-[990px]:flex-col max-[990px]:pr-0 hover:bg-slate-700 hover:bg-opacity-25 hover:rounded-xl'>
            <div className='pr-5 w-[300px] max-[990px]:w-[100px] max-[990px]:pr-0 max-[990px]:mb-3'>
                <Image className='w-full' src={stalse} alt='angular wallpaper'/>
            </div>
            <div className='p-0'>
                <h3 className='text-slate-300 text-justify font-bold leading-7 pb-3'><a href="https://www.stalse.com/" target='_blank'>Web Site - Stalse Analytics <ArrowForward/></a></h3>
                <p className='text-slate-400 text-justify leading-7'>
                    Site institucional desenvolvido com Flask, o framework web de Python e Tailwind. Tendo integrações com formulário
                    Hubspot.
                </p>

                <div className='grid grid-cols-1 pt-3'>
                    <div className="grid grid-cols-4 max-[990px]:grid-cols-2">
                        <span className='text-center flex justify-center items-center text-sm bg-teal-800 bg-opacity-25 text-teal-400 mb-3 mx-1 py-1 px-1 rounded-full max-[990px]:p-1 max-[990px]:mt-2 max-[990px]:flex max-[990px]:justify-center max-[990px]:items-center'>Flask</span>
                        <span className='text-center flex justify-center items-center text-sm bg-teal-800 bg-opacity-25 text-teal-400 mb-3 mx-1 py-1 px-1 rounded-full max-[990px]:p-1 max-[990px]:mt-2 max-[990px]:flex max-[990px]:justify-center max-[990px]:items-center'>Tailwind</span>
                        <span className='text-center flex justify-center items-center text-sm bg-teal-800 bg-opacity-25 text-teal-400 mb-3 mx-1 py-1 px-1 rounded-full max-[990px]:p-1 max-[990px]:mt-2 max-[990px]:flex max-[990px]:justify-center max-[990px]:items-center'>Hubspot</span>
                        <span className='text-center flex justify-center items-center text-sm bg-teal-800 bg-opacity-25 text-teal-400 mb-3 mx-1 py-1 px-1 rounded-full max-[990px]:p-1 max-[990px]:mt-2 max-[990px]:flex max-[990px]:justify-center max-[990px]:items-center'>Google Analytics</span>
                        <span className='text-center flex justify-center items-center text-sm bg-teal-800 bg-opacity-25 text-teal-400 mb-3 mx-1 py-1 px-1 rounded-full max-[990px]:p-1 max-[990px]:mt-2 max-[990px]:flex max-[990px]:justify-center max-[990px]:items-center'>Google Tag Manager</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex justify-start py-10 pr-20 max-[990px]:flex-col max-[990px]:pr-0 hover:bg-slate-700 hover:bg-opacity-25 hover:rounded-xl'>
            <div className='pr-5 w-[300px] max-[990px]:w-[100px] max-[990px]:pr-0 max-[990px]:mb-3'>
                <Image className='w-full' src={stalse} alt='angular wallpaper'/>
            </div>
            <div className='p-0'>
                <h3 className='text-slate-300 text-justify font-bold leading-7 pb-3'><a href="https://blog.stalse.com/" target='_blank'>Blog - Stalse Analytics <ArrowForward/></a></h3>
                <p className='text-slate-400 text-justify leading-7'>
                    Blog institucional desenvolvido em WordPress e um pouco de CSS. Onde são postadas
                    curiosidades de analytics.
                </p>

                <div className='grid grid-cols-1 pt-3'>
                    <div className="grid grid-cols-4 max-[990px]:grid-cols-2">
                        <span className='text-center flex justify-center items-center text-sm bg-teal-800 bg-opacity-25 text-teal-400 mb-3 mx-1 py-1 px-1 rounded-full max-[990px]:p-1 max-[990px]:mt-2 max-[990px]:flex max-[990px]:justify-center max-[990px]:items-center'>WordPress</span>
                        <span className='text-center flex justify-center items-center text-sm bg-teal-800 bg-opacity-25 text-teal-400 mb-3 mx-1 py-1 px-1 rounded-full max-[990px]:p-1 max-[990px]:mt-2 max-[990px]:flex max-[990px]:justify-center max-[990px]:items-center'>CSS</span>
                        <span className='text-center flex justify-center items-center text-sm bg-teal-800 bg-opacity-25 text-teal-400 mb-3 mx-1 py-1 px-1 rounded-full max-[990px]:p-1 max-[990px]:mt-2 max-[990px]:flex max-[990px]:justify-center max-[990px]:items-center'>Google Analytics</span>
                        <span className='text-center flex justify-center items-center text-sm bg-teal-800 bg-opacity-25 text-teal-400 mb-3 mx-1 py-1 px-1 rounded-full max-[990px]:p-1 max-[990px]:mt-2 max-[990px]:flex max-[990px]:justify-center max-[990px]:items-center'>Google Tag Manager</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex justify-start py-10 pr-20 max-[990px]:flex-col max-[990px]:pr-0 hover:bg-slate-700 hover:bg-opacity-25 hover:rounded-xl'>
            <div className='pr-5 w-[300px] max-[990px]:w-[100px] max-[990px]:pr-0 max-[990px]:mb-3'>
                <Image className='w-full' src={angular} alt='angular wallpaper'/>
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
    </section>
  )
}