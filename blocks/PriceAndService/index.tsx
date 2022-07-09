import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from '../../styles/PriceAndService.module.scss';
import cn from 'classnames';
import { StudioTable } from './components';

const PriceAndService = React.forwardRef<HTMLDivElement>((_, ref) => {
    const { t } = useTranslation();

    const [studio, setStudio] = useState(true);
    const [beats, setBeats] = useState(false);
    const [musicAccompaniment, setMusicAccompaniment] = useState(false);

    const studioHandler = useCallback(() => {
        setBeats(false);
        setMusicAccompaniment(false);
        if (!studio) {
            setStudio(!studio);
        }
    }, [studio]);

    const beatsHandler = useCallback(() => {
        setStudio(false);
        setMusicAccompaniment(false);
        if (!beats) {
            setBeats(!beats);
        }
    }, [beats]);

    const musicAccompanimentHandler = useCallback(() => {
        setStudio(false);
        setBeats(false);
        if (!musicAccompaniment) {
            setMusicAccompaniment(!musicAccompaniment);
        }
    }, [musicAccompaniment]);

    return (
        <div ref={ref} className={styles.priceAndService}>
            <h2>{t('priceService')}</h2>
            <div className={styles.priceAndServiceSwitchContainer}>
                <button
                    className={cn({
                        [styles.active]: studio,
                    })}
                    onClick={studioHandler}
                >
                    {t('workOnStudio')}
                </button>
                <button
                    className={cn({
                        [styles.active]: beats,
                    })}
                    onClick={beatsHandler}
                >
                    {t('beats')}
                </button>
                <button
                    className={cn({
                        [styles.active]: musicAccompaniment,
                    })}
                    onClick={musicAccompanimentHandler}
                >
                    {t('musicAccompaniment')}
                </button>
            </div>
            <div className={styles.priceAndServiceTable}>
                {studio && <StudioTable />}
            </div>
            <div className={styles.priceAndServiceTable}>
                {beats && <StudioTable />}
            </div>
            <div className={styles.priceAndServiceTable}>
                {musicAccompaniment && <StudioTable />}
            </div>
        </div>
    );
});

PriceAndService.displayName = 'PriceAndService';

export default PriceAndService;
