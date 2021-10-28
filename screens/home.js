import React from 'react'
import { StyleSheet, View,SafeAreaView } from 'react-native';
import Header from '../elements/header';
import Search from '../elements/search';
export default function Home() {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{
                height: "100%",
                margin: 10,
                marginTop:40,
            }}>
                <Header />
                <Search />
            </SafeAreaView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
            backgroundColor:"#1c1c1c",
            padding:10,
    },
});