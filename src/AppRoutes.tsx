import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Burn from "./pages/Burn";
import ComingSoon from "./pages/ComingSoon";
import GloriLyst from "./pages/GloriLyst";
import Batel from "./pages/Batel";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/burn" element={<Burn />} />
        <Route path="/glori-lyst" element={<GloriLyst />} />

        <Route path="/batel" element={<Batel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
