import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import AccordianContainer from "../accordian-container/AccordianContainer";
// import OverviewContainer from "../overview-container/OverviewContainer"; 
import styles from "./MedicalRecordContainer.module.css";
import AlertLinks from "../../components/AlertsLinks";
import MedicalAccordianContainer from "../acoordian-container/MedicalAccordianContainer";
import MedicalRecordLeftContainer from "../medical-record-left-container/MedicalRecordLeftConatiner";

const InAndOutLog = () => (
  <div>
    <h1>In and Out Log Page</h1>
    <p>Content for In and Out Log</p>
  </div>
);

const MedicalRecordContainer = () => {
  const location = useLocation();

  const showAccordion = location.pathname === "/medical";

  return (
    <div className={styles.medical_record_container}>
      <div className={styles.main_part}>
       
        <AlertLinks />

        <Routes>
          <Route index element={<Navigate to="/overview" />} />
          <Route path="/in-out" element={<InAndOutLog/>} />
          <Route path="/medical" element={<MedicalRecordLeftContainer/>} />
        </Routes>
      </div>

      <div className={`${styles.accordian_part} ${showAccordion ? "" : styles.hidden}`}>
        <MedicalAccordianContainer/>
      </div>
    </div>
  );
};

export default MedicalRecordContainer;