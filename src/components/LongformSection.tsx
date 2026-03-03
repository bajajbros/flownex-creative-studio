import { motion } from "framer-motion";
import { Play } from "lucide-react";

const longforms = [
  { title: "This Is Who We Are", duration: "12:34" },
  { title: "Behind The Scenes", duration: "8:45" },
  { title: "Year In Review", duration: "15:20" },
  { title: "Client Story: The Journey", duration: "10:12" },
];

const LongformSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">All My Longform Content</h2>
          <p className="text-muted-foreground text-lg font-body">Explore a showcase of my diverse projects and creations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {longforms.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer glass-card"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(${100 + i * 30}deg, hsl(${220 + i * 25} 40% 12%), hsl(${260 + i * 15} 30% 8%))`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <p className="text-sm font-semibold">{video.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{video.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a href="#" className="text-primary hover:underline font-medium">View All Longforms →</a>
        </motion.div>
      </div>
    </section>
  );
};

export default LongformSection;
