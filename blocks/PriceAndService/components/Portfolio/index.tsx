import styles from '../../../../styles/Portfolio.module.scss';

const Portfolio = () => {
    return (
        <div className={styles.portfolio}>
            <iframe
                width="100%"
                height="450"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1467718249&color=%236b9545&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div
                style={{
                    fontSize: '10px',
                    color: '#cccccc',
                    lineBreak: 'anywhere',
                    wordBreak: 'normal',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    fontFamily:
                        'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
                    fontWeight: 100,
                }}
            >
                <a
                    href="https://soundcloud.com/gunglisound"
                    title="Gunglisound"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#cccccc', textDecoration: 'none' }}
                >
                    Gunglisound
                </a>
                <a
                    href="https://soundcloud.com/gunglisound/sets/portfolio"
                    title="Portfolio"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#cccccc', textDecoration: 'none' }}
                >
                    Portfolio
                </a>
            </div>
        </div>
    );
};

export default Portfolio;
