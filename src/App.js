import { Adminpage } from "./screen/adminpage";
import Login from "./screen/login";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Userpage } from "./screen/userpage";
import { Register } from "./screen/register";
import UserReport from "./screen/UserReport";
import BusAllocation from "./screen/busallowcate";
import BusDataList from "./screen/busreport";
import Adminprofile from "./screen/adminprofile";
import Userprofile from "./screen/userprofile";
//  import Homepage from "./Component/Homepage/Homepage";
//  import './App.css';
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          {/* <Route path="/" element={<Homepage/>}/> */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminpage" element={<Adminpage />} />
          <Route path="/adminprofile" element={<Adminprofile />} />
          <Route path="/userpage" element={<Userpage />} />
          <Route path="/usereport" element={<UserReport />} />
          <Route path="/userprofile" element={<Userprofile />} />
          <Route path="/busallowcate" element={<BusAllocation />} />
          <Route path="/busdata" element={<BusDataList />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
