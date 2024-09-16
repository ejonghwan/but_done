"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'
import Stairs from '@/utillity-layer/animation/Stairs'

const StairTransition = () => {

   const pathname = usePathname();

   return (
      <AnimatePresence mode='wait'>
         <div key={pathname}>
            <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex'>
               <Stairs />
            </div>


            {/* 화면에 가렸다 나옴 */}
            <motion.div
               className='h-screen w-screen fixed bg-test top-0 pointer-events-none'
               initial={{ opacity: 1 }}
               animate={{ opacity: 0, transition: { delay: 1, duration: .4, ease: 'easeInOut' } }}
            />
         </div>
      </AnimatePresence>
   )
}

export default StairTransition