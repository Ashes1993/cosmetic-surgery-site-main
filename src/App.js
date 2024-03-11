import "./App.css";
import Home from "./pages/Home";
import Surgeries from "./pages/Surgeries";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "./pages/Error404";
import SurgeryDetailPage from "./pages/SurgeryDetailPage";
import articlesData from "./articles";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/surgeries"
          element={<Surgeries articlesData={articlesData} />}
        />
        <Route
          path="/surgeries/:surgeryId"
          element={<SurgeryDetailPage articlesData={articlesData} />}
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
