import Head from 'next/head';
import React from 'react';
import ProtfolioContainer from '../Components/Protfolio';
export default function protfolio() {
    return (
        <>
            <Head>
                <title>Protfolio</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="Author" content="Forhadul Islam" />
                <meta
                    name="keywords"
                    content="Protfolio, web developer,frontend developer,project section"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProtfolioContainer />
        </>
    );
}
