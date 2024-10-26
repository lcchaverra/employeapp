import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

type PropsType = {
    placeholder: string,
    onChangeText?: (text: string) => void
    keyBoardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'url'
    value: any,
    maxLength? : number,
    numberOfLines?: number,
    multiline?: boolean
}

const TInputs = (
    {
        placeholder = 'default', 
        onChangeText, 
        keyBoardType = 'default', 
        value,
        maxLength = 100,
        numberOfLines = 1,
        multiline = false
        }: PropsType
    ) => {
    return (
        <TextInput
            placeholder={placeholder}
            style={styles.input}
            onChangeText= {onChangeText}
            keyboardType= {keyBoardType}
            value={value}
            multiline={multiline}
            numberOfLines={numberOfLines}
            maxLength={maxLength}
        />
    )
}

export default TInputs

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
    }

})