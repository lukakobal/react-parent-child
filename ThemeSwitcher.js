import React from "react";

export default function ThemeSwitcher({ darkMode, onToggle }) {
  return (
    <button onClick={onToggle}>
      {darkMode ? "Switch to Light" : "Switch to Dark"}
    </button>
  );
}
