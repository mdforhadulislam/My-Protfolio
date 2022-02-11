import Head from 'next/head';
import HomeContainer from '../Components/Home';

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/icon.jpg" />
            </Head>
            <HomeContainer />
        </>
    );
}
