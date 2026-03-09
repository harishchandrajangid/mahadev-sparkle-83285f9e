import necklaceImg from "@/assets/collection-necklace.jpg";
import banglesImg from "@/assets/collection-bangles.jpg";
import earringsImg from "@/assets/collection-earrings.jpg";
import ringsImg from "@/assets/collection-rings.jpg";

const collections = [
  { name: "Necklace Sets", description: "Bridal & traditional kundan necklaces", image: necklaceImg },
  { name: "Bangles", description: "Rajasthani meenakari & gold bangles", image: banglesImg },
  { name: "Earrings", description: "Jhumka, chandbali & stud earrings", image: earringsImg },
  { name: "Rings", description: "Wedding bands & statement rings", image: ringsImg },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-lg text-primary tracking-[0.3em] uppercase mb-4">Our Treasure</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gold-gradient mb-4">Collections</h2>
          <div className="divider-ornament max-w-xs mx-auto">
            <span className="text-primary text-2xl">✦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((item) => (
            <div key={item.name} className="group relative overflow-hidden rounded bg-card border border-gold/10 hover:border-primary/40 transition-all duration-500">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-1">{item.name}</h3>
                <p className="font-body text-lg text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
