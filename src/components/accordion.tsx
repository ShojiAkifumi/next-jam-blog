import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import s from "styles/accordion.module.scss";
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
    <div className={`${s.accordion} ${isTextOpen ? "open" : "close"}`}>
      <h3 className={s.heading}>
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} className={s.icon} />
        </button>
      </h3>
      <div className={s.text}>
        <div className={s.textInner}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
