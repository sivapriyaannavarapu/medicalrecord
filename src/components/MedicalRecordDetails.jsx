import React from "react";
// import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import styles from "./MedicalRecordDetails.module.css";
import Button from "../widgets/MedicalRecordButton";
import addicon from "../assets/addicon";
import mobileicon from "../assets/mobileicon.svg";
import fileicon from "../assets/fileicon.svg"
import downloadicon from "../assets/downloadicon.svg";
const MedicalRecordDetails = () => {
    return (
        <>
            <div className={styles.medical_details_container}>
                <div className={styles.detail_item}>
                    <label className={styles.label}>Academic Year</label>
                    <strong>2024-2025</strong>
                </div>

                <div className={styles.detail_item}>
                    <label className={styles.label}>Branch</label>
                    <strong>Miyapur</strong>
                </div>

                <div className={styles.detail_item}>
                    <label className={styles.label}>Medical Issue Name</label>
                    <strong>Asthma</strong>
                </div>

                <div className={styles.detail_item}>
                    <label className={styles.label}>Severity</label>
                    <strong>High</strong>
                </div>

                <div className={styles.detail_item}>
                    <label className={styles.label}>Condition</label>
                    <strong>Need Regular medicines</strong>
                </div>

                <div className={styles.detail_item}>
                    <label className={styles.label}>Prescription</label>
                    <strong>Need Regular medicines</strong>
                </div>

                <div className={styles.detail_item}>
                    <label className={styles.label}>Emergency Contact Number:</label>
                    <div className={styles.phone}>
                        <strong>Kondreddi Vamsi Ramana</strong>
                        <figure className={styles.call_icon}>
                            <img
                                src={mobileicon}
                                alt="Call"
                            />
                        </figure>
                    </div>
                </div>

                <div className={styles.detail_item}>
                    <label className={styles.label}>Relationship:</label>
                    <strong>Father</strong>
                </div>

                <div className={styles.detail_item}>
                    <label className={styles.label}>Files</label>
                    <div className={styles.files}>
                        <figure className={styles.file_icon}>
                            <img src={fileicon} alt="File" />
                        </figure>
                        <figure className={styles.download_icon}>
                            <img src={downloadicon} alt="Download" />
                        </figure>
                    </div>
                </div>

            </div>
            <div className={styles.medical_button_container}>
                <Button
                    buttonname="Add Medical Record"
                    righticon={addicon}
                    //   width="240px"
                    type={"button"}
                    variant="primary"
                    onClick={() => alert("Add Medical Record Clicked")}
                />
            </div>
        </>
    );
};

export default MedicalRecordDetails;
