import "./App.css";
import Home from "./pages/Home";
import Surgeries from "./pages/Surgeries";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "./pages/Error404";
import SurgeryDetailPage from "./pages/SurgeryDetailPage";
import articlesData from "./articles";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
        <Route path="/termsofuse" element={<TermsOfUse />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
