export default function detectTheme(setSystemTheme: (theme: string) => void) {
    const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

    const setColorScheme = (e: { matches: any; }) => {
        if (e.matches) {
            // Dark
            setSystemTheme('dark');
        } else {
            // Light
            setSystemTheme('light');
        }
    }


    colorSchemeQueryList.addEventListener('change', setColorScheme);
    return colorSchemeQueryList.matches ? 'dark' : 'light';
}