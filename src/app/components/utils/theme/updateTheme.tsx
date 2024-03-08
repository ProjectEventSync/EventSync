"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import detectTheme from "@/app/components/utils/theme/detectTheme";

export default function useUserTheme() : [string, React.Dispatch<React.SetStateAction<string>>] {
    const { theme, setTheme } = useTheme();
    const [userTheme, setUserTheme] = useState<string>("");

    useEffect(() => {
        if (userTheme) {
            if (userTheme === "system") {
                detectTheme(setTheme);
            }
            setTheme(userTheme);
        }
    }, [userTheme]);

    return [userTheme, setUserTheme];
}