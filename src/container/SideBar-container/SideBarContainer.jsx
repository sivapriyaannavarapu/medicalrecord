import SideBar from "../../components/sidebar-components/sidebar-lists/SideBar";
import styles from "./SideBarContainer.module.css";
import SideLowerTabs from "../../components/sidebar-components/sidebar-lower-tabs/SideLowerTabs";
import SideBarAlert from "../../components/sidebar-components/sidebar-alert/SidebarAlert";
const SideBarContainer = () => {
  return (
    <div id="sidebar_container" className={styles.sidebar_container}>
      <SideBar />
      
      <div className={styles.alert_container}>
        <SideBarAlert/>
        <div className={styles.lower_tabs_container}>
            <SideLowerTabs/>
        </div>
        
      </div>
    </div>
  );
};

export default SideBarContainer;