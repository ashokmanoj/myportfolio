"use client";
import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const getInitialTheme = () => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("myPortfolioProfileTheme") || "dark";
        }
        return "dark";
    };

    const [theme, setTheme] = useState(getInitialTheme);

    // Toggle Theme
    const setThemeFun = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("myPortfolioProfileTheme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    // Sync Theme on Mount
    useEffect(() => {
        const storedTheme = localStorage.getItem("myPortfolioProfileTheme");
        if (storedTheme && storedTheme !== theme) {
            setTheme(storedTheme);
            document.documentElement.classList.toggle("dark", storedTheme === "dark");
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setThemeFun }}>
            <div className={theme === "dark" ? "dark" : ""}>
                <div className="dark:text-white dark:bg-black">{children}</div>
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
