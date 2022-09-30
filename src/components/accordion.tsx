import React, { useRef, useState } from "react";
import styles from "styles/accordion.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
type Props = {
  heading: string;
  children: React.ReactNode;
};

const Accordion = ({ heading, children }: Props) => {
  const [isTextOpen, setIsTextOpen] = useState(false);

  const toggleText = () => {
    setIsTextOpen((prev) => !prev);
  };

  return (
    <div className={isTextOpen ? styles.open : styles.close}>
      <h3 className={styles.heading}>
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
        </button>
      </h3>
      <div className={styles.text}>
        <div className={styles.textInner}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
