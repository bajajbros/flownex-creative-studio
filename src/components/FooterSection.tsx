import { motion } from "framer-motion";
import { Mail, Instagram, Youtube, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-24 px-6 relative">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary text-sm font-semibold uppercase tracking-widest mb-6"
        >
          Ready?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Let's Create<br />
          <span className="text-gradient-brand">Something Epic</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg mb-10 max-w-md mx-auto"
        >
          Ready to transform your content? Drop us a message and let's get rolling.
        </motion.p>

        <motion.a
          href="mailto:hello@flownexmedia.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground px-10 py-4 rounded-full text-base font-semibold glow-primary mb-14"
        >
          Get in Touch
          <ArrowUpRight className="w-4 h-4" />
        </motion.a>

        <div className="flex items-center justify-center gap-4 mb-12">
          {[
            { icon: Instagram, href: "#" },
            { icon: Youtube, href: "#" },
            { icon: Mail, href: "#" },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:border-glow transition-all"
            >
              <Icon className="w-4.5 h-4.5 text-muted-foreground" />
            </a>
          ))}
        </div>

        <div className="h-px w-full bg-border mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
          <p>© 2026 Flownex Media. All rights reserved.</p>
          <p className="font-medium">Crafted with precision ✦</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
