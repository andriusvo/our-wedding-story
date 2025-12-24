const Footer = () => {
  return (
    <footer className="py-16 px-6 text-center">
      <div className="container mx-auto max-w-2xl">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-16 h-px bg-sage/30" />
          <span className="font-serif text-3xl md:text-4xl font-light">E & J</span>
          <span className="w-16 h-px bg-sage/30" />
        </div>
        
        <p className="font-serif text-lg italic text-muted-foreground mb-8">
          "Two souls, one heart"
        </p>
        
        <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground">
          June 15, 2025 · Napa Valley, California
        </p>
        
        <p className="font-sans text-xs text-muted-foreground/60 mt-12">
          Made with love for our special day
        </p>
      </div>
    </footer>
  );
};

export default Footer;
