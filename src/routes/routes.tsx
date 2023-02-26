import { BrowserRouter, Routes, Route } from "react-router-dom";
import Assesment from "../pages/assessment";
import Home from "../pages/Home";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="assessment" element={<Assesment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
