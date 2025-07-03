import React from 'react'
import { HomeContainer } from '../HomePage/HomePage.styled'
import Hero from '../../components/ComponentsService/ServiceHero/Hero'
import Key from '../../components/ComponentsService/KeyCapabilities/Key'
import LivePrepInsights from '../../components/ComponentsService/LivePrepInsights/LivePrepInsights'
import StepByStepGuidance from '../../components/ComponentsService/StepByStepGuidance/StepByStepGuidance'

const CustomerExperience: React.FC = () => {
  return (
    <HomeContainer>
      <Hero/>
      <Key/>
      <LivePrepInsights/>
      <StepByStepGuidance/>
    </HomeContainer>
  )
}

export default CustomerExperience