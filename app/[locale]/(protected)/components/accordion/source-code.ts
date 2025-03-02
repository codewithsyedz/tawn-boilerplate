export const basicAccordion=`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const BasicAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          How does TawnCode work?
        </AccordionTrigger>
        <AccordionContent>
          Journalist call this critical, introductory section the and when bridge properly executed,
          it is the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Where I can learn more about using TawnCode?</AccordionTrigger>
        <AccordionContent>
          Journalist call this critical, introductory section the and when bridge properly executed,
          it is the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Why TawnCode is so important?</AccordionTrigger>
        <AccordionContent>
          Journalist call this critical, introductory section the and when bridge properly executed,
          it is the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default BasicAccordion;`