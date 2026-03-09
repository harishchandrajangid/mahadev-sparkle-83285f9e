import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-gold/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-gold-gradient mb-4">Mahadev Jewellers</h3>
            <p className="font-body text-muted-foreground">
              Crafting timeless Indian jewellery with devotion and precision, from the royal city of Jodhpur.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2 font-body text-muted-foreground">
              <a href="#home" className="block hover:text-primary transition-colors">Home</a>
              <a href="#collections" className="block hover:text-primary transition-colors">Collections</a>
              <a href="#about" className="block hover:text-primary transition-colors">About Us</a>
              <a href="#contact" className="block hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3 font-body text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>B-77, Kamla Nehru Nagar, Jodhpur</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:9414301715" className="hover:text-primary transition-colors">+91 94143 01715</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:sunilvermaa7777@gmail.com" className="hover:text-primary transition-colors text-sm">sunilvermaa7777@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gold/10 pt-6 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mahadev Jewellers. All rights reserved. | Jodhpur, Rajasthan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
