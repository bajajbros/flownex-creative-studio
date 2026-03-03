import { motion } from "framer-motion";

const avatars = Array.from({ length: 12 }, (_, i) => i);
const initials = ["AK", "MC", "GG", "PG", "BH", "RJ", "SJ", "NS", "MJ", "AM", "RS", "SK"];

const AvatarMarquee = () => {
  return (
    <div className="w-full overflow-hidden py-16 relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs text-muted-foreground uppercase tracking-[0.3em] mb-8"
      >
        Trusted by creators & brands
      </motion.p>

      <div className="flex animate-marquee" style={{ width: "200%" }}>
        {[...avatars, ...avatars].map((idx, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-3 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xs font-bold border border-border/50 bg-secondary"
          >
            <span className="text-muted-foreground">{initials[idx % initials.length]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarMarquee;
