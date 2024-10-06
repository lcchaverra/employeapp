import { StyleSheet, Text } from 'react-native'
import React from 'react'

type TextProps = {
    type? : 'small' | 'normal' | 'title',
    text: string
}
const Texts = ({text = 'Text', type = 'normal'}: TextProps) => {
    const getTypeStyle = () => {
        switch (type) {
            case 'small':
                return styles.small
            case 'normal':
                return styles.normal
            case 'title':
                return styles.title
            default:
                return styles.normal
        }
    }

    return (
        <Text style={[styles.baseText, getTypeStyle()]} >{text}</Text>
    )
}

export default Texts

const styles = StyleSheet.create({
    baseText: {
        color: '#253237',
        marginHorizontal: 30,
        textAlign: 'center'
    },
    small:{
        fontSize: 14,
        marginBottom: 12
    },
    normal:{
        fontSize: 16,
        marginBottom: 15
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 15
    }
})