import { motion } from "framer-motion";

const clients = [
  { name: "Mansi Chopra", handle: "@themansichopra" },
  { name: "Akhil Kapoor", handle: "@akhil_kapoorrr" },
  { name: "Gaurav Ghai", handle: "@thegauravghai" },
  { name: "Bhanu Pathak", handle: "@bhanu_pathak" },
  { name: "Payal & Gaurav", handle: "@payalineurope" },
  { name: "Madhav Jha", handle: "@techbites.co" },
  { name: "Aman Kumar", handle: "@explorewithaman" },
  { name: "Ruchi Sharma", handle: "@eatfitrepeat" },
  { name: "Shruti Jain", handle: "@shrutiispeaks" },
  { name: "Naiya Sehgal", handle: "@naiya_sehgal" },
];

const TrustedClients = () => {
  return (
    <section className="py-28 overflow-hidden bg-noise">
      <div className="max-w-6xl mx-auto px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Community</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">Our Trusted Clients</h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        {/* Row 1 */}
        <div className="w-full overflow-hidden mb-4">
          <div className="flex animate-marquee-slow" style={{ width: "200%" }}>
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="flex-shrink-0 mx-2 glass-card rounded-xl px-5 py-3.5 flex items-center gap-3.5 min-w-[220px] hover:border-glow transition-colors">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground flex-shrink-0">
                  {c.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.handle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="w-full overflow-hidden">
          <div className="flex animate-marquee-reverse" style={{ width: "200%" }}>
            {[...clients.slice(5), ...clients.slice(0, 5), ...clients.slice(5), ...clients.slice(0, 5)].map((c, i) => (
              <div key={i} className="flex-shrink-0 mx-2 glass-card rounded-xl px-5 py-3.5 flex items-center gap-3.5 min-w-[220px] hover:border-glow transition-colors">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground flex-shrink-0">
                  {c.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.handle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
