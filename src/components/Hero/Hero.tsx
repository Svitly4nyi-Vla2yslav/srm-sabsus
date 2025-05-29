import React from 'react'
import { HeroInnovative, HeroWrapper, SpanUnicorn } from './Hero.styled'

const Hero: React.FC = () => {
  return (
    <HeroWrapper>
        <HeroInnovative>
            Innovative Solutions <SpanUnicorn>🦄</SpanUnicorn>
        </HeroInnovative>
    </HeroWrapper>
  )
}

export default Hero