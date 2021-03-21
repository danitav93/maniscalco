import 'react-native-elements'
import {ManiscalcoThemeColors} from "../constants/Theme";

declare module 'react-native-elements' {


    export interface Colors extends ManiscalcoThemeColors {
    }


    export interface FullTheme {
        colors: RecursivePartial<Colors>;
    }
}
