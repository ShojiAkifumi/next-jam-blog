import React from "react";
import styles from "styles/container.module.scss";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  large?: boolean;
};

const Container = ({ children, large = false }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
      }}
    >
      <div className={large ? styles.large : styles.default}>{children}</div>
    </motion.div>
  );
};

export default Container;
