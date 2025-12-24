import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const RSVPSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "",
    dietary: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: "Your RSVP has been received. We can't wait to celebrate with you!",
    });
    setFormData({
      name: "",
      email: "",
      guests: "1",
      attending: "",
      dietary: "",
    });
  };

  return (
    <section
      id="rsvp"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-card"
    >
      <div className="container mx-auto max-w-xl">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Kindly Respond
          </p>
          
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
            RSVP
          </h2>
          
          <p className="font-serif text-lg text-muted-foreground italic">
            Please respond by May 1, 2025
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <label className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-2">
              Full Name
            </label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background border-border focus:border-sage transition-colors"
              required
            />
          </div>

          <div>
            <label className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-2">
              Email Address
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background border-border focus:border-sage transition-colors"
              required
            />
          </div>

          <div>
            <label className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-2">
              Will You Attend?
            </label>
            <div className="flex gap-4">
              {["Joyfully Accept", "Regretfully Decline"].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="attending"
                    value={option}
                    checked={formData.attending === option}
                    onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                    className="w-4 h-4 text-sage border-border focus:ring-sage"
                    required
                  />
                  <span className="font-sans text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-2">
              Number of Guests
            </label>
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full h-10 px-3 bg-background border border-border rounded-sm focus:border-sage focus:outline-none transition-colors font-sans text-sm"
            >
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-2">
              Dietary Restrictions (Optional)
            </label>
            <Input
              type="text"
              value={formData.dietary}
              onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
              placeholder="e.g., Vegetarian, Gluten-free"
              className="bg-background border-border focus:border-sage transition-colors"
            />
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full mt-8">
            Send RSVP
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RSVPSection;
