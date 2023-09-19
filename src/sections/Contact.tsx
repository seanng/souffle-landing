import { Button } from '@/components/Button'
import { ContactInfo } from '@/components/ContactInfo'
import { FadeIn } from '@/components/FadeIn'
import { FormInputField } from '@/components/FormInputField'
import { FormTextAreaField } from '@/components/FormTextAreaField'
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

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

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Fill out the form or email us at hello@chatsouffle.com and we’ll
                get back to you ASAP.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                {/* <ContactInfo
                icon={BuildingOffice2Icon}
                label="Address"
                value="545 Mavis Island\nChicago, IL 99191"
              /> */}
                {/* <ContactInfo
                icon={PhoneIcon}
                label="Telephone"
                value="+1 (555) 234-5678"
                href="tel:+1 (555) 234-5678"
              /> */}
                {/* <ContactInfo
                icon={EnvelopeIcon}
                label="Email"
                value="hello@example.com"
                href="mailto:hello@example.com"
              /> */}
              </dl>
            </div>
          </div>
          <form className="px-6 pb-24 sm:pb-32 lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <FormInputField
                  label="Name"
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                />
                <FormInputField
                  label="Company"
                  type="text"
                  name="company-name"
                  id="company-name"
                  autoComplete="company-name"
                />
                <FormInputField
                  label="Email"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="sm:col-span-2"
                />
                <FormInputField
                  label="Phone number (optional)"
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="sm:col-span-2"
                />
                <FormTextAreaField
                  label="Message"
                  name="message"
                  id="message"
                  rows={4}
                  className="sm:col-span-2"
                />
              </div>
              <div className="mt-4 flex justify-end lg:mt-8">
                <Button type="submit" className="mt-10">
                  Let’s work together
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </FadeIn>
  )
}
