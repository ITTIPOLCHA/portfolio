import React from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <ScrollToTop />
      {children}
      <Footer />
    </div>
  );
}
