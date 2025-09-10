import React from 'react'
import styles from "./MedicalHeader.module.css"
import medicalHeaderIcon from "../assets/medical_header_icon.svg";
import Button from '../widgets/MedicalRecordButton';
import historyicon from "../assets/historyicon"
const MedicalHeader = () => {
    return (
        <div className={styles.overview_header}>
            <figure>
                <img src={medicalHeaderIcon} />
            </figure>

            <div className={styles.header_textpart}>
                <h2 className={styles.header_text}>Medical Record</h2>
                <p className={styles.subtext}>Get all the analytics and growth rate of applications</p>
            </div>

            <div className={styles.history_button_container}>
                <Button
                    buttonname="History"
                    righticon={historyicon}
                    type={"button"}
                    variant="history"
                    onClick={() => alert("History Clicked")}
                />
            </div>
        </div>
    )
}

export default MedicalHeader;