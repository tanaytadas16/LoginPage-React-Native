import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'native-base';

function Profile({ route, navigation }) {
    const { name } = route.params;

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/user.png')}
                style={styles.image}
            />

            <Text>Hi {name}</Text>
            <Button
                variant="subtle"
                colorScheme="secondary"
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                Logout
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
        margin: '10%',
    },
    image: { width: 70, height: 70 },
});

export default Profile;
