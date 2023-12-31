import {ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface IUserThemeResult {
    toggleTheme: () => void;
    theme: ETheme
}

export function useTheme():IUserThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {theme, toggleTheme}
}