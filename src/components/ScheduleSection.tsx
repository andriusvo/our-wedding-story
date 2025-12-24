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
      time: "3:30 PM",
      event: "Guest Arrival",
      description: "Welcome drinks and mingling in the garden",
    },
    {
      time: "4:00 PM",
      event: "Ceremony",
      description: "Exchange of vows in the vineyard gazebo",
    },
    {
      time: "5:00 PM",
      event: "Cocktail Hour",
      description: "Hors d'oeuvres and refreshments on the terrace",
    },
    {
      time: "6:30 PM",
      event: "Dinner Reception",
      description: "A celebration with dinner, toasts, and cake",
    },
    {
      time: "8:30 PM",
      event: "Dancing & Celebration",
      description: "Music, dancing, and merriment under the stars",
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
            Wedding Day
          </p>
          
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            The Schedule
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-sage/30 transform md:-translate-x-1/2" />

          {schedule.map((item, index) => (
            <div
              key={item.event}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-sage rounded-full transform md:-translate-x-1/2 -translate-x-1" />
              
              {/* Time - left side on desktop */}
              <div className="md:w-1/2 md:pr-12 md:text-right pl-8 md:pl-0">
                <span className="font-sans text-sm tracking-widest text-sage font-medium">
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
