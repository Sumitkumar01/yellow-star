import React from 'react'
import { AboutCommon, Banner } from '../Components'
import MissionSection from './MissionSection'
import Journey from './Journey'

function page() {
  return (
    <main>
      <Banner imgUrel='/about-us.webp' title='About Us' />
      <AboutCommon showButton={false} />
      <MissionSection />
      <Journey />
    </main>
  )
}

export default page