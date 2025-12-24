import { useEffect, useRef, useState } from "react";
import { MapPin, Clock, Calendar } from "lucide-react";

const DetailsSection = () => {
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

  const details = [
    {
      icon: Calendar,
      title: "The Date",
      info: "Sunday, June 15, 2025",
      description: "Please mark your calendars",
    },
    {
      icon: Clock,
      title: "The Time",
      info: "Ceremony begins at 4:00 PM",
      description: "Reception to follow",
    },
    {
      icon: MapPin,
      title: "The Venue",
      info: "The Grand Estate",
      description: "1234 Vineyard Lane, Napa Valley, CA 94558",
    },
  ];

  return (
    <section
      id="details"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-card"
    >
      <div className="container mx-auto max-w-5xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Wedding Details
          </p>
          
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            Join Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {details.map((detail, index) => (
            <div
              key={detail.title}
              className={`text-center transition-all duration-1000 delay-${index * 200} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage-light flex items-center justify-center">
                <detail.icon className="w-6 h-6 text-sage" />
              </div>
              
              <h3 className="font-serif text-2xl font-light mb-3">
                {detail.title}
              </h3>
              
              <p className="font-sans text-sm tracking-wide text-foreground mb-2">
                {detail.info}
              </p>
              
              <p className="font-sans text-xs tracking-wide text-muted-foreground">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
