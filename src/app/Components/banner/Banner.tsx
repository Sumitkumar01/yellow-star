import React from 'react'

function Banner({ imgUrel,title}:{imgUrel:string,title:string}) {
  return (
    <section>
      <div className='max-w-[1900px] mx-auto bg-cover bg-no-repeat bg-center h-[400px] flex items-center justify-center' style={{ backgroundImage: `url(${imgUrel})` }} >
        <h1 className='text-4xl font-bold text-center mt-10 mb-5 text-white bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text'>{title}</h1>
      </div>
    </section>
  )
}

export default Banner