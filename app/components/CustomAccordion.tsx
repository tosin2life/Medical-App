import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string | React.ReactNode;
}

export default function CustomAccordion({ FAQS }: { FAQS: FAQProps[] }) {
  return (
    <Accordion type="single" collapsible>
      {FAQS.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className="text-lg font-medium">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-base">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
