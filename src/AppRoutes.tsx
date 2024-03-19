import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Burn from "./pages/Burn";
import ComingSoon from "./pages/ComingSoon";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/burn" element={<Burn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
