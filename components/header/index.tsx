import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from '../language-switcher';

import styles from '../../styles/Header.module.scss';

import cn from 'classnames';

const Header = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const redirectTo = (to: string) => {
        router.push(to);
    };
    const [headerVisible, setHeaderVisible] = useState(true);
    const [scrollPrev, setScrollPrev] = useState(0);
    const checkScroll = useCallback(() => {
        const scrolled = window.scrollY;

        if (scrolled > scrollPrev) {
            setHeaderVisible(false);
            setScrollPrev(scrolled);
        } else {
            setScrollPrev(scrolled);
            setHeaderVisible(true);
        }
    }, [scrollPrev]);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', checkScroll);
        }
        return () => window.removeEventListener('scroll', checkScroll);
    }, [checkScroll]);
    return (
        <header
            className={cn(styles.appHeader, {
                [styles.appHeaderOut]: !headerVisible,
            })}
        >
            <div className={styles.appHeaderContainer}>
                <p>GUNGLI SOUND STUDIO</p>
                <div className={styles.headerLinksAndLang}>
                    <div className={styles.headerLinks}>
                        <button onClick={() => redirectTo('#priceService')}>
                            {t('priceService')}
                        </button>
                        <button onClick={() => redirectTo('#contact')}>
                            {t('contact')}
                        </button>
                    </div>
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
};

export default Header;
