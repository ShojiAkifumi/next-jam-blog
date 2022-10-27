import Image from "next/image";
import React from "react";
import styles from "styles/hero.module.scss";
import cube from "../../public/cube.jpg";

type Props = {
  title: string;
  subtitle: string;
  imageOn?: boolean;
};

const Hero = ({ title, subtitle, imageOn = false }: Props) => {
  return (
    <div className="heroFlexContainer">
      <div className="text">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
      {imageOn && (
        <figure className="image">
          <Image
            src={cube}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  );
};

export default Hero;
