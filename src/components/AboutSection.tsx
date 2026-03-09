import craftsmanshipImg from "@/assets/craftsmanship.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-lg text-primary tracking-[0.3em] uppercase mb-4">Our Legacy</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gold-gradient mb-8">About Mahadev Jewellers</h2>
            <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                Nestled in the vibrant city of Jodhpur, Mahadev Jewellers has been a trusted name in custom Indian jewellery for generations. We specialize in crafting bespoke gold ornaments that blend traditional Rajasthani artistry with contemporary elegance.
              </p>
              <p>
                Every piece at Mahadev Jewellers tells a story — of heritage, devotion, and unmatched craftsmanship. From bridal sets to everyday elegance, our master artisans pour their heart into every design.
              </p>
              <p>
                We take pride in offering hallmarked gold jewellery with transparent pricing and a commitment to purity that has earned the trust of thousands of families across Rajasthan.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { number: "25+", label: "Years of Trust" },
                { number: "10K+", label: "Happy Families" },
                { number: "100%", label: "Hallmarked Gold" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="font-body text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded overflow-hidden border border-gold/20">
              <img src={craftsmanshipImg} alt="Master craftsman at Mahadev Jewellers" className="w-full h-[500px] object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-primary/40 rounded-bl" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/40 rounded-tr" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
