import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Send } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const navItems = [
  { name: "Comics", section: "comics" },
  { name: "Metaverse", section: "metaverse" },
  { name: "The legend", section: "legend" },
  { name: "Comics", section: "chars" },
  { name: "NFTs", section: "nft-collection" },
  { name: "Roadmap", section: "roadmap" },
  { name: "Tokenomics", section: "tokenomics" },
  { name: "Team", section: "team" },
];

export function NavBar({ isAnimation }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.section);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isAnimation ? (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md"
        >
          <NavContent
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            isAnimation={isAnimation}
          />
        </motion.nav>
      ) : (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
          <NavContent
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            isAnimation={isAnimation}
          />
        </nav>
      )}
    </AnimatePresence>
  );
}

function NavContent({ activeSection, scrollToSection, isAnimation }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center">
          <img src="/Guardian Logo.PNG" alt="Logo" className="h-24 w-24" />
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              onClick={() => scrollToSection(item.section)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 glow ${
                activeSection === item.section
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/15 hover:text-white"
              }`}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <AnimatePresence>
          {isAnimation ? (
            <motion.div
              className="hidden md:flex items-center space-x-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <SocialButtons />
            </motion.div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <SocialButtons />
            </div>
          )}
        </AnimatePresence>
        <div className="md:hidden">
          {/* <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="hover:bg-white/15">
              <FaXTwitter className="h-5 w-5 text-white" />
              <span className="sr-only">Twitter</span>
            </Button>
          </a> */}
          <a
            href="https://t.me/MEtaGuardianz"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-white/15 mr-2"
            >
              <Send className="h-5 w-5  text-white" />
              <span className="sr-only">Telegram</span>
            </Button>
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-white/15">
                <Menu className="h-5 w-5 text-white" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {navItems.map((item) => (
                <DropdownMenuItem
                  key={item.name}
                  onSelect={() => scrollToSection(item.section)}
                >
                  {item.name}
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem>
                <a
                  href="https://x.com/MetaGuardianz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FaXTwitter className="h-4 w-4 mr-2" />
                  X
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a
                  href="https://t.me/MEtaGuardianz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Telegram
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  variant="default"
                  className="w-full bg-white text-black hover:bg-white/90"
                >
                  Enter the DAPP
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  variant="default"
                  className="bg-white text-black hover:bg-white/90"
                  onClick={() => {
                    console.log("Button clicked!");
                    window.open("https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0x1eb4a435f93e5cff41e682b70f9a575631bde0f3", "_blank", "noopener,noreferrer");
                  }}
                  onTouchStart={() => {
                    console.log("Touch start detected!");
                    window.open("https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0x1eb4a435f93e5cff41e682b70f9a575631bde0f3", "_blank", "noopener,noreferrer");
                  }}
                >
                  Buy Reeves
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

function SocialButtons() {
  return (
    <>
      <a href="https://x.com/MetaGuardianz" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon" className="hover:bg-white/15">
          <FaXTwitter className="h-5 w-5 text-white" />
          <span className="sr-only">X</span>
        </Button>
      </a>
      <a href="https://t.me/MEtaGuardianz" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon" className="hover:bg-white/15">
          <Send className="h-5 w-5  text-white" />
          <span className="sr-only">Telegram</span>
        </Button>
      </a>
      <Button
        variant="default"
        className=" bg-white text-black hover:bg-white/90"
      >
        Enter the DAPP
      </Button>
      <Button
        variant="default"
        className="bg-white text-black hover:bg-white/90"
        onClick={() => {
          console.log("Button clicked!");
          window.open("https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0x1eb4a435f93e5cff41e682b70f9a575631bde0f3", "_blank", "noopener,noreferrer");
        }}
        onTouchStart={() => {
          console.log("Touch start detected!");
          window.open("https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0x1eb4a435f93e5cff41e682b70f9a575631bde0f3", "_blank", "noopener,noreferrer");
        }}
      >
        Buy Reeves
      </Button>
    </>
  );
}

