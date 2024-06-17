import Image from 'next/image'
import React from 'react'

function Ourwork() {
  return (
    <section className='py-5'>
      <div className='max_width'>
      <div>
        <h2 className='text-center text-4xl font-bold text-yellow-500 mb-10'>Working Process</h2>
      </div>
      <div>
        <Image src="/images/chart.png" alt="alt" width={1300} height={500} />
      </div>
      </div>
    </section>
  )
}

export default Ourwork