import { PageIntro } from '@/components/PageIntro'
import { ProcessStep1 } from '@/components/ProcessStep1'
import { ProcessStep2 } from '@/components/ProcessStep2'
import { ProcessStep3 } from '@/components/ProcessStep3'

export function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          Our meticulously structured workflow is designed to ensure your
          chatbot delivers unparalleled value. From initial consultation to
          ongoing optimization, we&apos;re with you every step of the way,
          turning visions into tangible results.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <ProcessStep1 />
        <ProcessStep2 />
        <ProcessStep3 />
      </div>
    </>
  )
}
