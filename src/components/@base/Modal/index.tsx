import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Overlay from "../Overlay";

type Props = {
  isVisible: boolean;
  onBackDrop: () => void;
  children: React.ReactNode;
};

function Modal({ isVisible, onBackDrop, children }: Props) {
  return (
    <>
      <Overlay isVisible={isVisible} onBackDrop={onBackDrop} />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 300 }}
            className="fixed z-50 top-1/2 left-1/2"
          >
            <div className="p-8 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg ">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Modal;
