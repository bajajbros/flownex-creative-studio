import { motion } from "framer-motion";
import { Mail, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg mb-10 font-body"
        >
          Ready to transform your content? Let's create something amazing.
        </motion.p>

        <motion.a
          href="mailto:hello@flownexmedia.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-gradient-cta text-primary-foreground px-12 py-4 rounded-xl text-lg font-semibold glow-primary mb-12"
        >
          Get in Touch
        </motion.a>

        <div className="flex items-center justify-center gap-6 mb-10">
          <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-primary/40 transition-colors">
            <Instagram className="w-5 h-5 text-muted-foreground" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-primary/40 transition-colors">
            <Youtube className="w-5 h-5 text-muted-foreground" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-primary/40 transition-colors">
            <Mail className="w-5 h-5 text-muted-foreground" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground font-body">
          © 2026 Flownex Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
