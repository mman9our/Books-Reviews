import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useTheme } from "@mui/material/styles";
import { LayoutProps } from "../types/Layout.types";

function Layout({ children }: LayoutProps) {
  const theme = useTheme();
  const location = useLocation();
  const isBookPage = location.pathname === "/books";

  return (
    <>
      <main
        style={{
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
        }}>
        <Header />
        {children}
      </main>
      {isBookPage && <Footer />}
    </>
  );
}

export default Layout;
