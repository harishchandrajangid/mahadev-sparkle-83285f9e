import heroImage from "@/assets/hero-jewellery.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Mahadev Jewellers - Exquisite Indian Gold Jewellery" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-24">
        <div className="max-w-2xl space-y-8">
          <p className="font-body text-xl text-primary tracking-[0.3em] uppercase opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Since Generations
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <span className="text-gold-gradient">Timeless</span>
            <br />
            <span className="text-foreground">Indian Jewellery</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-lg opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Handcrafted with devotion — exquisite gold, kundan & custom jewellery from the heart of Jodhpur.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="#collections"
              className="bg-gold-gradient text-primary-foreground px-8 py-4 font-body text-lg font-semibold tracking-wide hover:opacity-90 transition-opacity rounded"
            >
              View Collections
            </a>
            <a
              href="#contact"
              className="border border-primary/40 text-primary px-8 py-4 font-body text-lg font-semibold tracking-wide hover:bg-primary/10 transition-colors rounded"
            >
              Visit Our Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
