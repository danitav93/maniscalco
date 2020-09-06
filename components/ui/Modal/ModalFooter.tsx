import React, {FC} from "react";
import {StyleSheet, View} from "react-native";
import {useSelector} from "react-redux";
import {ReduxState} from "../../../redux/reducer";
import {Button, Text, withTheme} from "react-native-elements";

const modalErrorSelector = (state: ReduxState) => state.modal.errorMessage;
const modalIsLoadingSelector = (state: ReduxState) => state.modal.isLoading;


const ModalFooter: FC = (props) => {

    const errorMessage = useSelector(modalErrorSelector);
    const isLoading = useSelector(modalIsLoadingSelector);

    return (
        <View style={styles.container}>
            {!isLoading ? (<>{errorMessage && (<Text style={{color: props.theme.colors.error}}>
                {errorMessage}
            </Text>)}
                {props.children}</>) : (<Button loading={isLoading} type={"clear"}/>)}

        </View>);

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
});

export default withTheme(ModalFooter)
