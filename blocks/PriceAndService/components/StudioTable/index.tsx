import { useTranslation } from 'react-i18next';

const StudioTable = () => {
    const { t } = useTranslation();
    return (
        <table cellSpacing={0} cellPadding={0}>
            <tbody>
                <tr>
                    <td>
                        <span>{t('firstRecord')}</span>
                        <p>{t('firstRecordText')}</p>
                    </td>
                    <td>{t('firstRecordCost')}</td>
                </tr>
                <tr>
                    <td>
                        <span>
                            {t('mixing')} + {t('mastering')}
                        </span>
                    </td>
                    <td>{t('mixingMasteringCost')}</td>
                </tr>
                <tr>
                    <td>
                        <span>{t('recordHour')}</span>
                        <p>{t('recordHourInfo')}</p>
                    </td>
                    <td>{t('recordCost')}</td>
                </tr>
                <tr>
                    <td>
                        <span>{t('creatingInstrumental')}</span>
                        <p>{t('creatingInstrumentalInfo')}</p>
                    </td>
                    <td>{t('creatingInstrumentalCost')}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default StudioTable;
