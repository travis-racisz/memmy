import React, {useCallback} from "react";
import {StyleSheet, TextInput} from "react-native";
import {Text, VStack} from "native-base";

interface TextInputProps {
    name: string,
    value: string,
    onChange?: (name: string, value: string) => void|Promise<void>,
    placeholder: string,
    label: string,
    style?: object,
    secure?: boolean,
    autoCapitalize?: "none" | "sentences" | "words" | "characters",
    autoCorrect?: boolean,
    autoFocus?: boolean,
    autoFocusConditional?: boolean
}

const CTextInput = (
    {
        name,
        value,
        onChange,
        placeholder,
        label,
        style = {},
        secure = false,
        autoCapitalize = "sentences",
        autoCorrect = true,
        autoFocus = false,
    }: TextInputProps) =>
{
    const ref = useCallback(node => {
        if(!node) return;

        if(autoFocus) node.focus();
    }, []);

    return (
        <VStack>
            <Text mx={3}>
                {label}
            </Text>
            <TextInput
                placeholder={placeholder}
                style={[styles.input, style]}
                value={value}
                onChangeText={(value) => onChange(name, value)}
                autoCapitalize={autoCapitalize}
                autoCorrect={autoCorrect}
                secureTextEntry={secure}
                ref={ref}
            />
        </VStack>
    );
};

const styles = StyleSheet.create({
    input: {
        alignSelf: "stretch",
        backgroundColor: "white",
        marginHorizontal: 10,
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
    },
});

export default CTextInput;
