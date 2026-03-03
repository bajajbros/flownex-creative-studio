import { motion } from "framer-motion";
import { MessageSquare, Palette, Scissors, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery Call",
    desc: "15-min alignment on goals, mood, and deliverables.",
    accent: "165",
  },
  {
    icon: Palette,
    title: "Style Lock",
    desc: "References, typography, and visual direction — signed off.",
    accent: "35",
  },
  {
    icon: Scissors,
    title: "Edit & Iterate",
    desc: "Rough cut, motion passes, and rapid feedback loops.",
    accent: "200",
  },
  {
    icon: Sparkles,
    title: "Final Polish",
    desc: "Color grade, SFX, micro-timing — delivered to spec.",
    accent: "280",
  },
];

const ProcessSection = () => {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Process</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">How We Work</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                {/* Content */}
                <div className={`flex-1 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"} text-center md:text-left`}>
                  <div className={`glass-card rounded-2xl p-7 inline-block w-full max-w-sm hover:border-glow transition-colors`}
                    style={{ borderColor: `hsl(${step.accent} 50% 30% / 0.3)` }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `hsl(${step.accent} 60% 45% / 0.15)` }}
                    >
                      <step.icon className="w-5 h-5" style={{ color: `hsl(${step.accent} 60% 55%)` }} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background z-10" />

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
