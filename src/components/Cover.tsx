import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

/**
 * 1. Cover (v1)
 * 2. Benefits (v1)
 * 3. Explain (v3) (education)
 *     - What is a chatbot?
 *    - Why LLM chatbots?
 * 4. Process (v2)
 *     1. Initial Consultation
 *     2.  Design
 * 5. Contact Form? (v1)
 * 6. FAQ (v2)
 */
export function Cover() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
        <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Is your business ready for the future?
          {/* Human-like chatbots for your business. */}
        </h1>
        <p className="mt-6 text-xl text-neutral-600">
          Create a <strong>lasting impression</strong> and experience{' '}
          <strong>explosive sales growth</strong> with personalized{' '}
          <strong>human-like chatbots </strong>
          for your business.
        </p>
      </FadeIn>
    </Container>
  )
}
