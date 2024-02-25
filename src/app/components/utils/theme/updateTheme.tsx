import { useState, useEffect } from "react";
import detectTheme from "@/app/components/utils/theme/detectTheme";

export default function useTheme(){
    // Get the current theme from local storage or default to system
    let [theme, setTheme] = useState("");


    // Update the theme in the DOM

    useEffect(() => {
        const root = window.document.documentElement;
        if (!localStorage.getItem("theme")) {
            localStorage.setItem("theme", "system");
        }
        setTheme(localStorage.getItem("theme") || "system");
        if (theme === "system") {
            const systemTheme = detectTheme();
            console.log(systemTheme);
            root.classList.add(systemTheme);
        } else {
            root.classList.add(theme);
        }

        localStorage.setItem("theme", theme); // Whenever the theme changes, update local storage
    }, [theme]); // Only run when the theme changes

    return [ theme, setTheme ];
}