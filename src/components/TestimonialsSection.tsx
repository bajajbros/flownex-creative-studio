import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Gaurav G.",
    text: "The editing quality is absolutely amazing. Every detail was handled perfectly, from transitions to color correction. My video looks very professional now.",
  },
  {
    name: "Madhav J.",
    text: "Fast delivery with excellent quality. Even with a short deadline, everything was managed smoothly and delivered a high-quality edit.",
  },
  {
    name: "Payal S.",
    text: "After using the editing service, my content quality improved a lot. My audience engagement also increased. Great creativity and attention to detail.",
  },
  {
    name: "Mansi C.",
    text: "One of the best editing services I have used so far. The quality, speed, and creativity are all top-notch. Looking forward to working again.",
  },
  {
    name: "Ruchi S.",
    text: "The quality, creativity, and attention to detail are outstanding. Every frame looks polished and professional. Delivery was on time.",
  },
  {
    name: "Shruti J.",
    text: "Absolutely the best video editor! Raw footage was turned into a high-quality, engaging video. Transitions, color grading, and music sync were perfect.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Clients 💗 Us</h2>
        </motion.div>
      </div>

      {/* Marquee testimonials */}
      <div className="w-full overflow-hidden">
        <div className="flex animate-marquee" style={{ width: "200%" }}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-3 w-[350px] glass-card rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 text-accent" fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-5">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-cta flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {t.name[0]}
                </div>
                <span className="font-semibold text-sm">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
