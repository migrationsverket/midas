import { Accordion, AccordionItem, Breadcrumb, Breadcrumbs, Heading, Text } from '@midas-ds/components'
import Link from 'next/link'

export default function Help() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--midas-space-medium)' }}>
      <Breadcrumbs>
        <Breadcrumb><Link href='/'>Home</Link></Breadcrumb>
        <Breadcrumb>Help</Breadcrumb>
      </Breadcrumbs>

      <Heading level={1}>Help & support</Heading>

      <Accordion isContained allowsMultipleExpanded>
        <AccordionItem headingLevel='h2' title='How long does processing take?'>
          <Text>
            Processing times vary depending on the type of permit and your country of origin. Residence permits typically take 3–12 months, work permits 1–3 months, and study permits 1–2 months. You will receive a notification when a decision has been made.
          </Text>
        </AccordionItem>

        <AccordionItem headingLevel='h2' title='What documents do I need to submit?'>
          <Text>
            You will generally need a valid passport or travel document, passport-sized photographs, proof of accommodation in Sweden (e.g. rental contract), and documentation relevant to your permit type — such as an employment contract for a work permit or an acceptance letter for a study permit.
          </Text>
        </AccordionItem>

        <AccordionItem headingLevel='h2' title='Can I work while my application is being processed?'>
          <Text>
            Whether you can work during the processing period depends on your permit type and whether you have been granted AT-UND (exemption from the work permit requirement). Please check the conditions attached to your current permit or contact us for clarification.
          </Text>
        </AccordionItem>

        <AccordionItem headingLevel='h2' title='How do I check the status of my application?'>
          <Text>
            You can check your application status at any time by logging in to the portal and navigating to Sent applications. If you have questions, you can also call our service centre on 0771-235 235, open Monday–Friday 09:00–17:00.
          </Text>
        </AccordionItem>

        <AccordionItem headingLevel='h2' title='What happens if my application is rejected?'>
          <Text>
            If your application is rejected, you will receive a written decision explaining the reasons. You have the right to appeal the decision to the Migration Court within three weeks of receiving it. Do not remain in Sweden after your current permit expires while awaiting an appeal outcome unless you have been granted a stay of enforcement.
          </Text>
        </AccordionItem>

        <AccordionItem headingLevel='h2' title='Can I extend my existing permit?'>
          <Text>
            Yes. You should apply for an extension at least two months before your current permit expires. Applying on time means you are generally allowed to remain in Sweden while the extension is being processed. Do not wait until after your permit has expired — overstaying can affect future applications.
          </Text>
        </AccordionItem>

        <AccordionItem headingLevel='h2' title='How do I update my contact details?'>
          <Text>
            You can update your email address and phone number in your profile page. For changes to your registered address, please contact your local population registration office (Skatteverket). Keeping your contact details up to date ensures you receive all correspondence from us.
          </Text>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
