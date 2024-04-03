import { BrowserRouter, Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'
import LoginSignup from "./LoginSignup";
import Land from "./Land";
import Slotbook from "./Slotbook";
import Faq from "./Faq";
import Admin from "./Admin";


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Land/>} />
          <Route path="/login" element={<LoginSignup/>} />
          <Route path="/loginSignup/slot" element={<Slotbook/>} />
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
