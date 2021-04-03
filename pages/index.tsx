import Head from "../src/components/Head";
import Header from "../src/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | BrazilCSS</title>
      </Head>
      <Header active="home" />
      Página principal
    </>
  );
}
