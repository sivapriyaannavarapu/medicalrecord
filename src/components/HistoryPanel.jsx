import React, { useState } from 'react';
import { Backdrop, Box, Checkbox, CssBaseline, Tooltip } from '@mui/material';
import closeicon from '../assets/closeicon.svg';
import styles from './HistoryPanel.module.css';
import { uparrow } from '../assets/uparrow';
import Button from '../widgets/Button';
import fileicon from '../assets/fileicon.svg';
import downloadicon from '../assets/downloadicon.svg';
import mobileicon from '../assets/mobileicon.svg';
import SearchBox from '../widgets/SearchBox';
import { searchicon } from '../assets/searchicon';
import tooltipmobileicon from "../assets/tooltipmobileicon.svg";

const HistoryPanel = ({ open, onClose }) => {
  const [selectedClass, setSelectedClass] = useState('Class 8');
  const [searchValue, setSearchValue] = useState('');

  const handleChangeClass = (newValue) => setSelectedClass(newValue);
  const handleSearchChange = (newValue) => setSearchValue(newValue);

  const record = [
    {
      id: 1,
      academicYear: '2024-2025',
      branch: 'Miyapur',
      medicalIssueName: 'Asthma',
      severity: 'High',
      condition: 'Need Regular medicines',
      prescription: 'Need Regular medicines',
      emergencyContactNumber: 'Kondreddi Vamsi Ramana',
      relationship: 'Father',
      files: 2,
    },
    {
      id: 2,
      academicYear: '2024-2025',
      branch: 'Miyapur',
      medicalIssueName: 'Asthma',
      severity: 'High',
      condition: 'Need Regular medicines',
      prescription: 'Need Regular medicines',
      emergencyContactNumber: 'Kondreddi Vamsi Ramana',
      relationship: 'Father',
      files: 1,
    },
    {
      id: 2,
      academicYear: '2024-2025',
      branch: 'Miyapur',
      medicalIssueName: 'Asthma',
      severity: 'High',
      condition: 'Need Regular medicines',
      prescription: 'Need Regular medicines',
      emergencyContactNumber: 'Kondreddi Vamsi Ramana',
      relationship: 'Father',
      files: 1,
    },
    {
      id: 2,
      academicYear: '2024-2025',
      branch: 'Miyapur',
      medicalIssueName: 'Asthma',
      severity: 'High',
      condition: 'Need Regular medicines',
      prescription: 'Need Regular medicines',
      emergencyContactNumber: 'Kondreddi Vamsi Ramana',
      relationship: 'Father',
      files: 1,
    },
    
  ];

  return (
    <>
      <CssBaseline />
      <Backdrop open={open} onClick={onClose} className={styles.backdrop}>
        <Box onClick={(e) => e.stopPropagation()} className={styles.historyPanelContainer}>
          {/* Header */}
          <div className={styles.panel_header}>
            <div>
              <h5 className={styles.headerTitle}>History</h5>
              <span className={styles.subtitle}>List of Current Year Transport</span>
              <img
                src={closeicon}
                alt="Close"
                className={styles.closeButton}
                onClick={onClose}
              />
            </div>
          </div>
          <div className={styles.headerDivider}></div>

          {/* Tabs + Search */}
          <div className={styles.tabsSearchContainer}>
            <div className={styles.tabsContainer} role="tablist">
              {['Class 8', 'Class 7', 'Class 6', 'Class 5', 'Class 4', 'Class 3', 'Class 2', 'Class 1'].map((cls) => (
                <div
                  key={cls}
                  className={`${styles.tab} ${selectedClass === cls ? styles.tabActive : ''}`}
                  onClick={() => handleChangeClass(cls)}
                  role="tab"
                  aria-selected={selectedClass === cls}
                  tabIndex={selectedClass === cls ? '0' : '-1'}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                      const tabs = ['Class 8', 'Class 7', 'Class 6', 'Class 5', 'Class 4', 'Class 3', 'Class 2', 'Class 1'];
                      const currentIndex = tabs.indexOf(selectedClass);
                      let nextIndex;
                      if (e.key === 'ArrowRight') {
                        nextIndex = (currentIndex + 1) % tabs.length;
                      } else if (e.key === 'ArrowLeft') {
                        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
                      }
                      handleChangeClass(tabs[nextIndex]);
                    }
                  }}
                >
                  {cls}
                </div>
              ))}
            </div>
            <div className={styles.spacer} />
            <Button
              buttonname={'Export'}
              lefticon={uparrow}
              type={'button'}
              variant="primary"
              onClick={() => alert('form submitted')}
            />
            <SearchBox
              searchicon={searchicon}
              placeholder="Search for anything"
              width="250px"
              onValueChange={handleSearchChange}
            />
          </div>

          {/* Records */}
          <div className={styles.recordsList}>
            {record.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className={styles.recordItem}>
                  <div className={styles.recordContent}>
                    {/* Checkbox column */}
                    <div className={styles.checkboxColumn}>
                      <Checkbox size="small" />
                    </div>

                    {/* Details Section */}
                    <div className={styles.detailsSection}>
                      {/* First Row */}
                      <div className={styles.row}>
                        <div className={styles.column}>
                          <label className={styles.label}>Academic Year</label>
                          <strong className={styles.value}>{item.academicYear}</strong>
                        </div>
                        <div className={styles.column}>
                          <label className={styles.label}>Branch</label>
                          <strong className={styles.value}>{item.branch}</strong>
                        </div>
                        <div className={styles.column}>
                          <label className={styles.label}>Medical Issue Name</label>
                          <strong className={styles.value}>{item.medicalIssueName}</strong>
                        </div>
                        <div className={styles.column}>
                          <label className={styles.label}>Severity</label>
                          <strong className={styles.value}>{item.severity}</strong>
                        </div>
                        <div className={styles.column}></div>
                      </div>

                      {/* Second Row */}
                      <div className={styles.row}>
                        <div className={styles.column}>
                          <label className={styles.label}>Condition</label>
                          <strong className={styles.value}>{item.condition}</strong>
                        </div>
                        <div className={styles.column}>
                          <label className={styles.label}>Prescription</label>
                          <strong className={styles.value}>{item.prescription}</strong>
                        </div>
                        <div className={styles.column}>
                          <label className={styles.label}>Emergency Contact Number</label>
                          <div className={styles.contactContainer}>
                            <strong className={styles.value}>{item.emergencyContactNumber}</strong>
                            <Tooltip
                              arrow
                              placement="bottom"
                              title={
                                <span
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "8px",
                                    color: "#3425FF",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                  }}
                                >
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
                                  },
                                },
                                arrow: {
                                  sx: {
                                    color: "white",
                                    "&::before": {
                                      border: "2px solid #3425FF",
                                    },
                                  },
                                },
                              }}
                            >
                              <figure className={styles.accordianmobile_icon}>
                                <img src={mobileicon} alt="Call" />
                              </figure>
                            </Tooltip>
                          </div>
                        </div>
                        <div className={styles.column}>
                          <label className={styles.label}>Relationship</label>
                          <strong className={styles.value}>{item.relationship}</strong>
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
                    </div>
                  </div>
                </div>

                {/* Divider after every record except the last */}
                {index !== record.length - 1 && <div className={styles.rowDivider}></div>}
              </React.Fragment>
            ))}

          </div>
        </Box>
      </Backdrop>
    </>
  );
};

export default HistoryPanel;
