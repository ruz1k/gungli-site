import styles from '../../styles/Footer.module.scss';

const Footer = () => (
    <footer>
        <ul className={styles.footerContainer}>
            <li>
                created by <a href="https://github.com/ruz1k">ruz1k</a>.
            </li>
            <li>GUNGLI SOUND STUDIO</li>
            <li>© 2022</li>
        </ul>
    </footer>
);

export default Footer;
