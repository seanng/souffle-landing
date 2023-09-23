import { ProcessSection } from '@/components/ProcessSection'
import { List, ListItem } from '@/components/List'
import imageAnalyze from '@/images/analyze.jpg'

export function ProcessStep3() {
  return (
    <ProcessSection title="Deliver" image={{ src: imageAnalyze, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The creation of your chatbot marks a significant milestone, but its
          real value is realized only after it has been deployed and integrated
          with your website, so it feels like a natural extension of your
          digital ecosystem, rather than an add-on. This seamless integration
          means your visitors can immediately benefit from the chatbot’s
          capabilities without any jarring changes to their user experience.
        </p>

        <p>
          But our work doesn’t end there. We want to ensure your chatbot
          delivers an unparalleled user experience and drives tangible results
          for your business. We’re committed to standing by you and offering
          unwavering support.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Our services after delivery
      </h3>
      <List className="mt-8">
        <ListItem title="Launch & Monitoring">
          As your chatbot begins its interactions, we’re right there, analyzing
          its performance, making necessary adjustments, and identifying areas
          for refinements.
        </ListItem>
        <ListItem title="Optimization">
          As feedback streams in and technology progresses, we fine-tune,
          ensuring your chatbot consistently delivers an unparalleled user
          experience and remains at the cutting edge of AI-driven customer
          engagement.
        </ListItem>
      </List>
    </ProcessSection>
  )
}
