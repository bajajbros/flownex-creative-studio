import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Gaurav G.",
    role: "Career Coach",
    text: "Every detail was handled perfectly — transitions, color correction, everything. My video looks truly professional now.",
  },
  {
    name: "Madhav J.",
    role: "Tech Creator",
    text: "Fast delivery with excellent quality. Even with tight deadlines, everything was managed smoothly.",
  },
  {
    name: "Payal S.",
    role: "Travel Vlogger",
    text: "My content quality improved dramatically. Audience engagement shot up. The creativity is unmatched.",
  },
  {
    name: "Mansi C.",
    role: "Lifestyle Creator",
    text: "Top-notch quality, speed, and creativity. One of the best editing experiences I've had.",
  },
  {
    name: "Ruchi S.",
    role: "Food Blogger",
    text: "Outstanding attention to detail. Every frame looks polished. Delivery was on time and communication was smooth.",
  },
  {
    name: "Shruti J.",
    role: "Speaker",
    text: "Raw footage transformed into an engaging video. Transitions, color grading, and music sync — all perfect.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">What Clients Say</h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="w-full overflow-hidden">
          <div className="flex animate-marquee" style={{ width: "200%" }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-3 w-[360px] glass-card rounded-2xl p-7 hover:border-glow transition-colors"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-cta flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
