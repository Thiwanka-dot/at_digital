import style from './footer.module.css';
import Logo from '../../assets/Logo.png';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footCon}>
                <div className={style.company}>
                    <img src={Logo} alt="logo" />
                    <p>
                        Your goal is our target. Not anything in between. We use <br />
                        online marketing platforms and tools to achieve a single <br />
                        objective - your business results.
                    </p>
                </div>
                <div className={style.info}>
                    <div className={style.infoItem}>
                        <h2>Our Technologies</h2>
                        <ul>
                            <li>ReactJS</li>
                            <li>Gatsby</li>
                            <li>NextJS</li>
                            <li>NodeJS</li>
                        </ul>
                    </div>
                    <div className={style.infoItem}>
                        <h2>Our Services</h2>
                        <ul>
                            <li>Social Media Marketing</li>
                            <li>Web & Mobile App Development</li>
                            <li>Data Analytics</li>
                            <li>NodeJS</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.policy}>
                <p>Privacy Policy | Terms & Conditions</p>
            </div>
        </footer>
    );
}
