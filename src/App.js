import './App.css';
import { BrowserRouter } from "react-router-dom";
import MedicalRecordContainer from './container/medical-record-container/MedicalRecordContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="whole_container">
        <div className="header"></div>

        <aside></aside>

        <div className="main_content">
          <MedicalRecordContainer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
