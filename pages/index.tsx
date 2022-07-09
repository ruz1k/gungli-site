import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';

import styles from '../styles/MainStyles.module.scss';

import { Header } from '../components';

import { Introduce, PriceAndService, Contact } from '../blocks';
import Footer from '../components/footer';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const router = useRouter();
    const contactRef = useRef<null | HTMLDivElement>(null);
    const priceServiceRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        const id = router.asPath.replace('/#', '');
        if (contactRef && contactRef.current && id === 'contact') {
            return contactRef?.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        if (
            priceServiceRef &&
            priceServiceRef.current &&
            id === 'priceService'
        ) {
            return priceServiceRef?.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [router.asPath]);
    return (
        <>
            <Header />
            <div className={styles.container}>
                <Introduce />
                <PriceAndService ref={priceServiceRef} />
                <Contact ref={contactRef} />
                <Footer />
            </div>
        </>
    );
};

export default Home;
