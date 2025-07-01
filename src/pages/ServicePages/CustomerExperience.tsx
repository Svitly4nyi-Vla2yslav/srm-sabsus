import React from 'react'
import { HomeContainer } from '../HomePage/HomePage.styled'
import Hero from '../../components/ComponentsService/ServiceHero/Hero'
import Key from '../../components/ComponentsService/KeyCapabilities/Key'
import LivePrepInsights from '../../components/ComponentsService/LivePrepInsights/LivePrepInsights'

const CustomerExperience: React.FC = () => {
  return (
    <HomeContainer>
      <Hero/>
      <Key/>
      <LivePrepInsights/>
    </HomeContainer>
  )
}

export default CustomerExperience