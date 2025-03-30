import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const AnimatedModal = ({ isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  const imageVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const buttonVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      onClick={onClose}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      style={{ backgroundColor: "black" }}
    >
      <motion.img
        src="/Guardian Logo.PNG"
        alt="Logo"
        className="h-48 w-48 mb-5 mt-5"
        variants={logoVariants}
      />

      <motion.div
        className="flex items-center justify-center py-4"
        variants={imageVariants}
      >
        <div className="relative">
          <div className="relative w-[90vw] md:w-[50vw] aspect-video">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-50"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>

            <img
              src="/intranceMAN.png"
              className="w-full h-full object-cover rounded-lg"
              alt="Intrance Man"
            />
          </div>
          <div
            className="
              absolute inset-0 z-0
              border border-[#00f3ff]
              before:absolute before:inset-0
              before:border before:border-[#00f3ff]
              before:animate-pulse
              shadow-[0_0_15px_#00f3ff]
              [box-shadow:_0_0_15px_#00f3ff,_inset_0_0_15px_#00f3ff]
              animate-pulse rounded-lg before:rounded-lg
            "
          />
        </div>
      </motion.div>

      <motion.div variants={buttonVariants}>
        <Button
          variant="outline"
          size="lg"
          className="mt-8 bg-transparent border-none hover:bg-transparent hover:cursor-default"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <img
            src="/enterRealm.png"
            className="w-64 cursor-pointer"
            alt="Enter Realm"
          />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedModal;

