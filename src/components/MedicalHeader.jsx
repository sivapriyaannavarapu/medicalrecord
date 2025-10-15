    import React, { useState } from 'react';
    import styles from "./MedicalHeader.module.css";
    import medicalHeaderIcon from "../assets/medical_header_icon.svg";
    import Button from '../widgets/Button';
    import historyicon from "../assets/historyicon";
    import HistoryPanel from './HistoryPanel';

    const MedicalHeader = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const handleHistoryClick = () => {
        setIsPanelOpen(true);
    };

    const handleClosePanel = () => {
        setIsPanelOpen(false);
    };

    return (
        <div className={styles.medical_header}>
        <figure>
            <img src={medicalHeaderIcon} alt="Medical Header Icon" />
        </figure>

        <div className={styles.medical_header_textpart}>
            <h2 className={styles.medical_header_text}>Medical Record</h2>
            <p className={styles.medical_header_subtext}>Get all the analytics and growth rate of applications</p>
        </div>

        <div className={styles.history_button_container}>
            <Button
            buttonname="History"
            righticon={historyicon}
            type="button"
            variant="history"
            onClick={handleHistoryClick}
            />
        </div>

        {/* Render the HistoryPanel */}
        <HistoryPanel open={isPanelOpen} onClose={handleClosePanel} />
        </div>
    );
    };

    export default MedicalHeader;