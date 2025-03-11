import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import Home from "./pages/Home";
import Pedido from "./pages/Pedido";

export default function App() {
  return (
    <Router>
      <Header />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedido" element={<Pedido />} />
      </Routes>
    </Router>
  );
}
