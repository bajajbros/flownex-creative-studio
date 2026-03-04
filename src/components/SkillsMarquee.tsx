import { motion } from "framer-motion";

const skills = [
  "Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop",
  "Illustrator", "Figma", "Blender", "Cinema 4D", "CapCut",
];

const colors = ["165", "200", "35", "280", "150", "340", "60", "220", "100"];

const SkillsMarquee = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 overflow-hidden bg-noise">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-primary text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-3">Toolkit</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">Software We Master</h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="w-full overflow-hidden">
          <div className="flex animate-marquee-slow" style={{ width: "200%" }}>
            {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-1.5 md:mx-2 px-4 md:px-6 py-3 md:py-4 rounded-2xl flex items-center gap-2 md:gap-3 glass-card hover:border-glow transition-colors"
              >
                <div
                  className="w-7 md:w-9 h-7 md:h-9 rounded-lg flex items-center justify-center text-[10px] md:text-xs font-black"
                  style={{
                    backgroundColor: `hsl(${colors[i % colors.length]} 50% 40% / 0.2)`,
                    color: `hsl(${colors[i % colors.length]} 60% 55%)`,
                  }}
                >
                  {skill.split(" ").map(w => w[0]).join("")}
                </div>
                <span className="text-xs md:text-sm font-semibold whitespace-nowrap">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
