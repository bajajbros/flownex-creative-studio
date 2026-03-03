import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-noise">
      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-border/30 animate-spin-slow" />
        <div className="absolute w-[450px] h-[450px] rounded-full border border-border/20 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-primary/10" />
      </div>

      {/* Accent dots */}
      <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-primary/60 animate-float" />
      <div className="absolute top-[30%] right-[20%] w-1.5 h-1.5 rounded-full bg-accent/50 animate-float-delayed" />
      <div className="absolute bottom-[30%] left-[25%] w-1 h-1 rounded-full bg-primary/40 animate-float" />

      {/* Status pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-card border-glow rounded-full px-5 py-2.5 mb-10 flex items-center gap-2.5"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-sm text-muted-foreground font-medium">Available for projects</span>
      </motion.div>

      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-center z-10 relative"
      >
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-2">
          <span className="text-gradient-brand">Flownex</span>
        </h1>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-2">
          Media
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex items-center gap-3 mt-4 mb-6"
      >
        <div className="h-px w-12 bg-border" />
        <span className="text-sm text-muted-foreground font-medium tracking-widest uppercase">Video Editing · Motion Design · Content</span>
        <div className="h-px w-12 bg-border" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-muted-foreground text-center max-w-md mb-12 text-lg leading-relaxed"
      >
        We craft scroll-stopping videos that grow your audience and turn viewers into fans.
      </motion.p>

      {/* CTA row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="flex items-center gap-4"
      >
        <motion.a
          href="#work"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-cta text-primary-foreground px-8 py-4 rounded-full text-base font-semibold flex items-center gap-2 glow-primary"
        >
          See Our Work
          <ArrowRight className="w-4 h-4" />
        </motion.a>
        <motion.a
          href="#about"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="glass-card border-glow px-8 py-4 rounded-full text-base font-semibold flex items-center gap-2 text-foreground"
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
        className="mt-20 flex items-center gap-10 md:gap-16"
      >
        {[
          { num: "50+", label: "Projects Delivered" },
          { num: "30+", label: "Happy Clients" },
          { num: "2M+", label: "Views Generated" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-2xl md:text-3xl font-extrabold text-gradient-brand">{stat.num}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
