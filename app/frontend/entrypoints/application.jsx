console.log('🌱 React entrypoint loaded');

import React from "react";
import { createRoot } from "react-dom/client";
import Home from "../components/Home";
import Lesson from "../components/Lesson";
import Colors from "../components/Colors";
import Animals from "../components/Animals";
import Footer from "../components/Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const renderPageWithFooter = (PageComponent) => {
  root.render(
    <>
      <PageComponent />
      <Footer />
    </>
  );
};

// Simple way to detect page
if (window.location.pathname === "/lesson") {
  renderPageWithFooter(Lesson);
}else if (window.location.pathname === "/colors") {
  renderPageWithFooter(Colors);
}else if (window.location.pathname === "/animals") {
  renderPageWithFooter(Animals);
}else {
  renderPageWithFooter(Home);
}
