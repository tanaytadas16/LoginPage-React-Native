import React from 'react';
import {
    View,
    TextInput,
    SafeAreaView,
    StyleSheet,
    Alert,
    Image,
} from 'react-native';
import { Button, VStack, Input } from 'native-base';
import { useNavigation } from '@react-navigation/native';

function Login() {
    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const navigation = useNavigation();

    const loginButtonPressed = () => {
        console.log(username, password);
        if (username === 'Admin' && password === 'Admin123') {
            console.warn('Login Successful');
            navigation.navigate('Profile', { name: username });
        } else {
            Alert.alert('Invalid Credentials');
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <VStack alignItems="center" space={4} style={styles.login}>
                <Image
                    source={require('../assets/login1.png')}
                    style={styles.logo}
                />
                <Input
                    value={username}
                    textContentType="none"
                    onChangeText={(text) => setUsername(text)}
                    size="md"
                    w="75%"
                    variant="outline"
                    style={styles.input}
                    placeholder="Username"
                />
                <Input
                    value={password}
                    type="password"
                    textContentType="none"
                    onChangeText={(pass) => setPassword(pass)}
                    size="md"
                    w="75%"
                    variant="outline"
                    style={styles.input}
                    placeholder="Password"
                />
                <Button
                    variant="subtle"
                    style={styles.button}
                    onPress={loginButtonPressed}
                >
                    Login
                </Button>
            </VStack>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    login: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        // alignContent: 'center',
    },
    input: {
        width: '50%',
        height: 40,
        // margin: 12,
        // borderWidth: 1,
        padding: 10,
    },
    button: { width: '50%' },
    logo: {
        width: 100,
        height: 100,
        marginBottom: '10%',
    },
});
export default Login;
