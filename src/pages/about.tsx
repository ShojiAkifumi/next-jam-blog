import Contact from "components/contact";
import Container from "components/container";
import Hero from "components/hero";
import PostBody from "components/postBody";
import TwoColumn from "components/twoColumn";
import React from "react";
import Image from "next/image";
import eyecatch from "../../public/about.jpg";
import HeadMeta from "components/meta";

const About = () => {
  return (
    <Container>
      <HeadMeta
        pageTitle="アバウト"
        pageDesc="アウトプットしていくサイト"
        pageImg={eyecatch}
      />
      <Hero title="About" subtitle="About development acitivaities" />
      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>
      <TwoColumn>
        <TwoColumn.main>
          <PostBody>
            <p>
              Cubeが得意とする分野やモノづくりです。3次元化ら2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
            </p>
            <h2>モノづくりで目指していること</h2>
            <p>
              モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした退園を実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
            </p>
            <p>
              単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
            </p>
            <h3>新しいことへのチャレンジ</h3>
            <p>
              今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
            </p>
          </PostBody>
        </TwoColumn.main>
        <TwoColumn.sidebar>
          <Contact />
        </TwoColumn.sidebar>
      </TwoColumn>
    </Container>
  );
};

export default About;
