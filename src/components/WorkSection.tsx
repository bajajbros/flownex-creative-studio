import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const videos = [
  { title: "Brand Promo Reel", category: "Reels", hue: 165 },
  { title: "Product Launch Edit", category: "Ads", hue: 200 },
  { title: "Creator Highlight", category: "YouTube", hue: 35 },
  { title: "Tech Review Cut", category: "Reels", hue: 280 },
  { title: "Travel Vlog Edit", category: "YouTube", hue: 150 },
  { title: "Skincare Campaign", category: "Ads", hue: 340 },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-4"
        >
          <div>
            <p className="text-primary text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-3">Portfolio</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">Selected Work</h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm md:text-base leading-relaxed">
            A curated collection of our best short-form and long-form edits across niches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/5] sm:aspect-[3/4]"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(160deg, hsl(${video.hue} 35% 14%), hsl(${video.hue + 40} 25% 6%))`,
                }}
              />
              <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/15 text-primary border border-primary/20 px-3 py-1 rounded-full">
                  {video.category}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30 scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-5 md:w-6 h-5 md:h-6 text-foreground ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-background/95 via-background/40 to-transparent">
                <div className="flex items-end justify-between">
                  <p className="text-sm font-bold tracking-tight">{video.title}</p>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 md:mt-12"
        >
          <a href="#" className="inline-flex items-center gap-2 text-primary hover:underline font-bold text-sm tracking-wide">
            View full portfolio <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
