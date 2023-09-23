import { Blockquote } from '@/components/Blockquote'
import { ProcessSection } from '@/components/ProcessSection'
import imageDevelop from '@/images/develop.jpg'

export function ProcessStep2() {
  return (
    <ProcessSection title="Build" image={{ src: imageDevelop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Crafting a successful AI chatbot is akin to sculpting a masterpiece—it
          requires vision, precision, and iterative refinement. Our journey from
          design to deployment is marked by three critical phases: Training,
          Development and Testing.
        </p>
        <p>
          In the{' '}
          <strong className="font-semibold text-neutral-950">Training</strong>{' '}
          phase, we require your assistance in providing us with past data to
          educate our chatbot so it understands the nuances of your business. We
          have a team of highly skilled data scientists adept at fine-tuning
          pre-built language models (LLMs) so our chatbot can respond to user
          queries with greater accuracy and relevance.
        </p>

        <p>
          Transitioning to{' '}
          <strong className="font-semibold text-neutral-950">
            Development
          </strong>
          , we begin crafting a chatbot that not only aligns with your brand
          voice but also addresses the unique challenges and needs of your
          business. We blend aesthetics with functionality, ensuring your
          chatbot is both engaging and effective. We also create fallback
          answers to prevent the chatbot from hallucinating, so your chatbot is
          always ready to assist your customers honestly and accurately.
        </p>
        <p>
          Finally, we move into the{' '}
          <strong className="font-semibold text-neutral-950">Testing</strong>{' '}
          phase, where we put the chatbot through its paces to ensure it is
          ready for deployment. We test the chatbot&apos;s functionalities,
          features, and responses to ensure it is performing as intended. We
          also conduct user testing to gauge the chatbot&apos;s effectiveness in
          addressing user queries and concerns. Once the chatbot has passed our
          rigorous testing, it is ready to be deployed.
        </p>
      </div>
    </ProcessSection>
  )
}
