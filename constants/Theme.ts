export interface ManiscalcoThemeColors {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    buttonText: string;
    inputBackground: string;
    secondary: string;
    secondaryLight: string;
    primaryText: string;
    secondaryDark: string;
    modalBackground: string;
    white: string;
    placeholder: string;
}

const maniscalcoColors: ManiscalcoThemeColors = {
    primary: "#263238",
    primaryLight: "#4f5b62",
    placeholder: "#8b949c",
    primaryDark: "#000A12",
    buttonText: "#FFFFFF",
    inputBackground: "#FFFFFF",
    secondary: "#CED7DB",
    secondaryLight: "#FFFFFF",
    primaryText: "#000000",
    secondaryDark: "#9DA6A9",
    modalBackground: "rgba(0, 10, 18, 0.61)",
    white: "#FFFFFF",

};

export const theme = {
  colors: maniscalcoColors
}
