import { Routes, Route} from "react-router-dom";
import Login from './Log_in';
import Sign_up from './Sign_up';
import Recover_pass from './Recover_pass';
import Reset_pass from './Reset_pass';
import Dashboard from "./Dashboard";
import Confirmation_Acount from "./Confirmation_Acount";
import NotFound from "./NotFound";
import User from "./User";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Sign_up" element={<Sign_up />} />
                <Route path="/Recover_pass" element={<Recover_pass />} />
                <Route path="/Reset_pass" element={<Reset_pass />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/User" element={<User />} />
                <Route path="/Confirmation_Acount" element={<Confirmation_Acount/>} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;