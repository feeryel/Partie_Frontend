import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Sidebar/Navbar";
import Section from "./Section";

import { dataEN } from "./data/EnglishData";
import { dataFR } from "./data/FrenchData";

export const DataContext = React.createContext<any>(null);

const SharedLayout = () => {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage || "English";
  });

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const data = language === "English" ? dataEN : dataFR;
  return (
    <DataContext.Provider value={data}>
      <>
        <Navbar onLanguageChange={handleLanguageChange} language={language} />
        <Section key={language} language={language} />
        <div className="outlet-section">
          <Outlet />
        </div>
      </>
    </DataContext.Provider>
  );
};

export default SharedLayout;
