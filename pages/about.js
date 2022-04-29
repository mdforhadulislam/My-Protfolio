import Head from 'next/head';
import React from 'react';
import AboutContainer from '../Components/About';

export default function about() {
    return (
        <div>
            <Head>
                <title>About</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="Author" content="Forhadul Islam" />
                <meta
                    name="keywords"
                    content="Protfolio, web developer,frontend developer,about section"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AboutContainer />
        </div>
    );
}
