import { motion } from "framer-motion";

const skills = [
  "Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop",
  "Illustrator", "Figma", "Blender", "Cinema 4D", "CapCut",
];

const SkillsMarquee = () => {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills and Software I Use</h2>
          <p className="text-muted-foreground text-lg font-body">Look at my skills I offer and the software I use</p>
        </motion.div>
      </div>

      {/* Marquee row */}
      <div className="w-full overflow-hidden">
        <div className="flex animate-marquee-slow" style={{ width: "200%" }}>
          {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-3 px-8 py-4 glass-card rounded-2xl flex items-center justify-center"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mr-3">
                <span className="text-primary font-bold text-xs">
                  {skill.split(" ").map(w => w[0]).join("")}
                </span>
              </div>
              <span className="text-sm font-medium whitespace-nowrap">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
