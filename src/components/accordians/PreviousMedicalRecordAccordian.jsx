import React from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import styles from "./PreviousMedicalRecordAccordian.module.css";
import accordionheadericon from "../../assets/accordionheadericon.svg";
import fileicon from "../../assets/fileicon.svg";

const PreviousMedicalRecordAccordian = ({ expanded, onChange }) => {
    return (
        <Accordion
            expanded={expanded}
            onChange={onChange}
            sx={{
                "& .MuiAccordionDetails-root ": {
                    padding: "0px 16px 16px",
                    minHeight: "0px",
                },
                "&&": {
                    "--Paper-shadow": "none",
                    boxShadow: "none",
                    borderRadius: "10px",
                    border: "1px solid #E6E4F0",
                    background: "rgba(255, 255, 255, 0.40)",
                    backdropFilter: "blur(9.1px)",
                },
                "&::before": { display: "none" },
                "& .MuiButtonBase-root": {
                    alignItems: "start",
                    padding: "15px 18px 0px 18px",
                    minHeight: "50px",
                },
                "&.Mui-expanded": {
                    borderRadius: "10px",
                    border: "1px solid #B4BCFF",
                    background: "rgba(255, 255, 255, 0.30)",
                    boxShadow:
                        "0 8px 16px 0 rgba(0, 0, 0, 0.14), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
                    backdropFilter: "blur(9.1px)",
                    margin: "0px",
                },
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="medical-record-content"
                id="medical-record-content"
                sx={{
                    "& .MuiAccordionSummary-content": { margin: "0px !important" },
                    "&.Mui-expanded .MuiAccordionSummary-content": {
                        margin: "0px !important",
                    },
                }}
            >
                <Typography component="span">
                    <figure className={styles.header_figure}>
                        <img src={accordionheadericon} alt="Medical Record" />
                        <p className={styles.header_text}>Previous Medical Record</p>
                    </figure>
                </Typography>
            </AccordionSummary>

            <AccordionDetails id="medical-record-content">
                <div className={styles.record_card}>
                    <div className={styles.row}>
                        <div className={styles.cellLeft}>
                            <span className={styles.label}>Date & Time</span>
                            <strong>12th Oct, 2024 at 7:45AM</strong>
                        </div>
                        <div className={styles.cellRight}>
                            <span className={styles.label}>Medical Issue Name</span>
                            <strong>Asthma</strong>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.cellLeft}>
                            <span className={styles.label}>Severity</span>
                            <strong>High</strong>
                        </div>
                        <div className={styles.cellRight}>
                            <span className={styles.label}>Condition</span>
                            <strong>Need Regular medicines</strong>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.cellLeft}>
                            <span className={styles.label}>Prescription</span>
                            <strong>Need Regular medicines</strong>
                        </div>
                        <div className={styles.cellRight}>
                            <span className={styles.label}>Files</span>
                            <figure className={styles.file_icon}>
                            <img src={fileicon} alt="files" />
                        </figure>
                        </div>
                    </div>
                </div>

            </AccordionDetails>
        </Accordion>
    );
};

export default PreviousMedicalRecordAccordian;
