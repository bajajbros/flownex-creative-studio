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
    <section id="work" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4"
        >
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-extrabold">Selected Work</h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
            A curated collection of our best short-form and long-form edits across niches.
          </p>
        </motion.div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video, i) => {
            const isLarge = i === 0 || i === 3;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  isLarge ? "col-span-2 md:col-span-1 aspect-[4/5]" : "aspect-[3/4]"
                }`}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(160deg, hsl(${video.hue} 35% 14%), hsl(${video.hue + 40} 25% 6%))`,
                  }}
                />

                {/* Category tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-primary/15 text-primary border border-primary/20 px-3 py-1 rounded-full">
                    {video.category}
                  </span>
                </div>

                {/* Play */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30 scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-6 h-6 text-foreground ml-0.5" fill="currentColor" />
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background/95 via-background/40 to-transparent">
                  <div className="flex items-end justify-between">
                    <p className="text-sm font-bold">{video.title}</p>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-sm">
            View full portfolio <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
