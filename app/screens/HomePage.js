import React from 'react';
import { View, TextInput, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Button } from 'native-base';

function HomePage({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Button
                variant="subtle"
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
            >
                Login
            </Button>
            <Button variant="subtle" style={styles.button}>
                Register
            </Button>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        // alignContent: 'center',
        flex: 1,
    },
    button: {
        width: '50%',
        margin: 10,
    },
    logo: {
        width: 300,
        height: 300,
        marginBottom: '10%',
    },
});
export default HomePage;
