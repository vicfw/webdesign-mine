import Head from "next/head";
import styles from "../styles/Home.module.css";
import LayOut from "../Component/LayOut/LayOut";
import Container from "../Component/Container/Container";
import Header from "../Component/Header/Header";
import Row from "../Component/Row/Row";
import RowTwo from "../Component/RowTwo/RowTwo";

export default function Home() {
  const img = "./images/wave.png";
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <React.StrictMode>
        <LayOut background={"#7fc6b8"}>
          <Container>
            <Header />
            <Row />
          </Container>
        </LayOut>
        <LayOut
          background={`url(${img}) no-repeat center bottom`}
          bgsize={"100% 42%"}
        >
          <Container paddingTop={"2rem"}>
            <RowTwo />
          </Container>
        </LayOut>
      </React.StrictMode>
    </div>
  );
}
