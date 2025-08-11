"use client";
import React, { useState, useEffect, createContext } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("dark");
    if (stored !== null) setDark(stored === "true");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("dark", dark.toString());
  }, [dark]);

  return (
    <PortfolioContext.Provider value={{ dark, setDark, showModal, setShowModal }}>
      {children}
    </PortfolioContext.Provider>
  );
};
