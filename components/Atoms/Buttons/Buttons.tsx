import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

type PropsType = {
    color?: 'primary' |'success' | 'danger' | 'warning',
    outline?: boolean,
    size?: 'small'| 'medium' | 'large',
    text?: string
}

const Buttons = ({color = 'primary', outline = false, size = 'medium', text = 'Button'}:PropsType)  => {

    const getColorStyle = () => {
        switch (color) {
            case 'success':
                return styles.success
            case 'danger':
                return styles.danger
            case 'warning':
                return styles.warning
            default:
                return styles.button
        }
    }

    const getSizeStlye = () => {
        switch (size) {
            case 'small':
                return { width: 60, height: 36 }
            case 'medium':
                return { width: 80, height: 44 }
            case 'large':
                return { width: 120, height: 46 }
            default: 
                return { width: 80, height: 44 }
        }
    }

    return (
        <Pressable style={[styles.baseButton, outline? styles.outline : getColorStyle(), getSizeStlye() ]}>
            <Text style={outline? styles.buttonTextDark : styles.buttonText }>{text}</Text>
        </Pressable>
    )
}

export default Buttons

const styles = StyleSheet.create({
    baseButton: {
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFF'
    },
    buttonTextDark: {
        color: '#253237'
    },
    button : {
        backgroundColor: '#253237',
    },
    outline: {
        borderWidth: 2,
        borderColor: '#253237',
        backgroundColor: 'transparent',
    },
    danger: {
        backgroundColor: '#dd403a',
    },
    success: {
        backgroundColor: '#23967f',
    },
    warning: {
        backgroundColor: '#ffc600',
    }
})