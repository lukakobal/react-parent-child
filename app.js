import React, { useState } from "react";
import "./styles.css";
import ThemeSwitcher from "./ThemeSwitcher";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>

      <ThemeSwitcher darkMode={darkMode} onToggle={handleToggle} />
    </div>
  );
}
