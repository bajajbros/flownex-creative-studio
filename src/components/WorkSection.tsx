import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { title: "Brand Promo Reel", category: "Short Form" },
  { title: "Product Launch Edit", category: "Short Form" },
  { title: "Creator Highlight", category: "Short Form" },
  { title: "Tech Review Edit", category: "Short Form" },
  { title: "Travel Vlog Cut", category: "Short Form" },
  { title: "Skincare Ad", category: "Short Form" },
  { title: "Event Recap", category: "Short Form" },
  { title: "Podcast Clip", category: "Short Form" },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">All My Shortform Content</h2>
          <p className="text-muted-foreground text-lg font-body">Explore a showcase of my diverse projects and creations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer glass-card"
            >
              {/* Gradient background */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(${135 + i * 20}deg, hsl(${270 + i * 15} 50% 15%), hsl(${200 + i * 20} 40% 8%))`,
                }}
              />
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <p className="text-xs text-primary font-medium mb-1">{video.category}</p>
                <p className="text-sm font-semibold">{video.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
