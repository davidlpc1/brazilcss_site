import Head from "../src/components/Head";
import Header from "../src/components/Header";

import styled from 'styled-components';
import { useEffect, useState } from "react";
const Title = styled.h1`
  padding: 0.25rem;
`;

export default function Home() {
  const completeTitle = "O framework de css mais completo do Brasil";
  const [title,setTitle] = useState("")

  const awaitSeconds = ms => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    async function updateTitle(){
      for(let index = 0;index < completeTitle.length;index++){    
        if(!completeTitle[index]) continue;
        setTitle(old => old + completeTitle[index])
        console.log(title)
        await awaitSeconds(400);
      }
    }

    updateTitle()
  },[]);

  return (
    <>
      <Head>
        <title>Home | BrazilCSS</title>
      </Head>
      <Header active="home" />
      <main>
        <Title>{title}</Title>
      </main>
    </>
  );
}
