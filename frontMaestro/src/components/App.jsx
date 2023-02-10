import { Routes, Route} from "react-router-dom";
import Login from './Log_in';
import Sign_up from './Sign_up';
import Recover_pass from './Recover_pass';
import Reset_pass from './Reset_pass';
import Index from "./Index";
import Shop from "./Shop";
import Confirmation_Acount from "./Confirmation_Acount";
import NotFound from "./NotFound";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Sign_up" element={<Sign_up />} />
                <Route path="/Recover_pass" element={<Recover_pass />} />
                <Route path="/Reset_pass" element={<Reset_pass />} />
                <Route path="/Index" element={<Index />} />
                <Route path="/Shop" element={<Shop />} />
                <Route path="/Confirmation_Acount" element={<Confirmation_Acount/>} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;