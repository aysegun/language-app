// app/javascript/components/Footer.jsx

import React from "react";

const Footer = () => (
  <footer
    style={{
      textAlign: "center",
      padding: "6px 15px",
      fontSize: "11px",
      color: "#555",
      backgroundColor: "#f8f8f8",
      borderTop: "1px solid #ddd",
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      userSelect: "none",
      zIndex: 1000,
      lineHeight: "1.2",
    }}
  >
    Icons by{" "}
    <a
      href="https://www.flaticon.com/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#0073e6", textDecoration: "none" }}
      onMouseOver={e => (e.currentTarget.style.textDecoration = "underline")}
      onMouseOut={e => (e.currentTarget.style.textDecoration = "none")}
    >
      Flaticon
    </a>
  </footer>
);

export default Footer;
