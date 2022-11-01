import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import ConvertDate from "./convertDate";
import s from "styles/post-header.module.scss";
// import ConvertDate from "components"

type Props = {
  title: string;
  subtitle: string;
  publish?: string;
};

const PostHeader = ({ title, subtitle, publish = "" }: Props) => {
  return (
    <div className={s.postHeaderStack}>
      <p className={s.subtitle}>{subtitle}</p>
      <h1 className={s.title}>{title}</h1>
      {publish && (
        <div className={s.publish}>
          <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
          <ConvertDate dateISO={publish} />
        </div>
      )}
    </div>
  );
};

export default PostHeader;
