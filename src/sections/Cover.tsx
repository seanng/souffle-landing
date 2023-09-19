import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function Cover() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
        <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Human-like chatbots for your business.
        </h1>
        <p className="mt-6 text-xl text-neutral-600">
          We are dedicated to creating AI chatbots that enhance user experiences
          and drive business growth.
        </p>
      </FadeIn>
    </Container>
  )
}
