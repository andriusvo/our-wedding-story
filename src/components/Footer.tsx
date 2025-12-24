const Footer = () => {
  return (
    <footer className="py-16 px-6 text-center">
      <div className="container mx-auto max-w-2xl">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <span className="font-serif text-3xl md:text-4xl font-light text-charcoal">A & I</span>
          <span className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </div>

        <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground">
          Rugpjūčio 7, 2026 · Bokšto skveras
        </p>
      </div>
    </footer>
  );
};

export default Footer;
