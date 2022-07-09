import Image from 'next/image';

import { useTranslation } from 'react-i18next';

import styles from '../../styles/IntroduceStyle.module.scss';

import Logo from '../../assets/img/logo1.png';
import { Logo as TextLogo } from '../../components';

const Introduce = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.introduce}>
            <div className={styles.introduceContent}>
                <TextLogo />
                <p>
                    {t('record')}. {t('mixing')}. {t('mastering')}. {t('beats')}
                    . {t('musicAccompaniment')}.
                </p>
            </div>
            <div className={styles.introduceLogo}>
                <Image src={Logo} width={400} height={400} alt="Gungli logo" />
            </div>
        </div>
    );
};

export default Introduce;
