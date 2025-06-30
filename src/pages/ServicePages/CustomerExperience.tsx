import React from 'react'
import { HomeContainer } from '../HomePage/HomePage.styled'
import Hero from '../../components/ComponentsService/ServiceHero/Hero'
import Key from '../../components/ComponentsService/KeyCapabilities/Key'

const CustomerExperience: React.FC = () => {
  return (
    <HomeContainer>
      <Hero/>
      <Key/>
    </HomeContainer>
  )
}

export default CustomerExperience