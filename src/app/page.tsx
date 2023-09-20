import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { PageIntro } from '@/components/PageIntro'
import { Button } from '@/components/Button'
import { useId } from 'react'
import { Offices } from '@/components/Offices'
import { Border } from '@/components/Border'
import { SocialMedia } from '@/components/SocialMedia'
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { ContactInfo } from '@/components/ContactInfo'
import { GridList, GridListItem } from '@/components/GridList'
import { ContactForm } from '@/components/ContactForm'

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we’ve
              used for the past six years.
            </ListItem>
            <ListItem title="Custom content management">
              At Studio we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

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

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

// function ContactForm() {
//   return (
//     <FadeIn className="lg:order-last">
//       <form>
//         <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
//           <TextInput label="Name" name="name" autoComplete="name" />
//           <TextInput
//             label="Email"
//             type="email"
//             name="email"
//             autoComplete="email"
//           />
//           <TextInput
//             label="Company (optional)"
//             name="company"
//             autoComplete="organization"
//           />
//           <TextInput
//             label="Phone (optional)"
//             type="tel"
//             name="phone"
//             autoComplete="tel"
//           />
//           {/* make it text area */}
//           <TextInput label="Message" name="message" />
//         </div>
//         <Button type="submit" className="mt-10">
//           Let’s work together
//         </Button>
//       </form>
//     </FadeIn>
//   )
// }

function ContactDetails() {
  return (
    <FadeIn>
      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Careers', 'careers@studioagency.com'],
            ['Press', 'press@studioagency.com'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

function Cover() {
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

function WhyUs() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        title="Transform your Brand from Ordinary to Extraordinary"
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
              your business at any time.
            </p>
          </GridListItem>
          <GridListItem title="Instant 24/7 Customer Support" invert>
            <p>
              Tired of answering the same questions over and over again? Let a
              chatbot handle it for you. It can answer at any time in any
              language. It might even do a better job than you can!
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

function Contact() {
  return (
    <FadeIn>
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h1>
                <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                  Let’s work together
                </span>
              </h1>
              <p className="my-6 text-lg leading-8 text-gray-600">
                Fill out the form or email us at hello@chatsouffle.com and we’ll
                get back to you ASAP.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </FadeIn>
  )
}

export default async function Home() {
  return (
    <>
      <Cover />
      <WhyUs />
      <Contact />

      {/* <CaseStudies caseStudies={caseStudies} /> */}
      {/* 
      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial> */}

      {/* <Services /> */}

      {/* <ContactSection /> */}
    </>
  )
}
