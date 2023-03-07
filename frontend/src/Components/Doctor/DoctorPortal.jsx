import { React } from 'react';
import styles from './DoctorPortal.module.css';

function DoctorPortal() {
    return (
    <div>
        <div className={styles.nav}>
            <div className={styles.logo}>
                <img src="./Group 1.svg" alt="logo" />
                <h1>Healthiner</h1>
            </div>
        </div>
    </div> );
}

export default DoctorPortal;