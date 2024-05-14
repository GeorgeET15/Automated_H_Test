import { BrowserRouter, Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'
import LoginSignup from "./LoginSignup";
import Land from "./Land";
import Slotbook from "./Slotbook";
import Faq from "./Faq";
import Admin from "./Admin";
import { useState } from "react";
import TestScreen from "./TestScreen";
import Options from "./Options";
import Result from "./Result";

function App() {
  const [username, setUsername] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Land />} />
          <Route
            path="/login"
            element={<LoginSignup setUsername={setUsername} />}
          />
          <Route
            path="/loginSignup/slot"
            element={<Slotbook username={username} />}
          />
          <Route path="/faq" element={<Faq />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/test" element={<TestScreen />} />
          <Route path="/options" element={<Options />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
