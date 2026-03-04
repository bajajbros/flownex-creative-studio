import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-noise px-4">
      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full border border-border/30 animate-spin-slow" />
        <div className="absolute w-[220px] md:w-[450px] h-[220px] md:h-[450px] rounded-full border border-border/20 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
        <div className="absolute w-[140px] md:w-[300px] h-[140px] md:h-[300px] rounded-full border border-primary/10" />
      </div>

      {/* Accent dots */}
      <div className="absolute top-[20%] left-[10%] md:left-[15%] w-2 h-2 rounded-full bg-primary/60 animate-float" />
      <div className="absolute top-[30%] right-[10%] md:right-[20%] w-1.5 h-1.5 rounded-full bg-accent/50 animate-float-delayed" />

      {/* Status pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-card border-glow rounded-full px-4 md:px-5 py-2 md:py-2.5 mb-8 md:mb-10 flex items-center gap-2.5"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs md:text-sm text-muted-foreground font-medium">Hello! We're a Creative Studio!</span>
      </motion.div>

      {/* Main heading — big bold display */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-center z-10 relative"
      >
        <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-foreground/80 mb-1 md:mb-2">
          Yo! We're{" "}
          <span className="text-gradient-brand font-extrabold">Flownex</span>
        </p>
        <h1 className="font-heading text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tight">
          Professional Video Editing<br className="hidden sm:block" />
          <span className="block mt-1">& Motion Design</span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-muted-foreground text-center max-w-lg mb-10 md:mb-12 text-sm md:text-base leading-relaxed mt-6 md:mt-8 px-2"
      >
        We craft scroll-stopping videos that grow your audience and turn viewers into fans — helping creators and brands turn ideas into high-performing content.
      </motion.p>

      {/* CTA row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
      >
        <motion.a
          href="#work"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-cta text-primary-foreground px-8 py-4 rounded-full text-sm md:text-base font-bold flex items-center justify-center gap-2 glow-primary w-full sm:w-auto"
        >
          See Our Work
          <ArrowRight className="w-4 h-4" />
        </motion.a>
        <motion.a
          href="#about"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="glass-card border-glow px-8 py-4 rounded-full text-sm md:text-base font-bold flex items-center justify-center gap-2 text-foreground w-full sm:w-auto"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          Book a Call
        </motion.a>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mt-16 md:mt-20 flex items-center gap-8 md:gap-16"
      >
        {[
          { num: "50+", label: "Projects Delivered" },
          { num: "30+", label: "Happy Clients" },
          { num: "2M+", label: "Views Generated" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <p className="font-heading text-2xl md:text-4xl font-black text-gradient-brand tracking-tight">{stat.num}</p>
            <p className="text-[10px] md:text-xs text-muted-foreground mt-1 font-medium">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
