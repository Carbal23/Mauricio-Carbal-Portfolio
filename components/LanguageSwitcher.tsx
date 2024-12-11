"use client";

import { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";

const LanguageSwitcher = () => {
  const currentLocale = Cookies.get("locale");
  const [locale, setLocale] = useState(currentLocale || "es");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLanguage = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `locale=${newLocale}; path=/`; // Establece la cookie
    window.location.reload(); // Recarga para aplicar el idioma
  };

  // Cerrar el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative mr-4" >
      {/* Botón del Dropdown */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {locale === "es" ? "Español" : "English"}
      </button>

      {/* Menú desplegable */}
      {isDropdownOpen && (
        <div
          className="absolute mt-2 w-28 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50"
          style={{ minWidth: "8rem" }} 
        >
          <button
            onClick={() => switchLanguage("es")}
            disabled={locale === "es"}
            className={`block w-full text-left px-4 py-2 text-sm font-medium ${
              locale === "es"
                ? "text-gray-400 dark:text-gray-500 cursor-not-allowed"
                : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            Español
          </button>
          <button
            onClick={() => switchLanguage("en")}
            disabled={locale === "en"}
            className={`block w-full text-left px-4 py-2 text-sm font-medium ${
              locale === "en"
                ? "text-gray-400 dark:text-gray-500 cursor-not-allowed"
                : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
