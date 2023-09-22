import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import { GridList, GridListItem } from '@/components/GridList'

export function WhyUs() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        title="Transform Your Brand from Ordinary to Extraordinary"
        eyebrow="How can a chatbot help your business?"
        invert
      >
        {/* <p>
              We are a group of like-minded people who share the same core values.
            </p> */}
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Steal the Spotlight" invert>
            <p>
              Impress visitors, customers and business partners with a highly
              conversational chatbot that can answer any question related to
              your business in any language.
            </p>
          </GridListItem>
          <GridListItem title="Instant 24/7 Customer Support" invert>
            <p>
              Tired of answering the same questions over and over again? Let a
              chatbot handle it for you. It can respond instantly and might even
              outdo your answers.
            </p>
          </GridListItem>
          <GridListItem title="Convert Visitors Into Customers" invert>
            <p>
              Don&apos;t let your website visitors slip away! Keep your audience
              hooked and browsing by immediately providing them with any
              information they are seeking.
            </p>
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}
