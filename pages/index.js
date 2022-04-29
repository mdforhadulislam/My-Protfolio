import Head from 'next/head';
import HomeContainer from '../Components/Home';

export default function Home() {
    return (
        <>
            <Head>
                <title>Forhadul Islam</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="Author" content="Forhadul Islam" />
                <meta name="keywords" content="Protfolio, web developer,frontend developer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomeContainer />
        </>
    );
}
