import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-lg text-primary tracking-[0.3em] uppercase mb-4">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gold-gradient mb-4">Visit Our Store</h2>
          <div className="divider-ornament max-w-xs mx-auto">
            <span className="text-primary text-2xl">✦</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">Our Address</h3>
                <p className="font-body text-lg text-muted-foreground">
                  B-77, Kamla Nehru Nagar,<br />
                  Chopasani Road, Jodhpur - 342003<br />
                  Rajasthan, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:9414301715" className="font-body text-lg text-primary hover:text-gold-light transition-colors">
                  +91 94143 01715
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">Email</h3>
                <a href="mailto:sunilvermaa7777@gmail.com" className="font-body text-lg text-primary hover:text-gold-light transition-colors">
                  sunilvermaa7777@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">Store Hours</h3>
                <p className="font-body text-lg text-muted-foreground">
                  Mon - Sat: 10:00 AM - 8:00 PM<br />
                  Sunday: 11:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/919414301715?text=Hello%20Mahadev%20Jewellers%2C%20I%20am%20interested%20in%20your%20jewellery%20collection."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-600 text-foreground px-6 py-3 rounded font-body text-lg font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="rounded overflow-hidden border border-gold/20 h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.5!2d72.98!3d26.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE2JzQ4LjAiTiA3MsKwNTgnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mahadev Jewellers Location - Jodhpur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
