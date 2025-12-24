import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  const weddingDate = new Date("2025-06-15T16:00:00");

  const scrollToRSVP = () => {
    const element = document.getElementById("rsvp");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Wedding flowers and fabric"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden md:block z-10" />
      <div className="absolute top-20 right-10 w-px h-32 bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden md:block z-10" />
      
      <div className="text-center animate-fade-in relative z-10">
        <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-taupe mb-8">
          We're Getting Married
        </p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-4 text-charcoal">
          Emma & James
        </h1>
        
        <div className="flex items-center justify-center gap-4 my-8">
          <span className="w-12 md:w-24 h-px bg-gold/50" />
          <span className="font-serif text-lg md:text-xl italic text-taupe">forever begins</span>
          <span className="w-12 md:w-24 h-px bg-gold/50" />
        </div>
        
        <p className="font-serif text-2xl md:text-3xl font-light tracking-wide text-charcoal/90 mb-4 animate-fade-in-delay">
          June 15, 2025
        </p>
        
        <p className="font-sans text-sm tracking-widest uppercase text-taupe animate-fade-in-delay-2 mb-10">
          The Grand Estate, Napa Valley
        </p>

        {/* Countdown Timer */}
        <div className="animate-fade-in-delay-2 mb-10">
          <CountdownTimer targetDate={weddingDate} />
        </div>
        
        <Button
          variant="elegant"
          size="lg"
          className="animate-fade-in-delay-3"
          onClick={scrollToRSVP}
        >
          RSVP Now
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-delay-3 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
