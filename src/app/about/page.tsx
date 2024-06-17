import React from 'react'
import { AboutCommon } from '../Components'
import MissionSection from './MissionSection'
import Journey from './Journey'

function page() {
  return (
    <main>
        <AboutCommon showButton={false}/>
        <MissionSection/>
        <Journey/>
    </main>
  )
}

export default page