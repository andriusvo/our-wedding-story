import { useEffect, useRef, useState } from "react";
import coupleImage from "@/assets/couple.jpg";

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
      <div className="container mx-auto max-w-5xl">
        <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-champagne/50 to-blush/50 rounded-sm -z-10" />
            <img
              src={coupleImage}
              alt="Emma and James"
              className="w-full aspect-square object-cover rounded-sm shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/30 rounded-sm -z-10" />
          </div>

          {/* Content */}
          <div className="text-center md:text-left order-1 md:order-2">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-taupe mb-6">
              Our Story
            </p>
            
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 text-charcoal">
              A Love Story
            </h2>
            
            <div className="w-16 h-px bg-gold/50 mb-8 mx-auto md:mx-0" />
            
            <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/80 mb-6">
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
      </div>
    </section>
  );
};

export default OurStorySection;
