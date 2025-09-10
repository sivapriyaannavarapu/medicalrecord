import React from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./LastVisitedHospitalAccordian.module.css";
import accordionheadericon from "../../assets/accordionheadericon.svg";
import hospitalicon from "../../assets/hospitalicon.svg";
import accordianmobileicon from "../../assets/accordianmobileicon.svg";
import mailicon from "../../assets/mailicon.svg";
import mobileicon from "../../assets/mobileicon.svg";
import leftleaficon from "../../assets/leftleaficon.svg";
import rightleaficon from "../../assets/rightleaficon.svg";

const LastVisitedHospitalAccordian = ({ expanded, onChange }) => {
    return (
        <Accordion
            expanded={expanded}
            onChange={onChange}
            sx={{
                "& .MuiAccordionSummary-root": {
                    minHeight: "50px !important",   // ✅ Force min-height
                    padding: "15px 18px 0px 18px",
                    alignItems: "start",
                },
                "& .MuiAccordionSummary-root.Mui-expanded": {
                    minHeight: "50px !important",   // ✅ Expanded state also
                },
                "& .MuiAccordionDetails-root ": { padding: "0px 16px 16px" },
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
                aria-controls="hospital-content"
                id="hospital-content"
                sx={{
                    "& .MuiAccordionSummary-content": { margin: "0px !important" },
                    "&.Mui-expanded .MuiAccordionSummary-content": {
                        margin: "0px !important",
                    },

                }}
            >
                <Typography component="span">
                    <figure className={styles.header_figure}>
                        <img src={accordionheadericon} alt="Hospital Icon" />
                        <p className={styles.header_text}>Last Visited Hospital</p>
                    </figure>
                </Typography>
            </AccordionSummary>

            <AccordionDetails id="hospital-content">
                <div className={styles.hospital_card}>
                    {/* Header */}
                    <div className={styles.hospital_header}>
                        {/* Left Icon */}
                        <figure className={styles.hospital_icon}>
                            <img src={hospitalicon} alt="Hospital Icon" />
                        </figure>

                        {/* Hospital Info */}
                        <div className={styles.hospital_info}>
                            <p className={styles.hospital_label}>Hospital Name</p>
                            <h3 className={styles.hospital_name}>Ramesh Hospitals</h3>
                            <p className={styles.hospital_address}>
                                Address: Infinity Towers, Plot No 2-91/31, Near N Convention Road,
                                HITEC City, Hyderabad, Telangana 500081
                            </p>
                        </div>

                        {/* Right Action Buttons */}
                        <div className={styles.hospital_actions}>
                            <figure className={styles.action_icon}>
                                <img src={accordianmobileicon} alt="Call" />
                            </figure>
                            <figure className={styles.action_icon}>
                                <img src={mailicon} alt="Mail" />
                            </figure>
                        </div>

                    </div>

                    {/* Emergency Contact */}
                    <div className={styles.emergency_contact}>
                        <span>
                            Emergency Contact: <strong>Vamsi Ramana</strong>
                        </span>
                        <figure className={styles.call_icon}>
                            <img src={mobileicon} alt="Call" />
                        </figure>

                    </div>

                    {/* Footer Tag */}
                    <div className={styles.tag}>
                        <figure className={styles.left_leaf_icon}>
                            <img src={leftleaficon} alt="Call" />
                        </figure>
                        <span>Hospital</span>
                        <figure className={styles.right_leaf_icon}>
                            <img src={rightleaficon} alt="Call" />
                        </figure>
                    </div>
                </div>
            </AccordionDetails>

        </Accordion>
    );
};

export default LastVisitedHospitalAccordian;
