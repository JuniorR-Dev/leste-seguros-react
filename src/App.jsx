import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cotacao from "./pages/Cotacao";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cotacao" element={<Cotacao />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}