import React from 'react'
import ComponentCard from './ComponentCard'

const response = await fetch("src/electronic-parts.json");
const data = await response.json();

const Components = () => {
  return (
    <div className='px-10 pb-20 min-h-screen'>
        <div className=' w-[100%] grid grid-cols-5 justify-items-center gap-y-5'>
            {
                data.map(comp => 
                    <ComponentCard title={comp.name} description={comp.description} img={comp.img} />
                )
            }

        </div>

    </div>
  )
}

export default Components
