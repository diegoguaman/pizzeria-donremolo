import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "@mui/material";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <Container sx={{ marginTop: 4, minHeight: "80vh" }}>{children}</Container>
      <Footer />
    </div>
  );
}
