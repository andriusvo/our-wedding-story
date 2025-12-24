import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const faqs = [
    {
      question: "Dovanos",
      answer: "Kadangi gėlės nuvysta, o prisiminimai (ir geras vynas) išlieka – vietoj gėlių mielai priimsime vyno butelį."
    },
    {
      question: "Parkavimas",
      answer: "Rekomenduojame atvykti be automobilių, nes šventės vietoje nėra galimybės patogiai pasistatyti."
    },
    {
      question: "Atvykimas",
      answer: "Ceremonija prasidės lygiai 13:00. Rekomenduojame atvykti bent 15–20 minučių anksčiau, kad spėtumėte patogiai įsitaisyti."
    },
    {
      question: "Dalyvavimas",
      answer: "Prašome apie savo dalyvavimą pranešti iki birželio 1 dienos, kad galėtume tinkamai suplanuoti šventę."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
      <section
          id="faq"
          ref={sectionRef}
          className="py-24 md:py-32 px-6 bg-card"
      >
        <div className="container mx-auto max-w-2xl">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
              Naudinga informacija
            </h2>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Accordion
                type="multiple"
                className="w-full space-y-4"
                defaultValue={faqs.map((_, index) => `item-${index}`)}
            >
              {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                    <AccordionTrigger className="font-serif text-lg hover:no-underline hover:text-sage transition-colors text-left py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-sans text-muted-foreground leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
  );
};

export default FAQSection;
