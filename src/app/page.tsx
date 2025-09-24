import Photo from '@/components/Photo';
import Social from '@/components/Social';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

export default function Home() {
    return (
        <section className='h-full'>
            <div className="container mx-auto h-full">
                <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
                    <div className='xl:text-left text-center order-2 xl:order-none'>
                        <span className='text-xl'> Desarrollador de Software</span>
                        <h1 className='h1'>
                            Hola, soy <br />
                            <span className='text-accent'> Luis Robles</span>
                        </h1>
                        <p className='max-w-[500px] mb-9 text-white/80 my-8'>
                            Soy un desarrollador de software con experiencia en la creación de aplicaciones web y móviles. Me especializo en tecnologías como React, Node.js, Php y Python.
                        </p>
                        <div className='flex flex-col xl:flex-row items-center gap-8'>
                            <Button
                                variant={'outline'}
                                size={'lg'}
                                className='uppercase flex items-center gap-2'
                            >
                                <span>Descargar CV</span>
                                <FiDownload className='text-xl' />
                            </Button>
                            <div className='mb-8 xl:mb-0'>
                                <Social
                                    containerStyles='flex gap-6'
                                    iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary 
                                hover:transition-all duration-500'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='order-1 xl:order-none mb-8 xl:mb-0'>
                        <Photo />
                    </div>
                </div>
            </div>
        </section>
    );
}
