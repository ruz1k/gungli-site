import cn from 'classnames';
import styles from '../../styles/Logo.module.scss';

type LogoProps = {
    animated?: boolean;
};

export const Logo = ({ animated }: LogoProps): JSX.Element => (
    <div className={cn(styles.logo, { [styles.animated]: animated })}>
        <h1>GUNGLI SOUND STUDIO</h1>
    </div>
);
