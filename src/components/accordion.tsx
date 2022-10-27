import React, { useRef, useState } from "react";
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
    <div className={`accordion ${isTextOpen ? "open" : "close"}`}>
      <h3 className="heading">
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} className="icon" />
        </button>
      </h3>
      <div className="text">
        <div className="textInner">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
