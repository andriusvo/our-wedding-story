import { useEffect, useRef, useState } from "react";

const ScheduleSection = () => {
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

  const schedule = [
    {
      time: "12:00",
      event: "Svečių atvykimas",
      description: "Pirmieji apsikabinimai, juokas, lengvi pokalbiai ir šventinės nuotaikos pajautimas.",
    },
    {
      time: "13:00",
      event: "Ceremonija",
      description: "Prasminga akimirka, kurioje netrūks šypsenų ir jaudulio.",
    },
    {
      time: "14:00",
      event: "Sveikinimai",
      description: "Šilti linkėjimai ir emocijos, kurios lieka ilgam.",
    },
    {
      time: "15:00",
      event: "Pietūs",
      description: "Skanaus maisto pertrauka, atsigaivinam ir pasikraunam energijos.",
    },
    {
      time: "16:00",
      event: "Muzikinė sesija",
      description: "Išlaisvinam balsus, judesį ir gerą nuotaiką.",
    },
    {
      time: "20:00",
      event: "Pabaiga",
      description: "Paskutiniai tostai, šypsenos ir visi kartu keliaujame namo.",
    },
  ];

  return (
    <section
      id="schedule"
      ref={sectionRef}
      className="py-24 md:py-32 px-6"
    >
      <div className="container mx-auto max-w-3xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Vestuvių diena
          </p>
          
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            Dienos planas
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-champagne/50 to-gold/50 transform md:-translate-x-1/2" />

          {schedule.map((item, index) => (
            <div
              key={item.event}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-gradient-to-br from-gold to-champagne rounded-full transform md:-translate-x-1/2 -translate-x-1 shadow-sm" />
              
              {/* Time - left side on desktop */}
              <div className="md:w-1/2 md:pr-12 md:text-right pl-8 md:pl-0">
                <span className="font-sans text-sm tracking-widest text-gold font-medium">
                  {item.time}
                </span>
              </div>
              
              {/* Content - right side on desktop */}
              <div className="md:w-1/2 md:pl-12 pl-8 mt-2 md:mt-0">
                <h3 className="font-serif text-xl md:text-2xl font-light mb-1">
                  {item.event}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
