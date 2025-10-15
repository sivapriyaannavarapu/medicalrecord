import './App.css';
import { BrowserRouter } from "react-router-dom";
import MedicalRecordContainer from './container/medical-record-container/MedicalRecordContainer';
import Header from './components/HeaderComponent/Header';
// import SideBarContainer from './container/SideBar-container/SideBarContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="whole_container">
        <Header/>

         <aside >
          {/* <SideBarContainer/> */}
        </aside>

        <div className="main_content">
          <MedicalRecordContainer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
