import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Zvuk Gungli</title>
                <meta name="description" content="Gungli zvuk site." />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
