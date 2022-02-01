import Head from "next/head";
import HomePage from "../Components/HomePage";
import NavBar from "../Components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Forhad Protfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./foursquare.png" />
      </Head>
      <main>
        <HomePage />
        <NavBar />
      </main>
    </>
  );
}