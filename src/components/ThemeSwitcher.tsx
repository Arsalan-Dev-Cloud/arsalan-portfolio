import { useState } from "react";
import { SunMoon } from "lucide-react";
import { useTheme } from "../context/useTheme";
import type { Theme } from "../context/ThemeContext";


interface ThemeOption {
  name: string;
  value: Theme;
  icon: string;
}

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const [isOpen, setIsOpen] =
    useState<boolean>(false);

  const themes: ThemeOption[] = [
    {
      name: "Midnight",
      value: "midnight",
      icon: "🌑",
    },
    {
      name: "Light",
      value: "light",
      icon: "☀️",
    },
    {
      name: "Ocean",
      value: "ocean",
      icon: "🌊",
    },
    {
      name: "Forest",
      value: "forest",
      icon: "🌲",
    },
    {
      name: "Crimson",
      value: "crimson",
      icon: "🔥",
    },
  ];

  const handleThemeChange = (
    selectedTheme: Theme
  ) => {
    setTheme(selectedTheme);
    setIsOpen(false);
  };

  return (
    <div className="theme-switcher">
      <button
        className="theme-toggle"
        onClick={() =>
          setIsOpen((previous) => !previous)
        }
        aria-label="Change website theme"
        aria-expanded={isOpen}
        type="button"
      >
        <SunMoon size={20} strokeWidth={1.8} />
      </button>

      {isOpen && (
        <div className="theme-menu">
          <p className="theme-title">
            Choose Theme
          </p>

          {themes.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`theme-option ${
                theme === item.value
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleThemeChange(item.value)
              }
            >
              <span
                className="theme-option-icon"
                aria-hidden="true"
              >
                {item.icon}
              </span>

              <span>{item.name}</span>

              {theme === item.value && (
                <span
                  className="theme-check"
                  aria-hidden="true"
                >
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ThemeSwitcher;