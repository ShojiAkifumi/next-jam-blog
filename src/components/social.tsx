import React from "react";
import styles from "styles/social.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  // faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

type Props = {
  iconSize: string;
};

const Social = ({ iconSize }: Props) => {
  const iconSizeStyle: { [key: string]: string } = { "--icon-size": iconSize };
  return (
    <ul className={styles.list} style={iconSizeStyle}>
      <li>
        <a
          href="https://twitter.com/akimasamichi41"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      {/* <li>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebookF} />
          <span className="sr-only">Facebook</span>
        </a>
      </li> */}
      <li>
        <a
          href="https://github.com/ShojiAkifumi"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
    </ul>
  );
};

export default Social;
