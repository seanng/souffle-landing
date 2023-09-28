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
    question: 'Why should we have a chatbot?',
    answer: `A chatbot allows automation of customer support and leads generation.  A good chatbot can converse like a human being, resolving many questions that a customer might usually ask, and also potentially leading it to become a future sale.  All of this, without the need of an actual human being.`,
  },
  {
    question:
      'How is ChatSouffle different from other chatbot providers or chatbot agencies?',
    answer: `First of all, many chatbot providers or freelancers that advertise themselves as “AI chatbot builders” aren’t actually AI chatbot providers, but rather decision tree chatbot providers.  AI chatbots are much more fluid and natural than decision tree chatbots, whereas decision tree chatbots are much more robotic and structured.  Secondly, many AI chatbot providers only ensure that the chatbot works, whereas with ChatSouffle, we ensure that your chatbot is seamless with your customers’ digital user experience and branding.`,
  },
  {
    question: 'Why should we use an AI chatbot over a standard chatbot?',
    answer: `With an AI chatbot, you have more control over brand voicing, and more creative and natural responses, and more able to adapt to varied user queries.  With a decision tree chatbot, if the user does not follow the “script” of the pre-programmed conversation flow, the chatbot will not be able to function properly.  With an AI chatbot, it imitates the way humans gain knowledge through the process of deep learning, allowing an AI chatbot to handle more varied user queries.`,
  },
  {
    question: 'How do you handle hallucinations?',
    answer: `At the moment, there is no 100% guarantee that AI chatbots can avoid all types of hallucination, as hallucination issues can arise depending on the training data and model.  Our agency provides and builds chatbots that are more equipped with robust data validation algorithms that minimize such incidents in comparison with other AI chatbot agencies and providers.  Secondly, we can also provide the usage of GPT-4 for your chatbots, which is designed to better understand context and produce more relevant answers, which could reduce hallucinations.  If your users encounter hallucinations, you can always pre-train your chatbots to further reduce such incidents occurring.`,
  },
  {
    question: 'Is it possible to see our chat logs with our customers?',
    answer: 'Yes.',
  },
  {
    question: 'How can I manage and train the AI chatbot afterwards?',
    answer: `You can manage and train your ChatSouffle through signing into our portal.`,
  },
  {
    question:
      'How much does it cost and how long does it take to develop a chatbot for my business?',
    answer: `It all depends on how sophisticated you want your AI chatbot to be. We can provide standard chatbot models for you or create more customised chatbot models for you.  The more complex the project, the higher the pricing and the longer the turnaround time. But most importantly, we do not sacrifice quality just to get things done.`,
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
