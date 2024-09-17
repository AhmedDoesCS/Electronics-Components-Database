import React from 'react'
import { motion } from 'framer-motion'

const ComponentCard = (props) => {
  return (
    <>
    {/* <div className=''>
        <img className='w-[300px]' src={props.img}/>
    </div> */}
    <motion.div whileHover={{scale:1.1}}
    whileDrag={{scale:1.9}}
    whileTap={{scale:1}}
    transition={{ease:"circOut"}}
    className='h-[250px] w-[250px] rounded-xl bg-gradient-to-bl from-[#313131] to-[#474747] cursor-pointer'>
            <div className='text-white w-[100%] h-[100%] flex flex-col justify-end'>
                <div className='pl-4 pb-3 absolute'>
                    <p className='text-3xl font-bold'>{props.title}</p>
                    <p className='text-md'>{props.description}</p>
                </div>
            </div>
    </motion.div>
    </>
    
  )
  
}

export default ComponentCard
