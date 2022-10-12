import React from "react";
import styles from "styles/container.module.scss";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  large?: boolean;
  isMain?: boolean;
};

const Container = ({ children, large = false, isMain = false }: Props) => {
  return (
    <div className={large ? styles.large : styles.default}>
      {isMain ? (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{
            duration: 60,
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
