import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div>
            <Head>
                <title>Zvuk Gungli</title>
                <meta name="description" content="Gungli zvuk site." />
            </Head>
            <Component {...pageProps} />
        </div>
    );
};

export default MyApp;
