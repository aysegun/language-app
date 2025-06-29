console.log('🌱 React entrypoint loaded');

import React from "react";
import { createRoot } from "react-dom/client";
import Home from "../components/Home";
import Lesson from "../components/Lesson";
import Colors from "../components/Colors";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Simple way to detect page
if (window.location.pathname === "/lesson") {
  root.render(<Lesson />);
}else if (window.location.pathname === "/colors") {
  root.render(<Colors />);
}else {
  root.render(<Home />);
}
