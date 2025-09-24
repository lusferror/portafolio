"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Photo() {
    return (
        <div className='w-full h-full relative'>

            <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4 , ease: 'easeIn'}
                }}
            >
                <motion.div 
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' } }}
                    className='w-[298px] h-[298px] xl:h-[498px] xl:w-[498px] mix-blend-lighten absolute'>
                    <Image
                        src='/assets/avatar-programador.png'
                        alt='Luis Robles Photo'
                        priority
                        quality={100}
                        fill
                        className='object-contain'
                    />
                </motion.div>
            </motion.div>

            <motion.svg
                className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle 
                    cx="253"
                    cy="253"
                    r="248"
                    stroke="#00FF99"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92"],
                        rotate: [120 , 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }}
                />

            </motion.svg>

        </div>
    )
}