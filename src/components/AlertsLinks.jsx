import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AlertsLinks.module.css";

const AlertLinks = () => {
  const tabs = [
    { label: "InAndOut", path: "/in-out" },
    { label: "MedicalRecord", path: "/medical" },
  ];

  return (
    <ul className={styles.tab_all_links}>
      {tabs.map((tab) => (
        <NavLink
          key={tab.label}
          to={tab.path}
          className={({ isActive }) =>
            `${styles.tab_links} ${isActive ? styles.active_tab : ""}`
          }
        >
          <span className={`${styles.tab} `}>
            {tab.label}
          </span>
        </NavLink>
      ))}
    </ul>
  );
};

export default AlertLinks;