import { FadeIn } from '@/components/FadeIn'
import { ContactForm } from '@/components/ContactForm'

export function Contact() {
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
