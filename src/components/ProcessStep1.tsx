import { TagList, TagListItem } from '@/components/TagList'
import imagPlan from '@/images/plan.jpg'
import { ProcessSection } from '@/components/ProcessSection'

export function ProcessStep1() {
  return (
    <ProcessSection title="Plan" image={{ src: imagPlan }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          There is no one-size-fits-all chatbot solution. Every business, with
          its unique challenges and aspirations, requires a tailored approach.
        </p>
        <p>
          Our process kicks off with a deep dive into understanding your
          business. During this phase, we aim to grasp the nuances of your
          brand, target audience, and business objectives. We will also map out
          your customers’ conversation flows and buying journey so that we can
          elevate their overall browsing experience.
        </p>
        <p>
          We will then tailor an action plan for developing the chatbot based on
          the initial consultation. This includes determining the chatbot&apos;s
          purpose, functionalities, key features, and required training
          material. Additionally, we will also provide you with a detailed
          timeline and cost estimate for the project.
        </p>
      </div>
    </ProcessSection>
  )
}
