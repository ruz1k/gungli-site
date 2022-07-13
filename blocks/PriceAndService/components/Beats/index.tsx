import { useTranslation } from 'react-i18next';
import styles from '../../../../styles/Beats.module.scss';

const Beats = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.beats}>
            <iframe
                src="//www.beatstars.com/embed/track/?id=10604552"
                width="100%"
                height="140"
            />
            <iframe
                src="//www.beatstars.com/embed/track/?id=10595397"
                width="100%"
                height="140"
                style={{ border: 'none' }}
            />
            <iframe
                src="//www.beatstars.com/embed/track/?id=10417675"
                width="100%"
                height="140"
                style={{ border: 'none' }}
            />
            <iframe
                src="//www.beatstars.com/embed/track/?id=10404906"
                width="100%"
                height="140"
                style={{ border: 'none' }}
            />
            <button
                onClick={() =>
                    window.open('https://www.beatstars.com/gunglisound')
                }
                className={styles.beatsButton}
            >
                {t('checkOurBeats')}
            </button>
        </div>
    );
};

export default Beats;
