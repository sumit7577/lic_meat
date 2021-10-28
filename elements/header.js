import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Material from "react-native-vector-icons/MaterialIcons"

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.location}>
                <Material name="room" size={40} color="#efefef" />
                <Text style={
                    { color: "#efefef", fontSize: 15, fontWeight: "500" }
                }>
                    Delhi
                </Text>

            </View>
            <View style={styles.expand}>
                <Text style={
                    { color: "#efefef", fontSize: 15, fontWeight: "700" }
                }>
                    Delhi,India
                </Text>
                <Material name="expand-more" size={30} color="red" />
            </View>

            <View style={styles.right}>
                <Material name="notifications" size={30} color="red" style={
                    {
                        padding:10,
                        marginRight:10,
                    }
                }
                />
                <Material name="shopping-cart" size={30} color="#efefef"  />
            </View>

        </View>
    )
}


const styles = StyleSheet.create(
    {
        container: {
            flexDirection: "row",
        },
        location: {
            flexDirection: "row",
            maxWidth: 50,
            borderColor: "red",
        },
        expand: {
            flexDirection: "row",
            marginLeft: -10,
            marginTop: 20,
        },
        right:{
            flexDirection:"row",
            alignItems:"center",
            position:"absolute",
            right:1,
            alignSelf:"center",
        }
    }
)