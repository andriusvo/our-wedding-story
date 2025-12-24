import { useEffect, useRef, useState } from "react";

const OurStorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="our-story"
      ref={sectionRef}
      className="py-24 md:py-32 px-6"
    >
      <div className="container mx-auto max-w-3xl text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Our Story
          </p>
          
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-12">
            A Love Story
          </h2>
          
          <div className="w-16 h-px bg-sage/50 mx-auto mb-12" />
          
          <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/80 mb-8">
            What began as a chance encounter at a coffee shop has blossomed into a love 
            that knows no bounds. Through laughter and tears, adventures near and far, 
            we have found in each other a partner for life.
          </p>
          
          <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/80">
            Now, we invite you to join us as we celebrate the next chapter of our journey — 
            surrounded by the people who have shaped our lives and witnessed our love grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
