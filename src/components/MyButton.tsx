import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'


interface Props {
    title: string
}

const MyButton : FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
    container:{
        height:50,
        width:"50%",
        justifyContent:"center",
        alignItems:"center",
        // opacity: 0.7,
        backgroundColor: '#D9D9D9',
        shadowOpacity:0.5,
        borderRadius: 30
    },
    title:{
        color:"blue",
        fontSize: 20,
        fontFamily:"Redressed-Regular"
    }
})