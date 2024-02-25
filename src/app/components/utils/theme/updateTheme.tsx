"use client";
import { useState, useEffect } from "react";
import detectTheme from "@/app/components/utils/theme/detectTheme";

export default function useTheme(){
    // Get the current theme from local storage or default to system
    let [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
    let [systemTheme, setSystemTheme] = useState("");

    // Update the theme in the DOM

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove("dark");
        root.classList.remove("light");

        if (theme == "system") {
            if (systemTheme == "") {
                const curSystemTheme = detectTheme(setSystemTheme);
                root.classList.add(curSystemTheme);
                setSystemTheme(curSystemTheme);
            } else {
                root.classList.add(systemTheme);
            }
        } else {
            root.classList.add(theme);
        }

        localStorage.setItem("theme", theme);

    }, [theme, systemTheme]); // Only run when the theme changes

    return [ theme, setTheme ];
}