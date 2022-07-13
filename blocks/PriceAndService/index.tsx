import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from '../../styles/PriceAndService.module.scss';
import cn from 'classnames';
import { StudioTable, Beats, Portfolio } from './components';

const PriceAndService = React.forwardRef<HTMLDivElement>((_, ref) => {
    const { t } = useTranslation();

    const [studio, setStudio] = useState(true);
    const [beats, setBeats] = useState(false);
    const [portfolio, setPortfolio] = useState(false);

    const studioHandler = useCallback(() => {
        setBeats(false);
        setPortfolio(false);
        if (!studio) {
            setStudio(!studio);
        }
    }, [studio]);

    const beatsHandler = useCallback(() => {
        setStudio(false);
        setPortfolio(false);
        if (!beats) {
            setBeats(!beats);
        }
    }, [beats]);

    const portfolioHandler = useCallback(() => {
        setStudio(false);
        setBeats(false);
        if (!portfolio) {
            setPortfolio(!portfolio);
        }
    }, [portfolio]);

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
                        [styles.active]: portfolio,
                    })}
                    onClick={portfolioHandler}
                >
                    {t('portfolio')}
                </button>
            </div>
            <div className={styles.priceAndServiceTable}>
                {studio && <StudioTable />}
            </div>
            <div className={styles.priceAndServiceTable}>
                {beats && <Beats />}
            </div>
            <div className={styles.priceAndServiceTable}>
                {portfolio && <Portfolio />}
            </div>
        </div>
    );
});

PriceAndService.displayName = 'PriceAndService';

export default PriceAndService;
