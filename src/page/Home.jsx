import { BrowserRouter } from "react-router-dom";
import App from "../App";

function Home() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

export default Home;