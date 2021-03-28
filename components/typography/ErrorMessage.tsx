import React from 'react';
import {InputLabel, InputLabelProps} from "./InputLabel";
import {withTheme} from "react-native-elements";

export const ErrorMessage = withTheme<InputLabelProps>(({theme, style, ...props}) => {
    return <InputLabel {...props} style={{...style, color: theme.colors?.error}}/>
})
