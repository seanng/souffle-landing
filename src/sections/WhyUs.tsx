import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { SectionIntro } from '@/components/SectionIntro'

export function WhyUs() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        title="Transform Your Brand From Ordinary to Extraordinary"
        eyebrow="Why chatbots?"
        // title="Balance your passion with your passion for life."
        invert
      >
        {/* <p>
          We are a group of like-minded people who share the same core values.
        </p> */}
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Transform Your Brand Image" invert>
            <p>
              We don’t care when our team works just as long as they are working
              every waking second.
            </p>
          </GridListItem>
          <GridListItem title="Supercharge Customer Experience" invert>
            <p>
              You never know what someone is going through at home and we make
              sure to never find out.
            </p>
          </GridListItem>
          <GridListItem title="Convert Visitors Into Customers" invert>
            <p>
              Our team has been with us since the beginning because none of them
              are allowed to have LinkedIn profiles.
            </p>
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}
