import { motion } from "framer-motion";
import { Play } from "lucide-react";

const longforms = [
  { title: "This Is Who We Are", duration: "12:34", hue: 200 },
  { title: "Behind The Scenes", duration: "8:45", hue: 165 },
  { title: "Year In Review", duration: "15:20", hue: 35 },
  { title: "Client Journey", duration: "10:12", hue: 280 },
];

const LongformSection = () => {
  return (
    <section className="py-28 px-6 bg-noise">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Long Form</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">Deep Dives</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {longforms.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, hsl(${video.hue} 30% 12%), hsl(${video.hue + 30} 20% 6%))`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-foreground/10 backdrop-blur-md flex items-center justify-center border border-foreground/10 scale-90 group-hover:scale-100 transition-transform">
                  <Play className="w-6 h-6 text-foreground ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background/90 to-transparent flex items-end justify-between">
                <p className="text-sm font-bold">{video.title}</p>
                <span className="text-xs text-muted-foreground font-mono">{video.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LongformSection;
