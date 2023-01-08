import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
  isVisible: boolean;
  onBackDrop: () => void;
};

function Overlay({ isVisible, onBackDrop }: Props) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          onClick={onBackDrop}
          className="fixed bg-black inset-0"
        />
      )}
    </AnimatePresence>
  );
}

export default Overlay;
