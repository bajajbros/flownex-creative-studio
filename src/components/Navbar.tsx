import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, User, HelpCircle } from "lucide-react";

const navItems = [
  { label: "Home", icon: Home, href: "#home" },
  { label: "Work", icon: Briefcase, href: "#work" },
  { label: "About", icon: User, href: "#about" },
  { label: "FAQ", icon: HelpCircle, href: "#faq" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`glass-nav rounded-full px-2 py-2 
          transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-background/50" : ""}`}
      >
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${active === item.label
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
