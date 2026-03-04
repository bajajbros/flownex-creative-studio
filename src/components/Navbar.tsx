import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, User, HelpCircle, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { label: "Home", icon: Home, href: "#home" },
  { label: "Work", icon: Briefcase, href: "#work" },
  { label: "About", icon: User, href: "#about" },
  { label: "FAQ", icon: HelpCircle, href: "#faq" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`glass-nav rounded-full px-2 py-2 transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-background/50" : ""}`}
      >
        {/* Desktop nav */}
        {!isMobile && (
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.label)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === item.label
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        )}

        {/* Mobile nav toggle */}
        {isMobile && (
          <div className="flex items-center gap-2 px-3">
            <span className="text-sm font-semibold text-foreground tracking-wide">FLOWNEX</span>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="ml-auto p-2 text-foreground"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        )}
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMobile && mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-4 right-4 glass-nav rounded-2xl p-4 flex flex-col gap-1 z-50"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActive(item.label);
                  setMobileOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  active === item.label
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
