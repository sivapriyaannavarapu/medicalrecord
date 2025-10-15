import React, { useState } from "react";
import styles from "./MedicalRecordDetails.module.css";
import Button from "../widgets/Button";
import addicon from "../assets/addicon";
import mobileicon from "../assets/mobileicon.svg";
import fileicon from "../assets/fileicon.svg"
import downloadicon from "../assets/downloadicon.svg";
import AddMedicalRecordForm from "./AddMedicalRecord";
import { Tooltip } from "@mui/material";
import tooltipmobileicon from "../assets/tooltipmobileicon.svg";
const MedicalRecordDetails = () => {

    const [showForm, setShowForm] = useState(false);
    const handleBack = () => {
        setShowForm(false);
    };

    if (showForm) {
        return <AddMedicalRecordForm onBack={handleBack} />;
    }
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
                        <Tooltip
                                                        arrow
                                                        placement="bottom"
                                                        title={
                                                            <span style={{
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                gap: "8px",
                                                                color: "#3425FF",
                                                                fontSize: "14px",
                                                                fontWeight: 600
                                                            }}>
                                                                <img
                                                                    src={tooltipmobileicon}
                                                                    alt="Phone"
                                                                    style={{ width: "18px", height: "18px" }}
                                                                />
                                                                +91-7893697703
                                                            </span>
                                                        }
                                                        componentsProps={{
                                                            tooltip: {
                                                                sx: {
                                                                    backgroundColor: "white",
                                                                    border: "2px solid #3425FF",
                                                                    borderRadius: "8px",
                                                                    padding: "6px 10px",
                                                                }
                                                            },
                                                            arrow: {
                                                                sx: {
                                                                    color: "white",
                                                                    "&::before": {
                                                                        border: "2px solid #3425FF",
                                                                    }
                                                                }
                                                            }
                                                        }}
                                                    >
                                                        <figure className={styles.call_icon}>
                                                            <img src={mobileicon} alt="Call" />
                                                        </figure>
                                                    </Tooltip>
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
                    width="212px"
                    type={"button"}
                    variant="primary"
                    onClick={() => setShowForm(true)}
                />
            </div>
        </>
    );
};

export default MedicalRecordDetails;
