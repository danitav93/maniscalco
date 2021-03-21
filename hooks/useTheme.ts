import {useContext} from "react";
import {ThemeContext} from "react-native-elements";

export const useTheme = () => {
    const {theme} = useContext(ThemeContext);
    return theme;
}
