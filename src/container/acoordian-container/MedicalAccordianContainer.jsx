// AccordianContainer.jsx
import { useState } from "react";
import styles from "./MedicalAccordianContainer.module.css";
import LastVisitedHospitalAccordian from "../../components/accordians/LastVisitedHospitalAccordian";
import PreviousMedicalRecordAccordian from "../../components/accordians/PreviousMedicalRecordAccordian";
import generalInformationIcon from "../../assets/general_information_icon.svg";

const MedicalAccordianContainer = () => {
  const [expanded, setExpanded] = useState(null); 

  return (
    <div className={styles.accordian_container}>
      <figure>
        <img src={generalInformationIcon} alt="Accordion header" />
        <p className={styles.header_text}>General Information</p>
      </figure>

      <div className={styles.accordians}>
        <LastVisitedHospitalAccordian
          expanded={expanded === "lastvisited"}
          onChange={(e, isOpen) => setExpanded(isOpen ? "lastvisited" : null)}
        />
        <PreviousMedicalRecordAccordian
          expanded={expanded === "previousrecord"}
          onChange={(e, isOpen) => setExpanded(isOpen ? "previousrecord" : null)}
        />
      </div>
    </div>
  );
};

export default MedicalAccordianContainer;