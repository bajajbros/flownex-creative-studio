import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Discovery",
    desc: "We align on outcome, mood, and deliverables (15-min call).",
  },
  {
    num: "2",
    title: "Scripting & Style",
    desc: "Boards, typography, and map styling locked with references.",
  },
  {
    num: "3",
    title: "Edit & Motion",
    desc: "Cut, kinetic type, and motion passes. Iteration with quick previews.",
  },
  {
    num: "4",
    title: "Polish",
    desc: "Color, SFX, micro-timing, and delivery to spec (4K/1080p).",
  },
];

const ProcessSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How I Work</h2>
          <p className="text-muted-foreground text-lg font-body">A crisp pipeline with visible checkpoints.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-cta flex items-center justify-center text-primary-foreground font-bold text-lg mb-5">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
