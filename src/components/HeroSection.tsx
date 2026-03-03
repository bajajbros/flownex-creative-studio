import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Floating decorative elements */}
      <div className="absolute left-[10%] top-[30%] animate-float opacity-20">
        <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
          <path d="M60 10C60 10 20 50 20 80C20 110 40 130 60 130C80 130 100 110 100 80C100 50 60 10 60 10Z" stroke="hsl(0 0% 30%)" strokeWidth="2"/>
          <path d="M40 60L60 40L80 60" stroke="hsl(0 0% 30%)" strokeWidth="2"/>
          <circle cx="50" cy="55" r="4" fill="hsl(0 0% 30%)"/>
          <circle cx="70" cy="55" r="4" fill="hsl(0 0% 30%)"/>
        </svg>
      </div>
      <div className="absolute right-[10%] top-[25%] animate-float-delayed opacity-20">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
          <path d="M70 130C70 130 10 90 10 55C10 25 35 5 70 40C105 5 130 25 130 55C130 90 70 130 70 130Z" stroke="hsl(0 0% 40%)" strokeWidth="1.5" strokeDasharray="4 4"/>
          <circle cx="15" cy="55" r="3" fill="hsl(0 70% 50%)"/>
          <circle cx="125" cy="55" r="3" fill="hsl(0 70% 50%)"/>
          <circle cx="70" cy="38" r="3" fill="hsl(0 70% 50%)"/>
          <circle cx="70" cy="125" r="3" fill="hsl(0 70% 50%)"/>
        </svg>
      </div>

      {/* Dot grid accents */}
      <div className="absolute left-[5%] top-[40%] grid grid-cols-3 gap-3 opacity-15">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-foreground" />
        ))}
      </div>
      <div className="absolute right-[5%] bottom-[35%] grid grid-cols-3 gap-3 opacity-15">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-foreground" />
        ))}
      </div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="glass-card rounded-full px-6 py-3 mb-8 flex items-center gap-3"
      >
        <span className="text-2xl">👋</span>
        <span className="text-sm text-muted-foreground font-medium">Hello! I'm a Video Editor!</span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-5xl md:text-7xl font-bold text-center mb-4"
      >
        Yo! <span className="text-gradient-accent">I'm Flownex</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground"
      >
        Professional Video Editor &<br />Motion Designer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-muted-foreground text-center max-w-xl mb-10 text-lg font-body"
      >
        I edit videos with purpose — helping creators and brands turn ideas into engaging, high-performing content.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#work"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="bg-gradient-cta text-primary-foreground px-16 py-4 rounded-xl text-lg font-semibold glow-primary animate-pulse-glow transition-all"
      >
        Book a call!
      </motion.a>
    </section>
  );
};

export default HeroSection;
