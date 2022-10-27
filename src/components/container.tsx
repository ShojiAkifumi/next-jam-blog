import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  large?: boolean;
  isMain?: boolean;
};

const Container = ({ children, large = false, isMain = false }: Props) => {
  return (
    <div className={`container ${large ? "large" : "default"}`}>
      {isMain ? (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{
            duration: 0.6,
          }}
        >
          {children}
        </motion.div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default Container;
