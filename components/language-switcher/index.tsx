import { useEffect } from 'react';
import i18n from '../../config/i18n';

import cn from 'classnames';

import styles from '../../styles/LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    lang: string;
    setLang: (lang: string) => void;
}

const LanguageSwitcher = ({ lang, setLang }: LanguageSwitcherProps) => {
    useEffect(() => setLang(localStorage?.getItem('i18nextLng') || ''), [lang]);

    const translateText = (lang: string) => {
        if (lang === 'en') {
            setLang('en');
            i18n.changeLanguage('en');
        } else {
            setLang('ru');
            i18n.changeLanguage('ru');
        }
    };

    return (
        <div className={styles.languageSwitcher}>
            <button
                className={cn({
                    [styles.active]: lang === 'ru',
                })}
                onClick={() => translateText('ru')}
            >
                RU
            </button>
            <button
                className={cn({
                    [styles.active]: lang === 'en',
                })}
                onClick={() => translateText('en')}
            >
                EN
            </button>
        </div>
    );
};

export default LanguageSwitcher;
