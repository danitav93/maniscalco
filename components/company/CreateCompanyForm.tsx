import React, {FC} from "react";
import {StyleSheet, View} from "react-native";
import {withTheme} from 'react-native-elements';
import UncontrolledInput from "../ui/UncontrolledInput";


const CreateCompanyForm: FC = (props) => {

    return (<View style={styles.container}>
        <UncontrolledInput
            placeholder='Nome'
            name="name"
        />
        <UncontrolledInput
            placeholder='Email'
            name="email"
            leftIcon={{
                name: 'envelope',
                type: 'font-awesome'
            }}
        />
        <UncontrolledInput
            placeholder='Numero'
            name="phone"
            leftIcon={{
                name: 'phone',
                type: 'font-awesome'
            }}
        />
    </View>)
}


const styles = StyleSheet.create({
    container: {
        width: 500,
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
    },
});


export default withTheme(CreateCompanyForm);
