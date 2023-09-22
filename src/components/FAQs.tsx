'use client'

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'

type Faq = {
  question: string
  answer: string
}

const faqs: Faq[] = [
  {
    question: 'What is ChatSouffle?',
    answer: `ChatSouffle is a platform that allows you to create a chatbot for your business. We provide a simple interface to create a chatbot that can be used on your website, Facebook Messenger, and more.`,
  },
  {
    question: 'Why should I use ChatSouffle?',
    answer: `ChatSouffle is the easiest way to create a chatbot for your business. We provide a simple interface to create a chatbot that can be used on your website, Facebook Messenger, and more.`,
  },
  {
    question: 'How do I get started?',
    answer: `To get started, simply sign up for an account and create your first chatbot. You can then add your chatbot to your website, Facebook Messenger, and more.`,
  },
  {
    question: 'How much does it cost?',
    answer: `ChatSouffle is free to use for up to 100 users. If you need more users, you can upgrade to a paid plan.`,
  },
]

export function FAQs() {
  return (
    <div className="rounded-4xl bg-neutral-950 py-24 lg:py-32">
      <SectionIntro
        title="Frequently Asked Questions"
        // eyebrow="How can a chatbot help your business?"
        invert
      >
        <p>
          Can’t find the answer you’re looking for? Email us at
          hello@chatsouffle.com!
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-2">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <strong className="font-display text-lg font-semibold leading-7 tracking-tight text-white">
                        {faq.question}
                      </strong>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-neutral-300">{faq.answer}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </Container>
    </div>
  )
}
