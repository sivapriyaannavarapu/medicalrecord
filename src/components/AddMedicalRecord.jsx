import React from "react";
import { Formik, Form } from "formik";
import styles from "./AddMedicalRecord.module.css";
import Button from "../widgets/Button";
import Dropdown from "../widgets/Dropdown";
import Inputbox from "../widgets/Inputbox";
import uploadfile from "../assets/uploadfile.svg";
import rightarrow from "../assets/rightarroeicon";
import formmobileicon from "../assets/formmobileicon.svg";
import formemailicon from "../assets/formemailicon.svg";

const AddMedicalRecordForm = () => {
  return (
    <div className={styles.form_container}>

      <Formik
        initialValues={{
          academicYear: "2024-2025",
          branch: "",
          medicalIssue: "",
          severity: "",
          condition: "",
          prescription: "",
          emergencyName: "",
          emergencyRelation: "",
          emergencyNumber: "",
          file: null,
        }}
        onSubmit={(values) => {
          console.log("Submitted:", values);
          alert("Medical Record Saved");
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className={styles.form_grid}>
            {/* Academic Year */}
            <div className={styles.form_item}>
              <Dropdown
                dropdownname="Academic Year"
                name="academicYear"
                results={["2024-2025", "2025-2026"]}
                value={values.academicYear}
                onChange={(e) => setFieldValue("academicYear", e.target.value)}
              />
            </div>

            {/* Branch */}
            <div className={styles.form_item}>
              <Dropdown
                dropdownname="Branch"
                name="branch"
                results={["Miyapur", "Kukatpally"]}
                value={values.branch}
                onChange={(e) => setFieldValue("branch", e.target.value)}
              />
            </div>

            {/* Medical Issue */}
            <div className={styles.form_item}>
              <Inputbox
                label="Medical Issue Name"
                id="medicalIssue"
                name="medicalIssue"
                placeholder="Enter Medical Issue Name"
                value={values.medicalIssue}
                onChange={(e) => setFieldValue("medicalIssue", e.target.value)}
              />
            </div>

            {/* Severity */}
            <div className={styles.form_item}>
              <Dropdown
                dropdownname="Severity"
                name="severity"
                results={["Low", "Medium", "High"]}
                value={values.severity}
                onChange={(e) => setFieldValue("severity", e.target.value)}
              />
            </div>

            {/* Condition */}
            <div className={styles.form_item}>
              <Inputbox
                label="Condition"
                id="condition"
                name="condition"
                placeholder="Enter Condition"
                value={values.condition}
                onChange={(e) => setFieldValue("condition", e.target.value)}
              />
            </div>

            {/* Emergency Contact Name */}
            <div className={styles.form_item}>
              <Inputbox
                label="Emergency Contact Name"
                id="emergencyName"
                name="emergencyName"
                placeholder="Enter Name"
                value={values.emergencyName}
                onChange={(e) => setFieldValue("emergencyName", e.target.value)}
              />
            </div>

            {/* Emergency Contact Relation */}
            <div className={styles.form_item}>
              <Dropdown
                dropdownname="Emergency Contact Relation"
                name="emergencyRelation"
                results={["Father", "Mother", "Guardian"]}
                value={values.emergencyRelation}
                onChange={(e) => setFieldValue("emergencyRelation", e.target.value)}
              />
            </div>

            {/* Emergency Contact Number */}
            {/* Hospital Contact */}
            <div className={styles.form_item}>
              <label className={styles.label}>Emergency Contact Number</label>
              <div className={styles.inputWithIcon}>
                <input
                  type="text"
                  name="emergencyContact"
                  placeholder="Enter Contact Number"
                  className={styles.input_box}
                  value={values.emergencyContact || ""}
                  onChange={(e) => setFieldValue("emergencyContact", e.target.value)}
                />
                <img src={formmobileicon} alt="Phone" className={styles.inputIcon} />
              </div>
            </div>

            <div className={styles.form_item}>
              <Inputbox
                label="Add Hospital"
                id="addHospital"
                name="addHospital"
                placeholder="Enter Hospital Name"
                value={values.addHospital}
                onChange={(e) => setFieldValue("addHospital", e.target.value)}
              />
            </div>

            <div className={styles.form_item}>
              <Inputbox
                label="Enter Address"
                id="addAddress"
                name="addAddress"
                placeholder="Enter Hospital Address"
                value={values.addAddress}
                onChange={(e) => setFieldValue("addAddress", e.target.value)}
              />
            </div>

            <div className={styles.form_item}>
              <label className={styles.label}>Hospital Contact</label>
              <div className={styles.inputWithIcon}>
                <input
                  type="text"
                  name="hospitalContact"
                  placeholder="Enter Mobile Number"
                  className={styles.input_box}
                  value={values.hospitalContact || ""}
                  onChange={(e) => setFieldValue("hospitalContact", e.target.value)}
                />
                <img src={formmobileicon} alt="Phone" className={styles.inputIcon} />
              </div>
            </div>

            <div className={styles.form_item}>
              <label className={styles.label}>Hospital Email Id</label>
              <div className={styles.inputWithIcon}>
                <input
                  type="email"
                  name="hospitalEmail"
                  placeholder="Enter Email Id"
                  className={styles.input_box}
                  value={values.hospitalEmail || ""}
                  onChange={(e) => setFieldValue("hospitalEmail", e.target.value)}
                />
                <img src={formemailicon} alt="Email" className={styles.inputIcon} />
              </div>
            </div>
            
            {/* Previous Visited Hospital Date */}
<div className={styles.form_item}>
  <label className={styles.label}>Previous Visited Hospital Date</label>
  <div className={styles.inputWithIcon}>
    <input
      type="date"
      id="previousHospitalDate"
      name="previousHospitalDate"
      className={styles.input_box}
      value={values.previousHospitalDate || ""}
      onChange={(e) => setFieldValue("previousHospitalDate", e.target.value)}
    />
  </div>
</div>

<div className={styles.form_item}>
  <Inputbox
    label="Hospital Emergency Contact Name"
    id="hospitalEmergencyName"
    name="hospitalEmergencyName"
    placeholder="Enter Name"
    value={values.hospitalEmergencyName}
    onChange={(e) => setFieldValue("hospitalEmergencyName", e.target.value)}
  />
</div>

<div className={styles.form_item}>
  <label className={styles.label}>Hospital Emergency Contact Number</label>
  <div className={styles.inputWithIcon}>
    <input
      type="text"
      name="hospitalEmergencyNumber"
      placeholder="Enter Contact Number"
      className={styles.input_box}
      value={values.hospitalEmergencyNumber || ""}
      onChange={(e) => setFieldValue("hospitalEmergencyNumber", e.target.value)}
    />
    <img src={formmobileicon} alt="Phone" className={styles.inputIcon} />
  </div>
</div>

            {/* Prescription */}
            <div className={styles.form_item_full}>
              <label className={styles.label}>Prescription</label>
              <textarea
                name="prescription"
                placeholder="Enter prescription"
                value={values.prescription}
                onChange={(e) => setFieldValue("prescription", e.target.value)}
                className={styles.text_area}
              />
            </div>

            {/* File Upload */}
            <div className={styles.form_item}>
              <label className={styles.label}>Upload Prescription</label>
              <label className={styles.custom_file_input}>
                <figure className={styles.file_icon}>
                  <img src={uploadfile} alt="Upload" />
                </figure>
                <span className={styles.file_text}>
                  {values.file ? values.file.name : "Upload File"}
                </span>
                <input
                  type="file"
                  onChange={(e) => setFieldValue("file", e.currentTarget.files[0])}
                />
              </label>
            </div>

            {/* Buttons */}
            <div className={styles.form_buttons}>
              <Button
                buttonname="Submit"
                righticon={rightarrow}
                //   width="240px"
                type={"submit"}
                variant="primary"
                onClick={() => alert("form submitted")}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddMedicalRecordForm;
