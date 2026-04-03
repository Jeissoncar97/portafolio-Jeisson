import React from 'react'
import FotoJeisson from '../assets/Fotojeisson.png'

const Hero = () => {
  return (
    <section className='section py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl'>
      <div className='max-w-xl'>
        <div className='flex gap-4 mb-4'>
          <img className='rounded-full shadow-lg size-16 bg-white' src={FotoJeisson} alt="Foto de Jeisson" srcset="" />
          <a href="https://www.linkedin.com/in/jeisson-cardenas/" target='_blank' rel='noopener' className='flex items-center transition md:justify-center md:hover:scale-105 tex'>
            <div className='flex items-center '>
              <span className='relative inline-flex overflow-hidden rounded-full p-px'>
                <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9fef00_0%,#1a2e00_50%,#9fef00_100%)]'>
                </span>  
                <div className='inline-flex items-center justify-center w-full px-3 py-1 text-sm rounded-full cursor-pointer bg-gray-800 text-white/80 backdrop-blur-3xl whitespace-nowrap'>
                  Disponible para trabajar
                </div>
              </span>
            </div>
          </a>
        </div>
        <h1 className='text-4xl font-bold tracking-tight  sm:text-5xl text-(--text-white)'>Hola, soy Jeisson</h1>
        <p className='font-semibold'>Ingeniero en formación enfocado en <span className='text-(--green-htb)'>redes y hacking ético</span>. Apasionado por la ciberseguridad y el aprendizaje continuo, desarrollando proyectos prácticos en pentesting y análisis de vulnerabilidades.</p>
        <nav></nav>
      </div>
    </section>
  )
}

export default Hero
