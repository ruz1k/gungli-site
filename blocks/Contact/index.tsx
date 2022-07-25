import React from 'react';

import { useTranslation } from 'react-i18next';

import styles from '../../styles/Contact.module.scss';
import { InstagramIcon, TelegramIcon, VKIcon } from '../../assets/icons';

const Contact = React.forwardRef<HTMLDivElement>((_, ref) => {
    const { t } = useTranslation();

    const renderTo = (url: string) => {
        window.location.href = url;
    };

    return (
        <div ref={ref} className={styles.contact}>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <a
                    href="https://yandex.ru/maps/43/kazan/?utm_medium=mapframe&utm_source=maps"
                    style={{
                        color: '#eee',
                        fontSize: '12px',
                        position: 'absolute',
                        top: '0px',
                    }}
                >
                    {t('Kazan')}
                </a>
                <a
                    href="https://yandex.ru/maps/43/kazan/house/ulitsa_sary_sadykovoy_59a/YEAYdwZpQU0HQFtvfXt2cHpqZg==/?ll=49.119879%2C55.771692&utm_medium=mapframe&utm_source=maps&z=16"
                    style={{
                        color: '#eee',
                        fontSize: '12px',
                        position: 'absolute',
                        top: '14px',
                    }}
                >
                    {t('street')}
                </a>
                <iframe
                    src="https://yandex.ru/map-widget/v1/-/CCUNFBcwGC"
                    frameBorder="1"
                    className={styles.contactMap}
                    allowFullScreen={true}
                />
            </div>
            <div className={styles.contactInfo}>
                <h2>{t('contact')}</h2>
                <div className={styles.contactInfoIcons}>
                    <button
                        onClick={() =>
                            renderTo('https://www.instagram.com/gungli_zvuk/')
                        }
                    >
                        <InstagramIcon />
                    </button>
                    <button onClick={() => renderTo('https://t.me/dnsrbkn')}>
                        <TelegramIcon />
                    </button>
                    <button
                        onClick={() => renderTo('https://vk.com/gungli_zvuk')}
                    >
                        <VKIcon />
                    </button>
                </div>
                <button
                    onClick={() => renderTo('https://t.me/dnsrbkn')}
                    className={styles.enrollBtn}
                >
                    {t('enroll')}
                </button>
            </div>
        </div>
    );
});

Contact.displayName = 'Contact';

export default Contact;
