import MedicalHeader from '../../components/MedicalHeader'
import MedicalRecordDetails from '../../components/MedicalRecordDetails';
import styles from "./MedicalRecordLeftConatiner.module.css"
const MedicalRecordLeftContainer = () => {
  return (
    <div className={styles.whole_medical_container}>
      <MedicalHeader/>
      <MedicalRecordDetails/>
    </div>
  )
}

export default MedicalRecordLeftContainer;