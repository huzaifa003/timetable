import { createUserWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth';
import React, { useEffect } from 'react';
import { View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements';
import { auth } from '../Components/DB';


const SignUp = ({ navigation }) => {

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.reset({ index: 0, routes: [{ name: "Home" }] })
                // console.log(user);
            }
        })
    }, [])
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [error, setError] = React.useState('');
    const [displayError, setDisplayError] = React.useState('None')
    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);

            navigation.navigate('SignIn');
        } catch (error) {
            setError('Sign up failed: ' + error.message);
            setDisplayError('')
        }
    };


    return (
        <View style={{}}>

            <Text style={{ backgroundColor: 'red', display: displayError }}> {error} </Text>
            <Input
                label="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <Input
                label="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
            />

            <Button title="Sign Up" onPress={handleSignUp} />
            <Text> </Text>
            <Button title="Already Have an Account? Sign In" onPress={() => { navigation.navigate("SignIn") }} />
        </View>
    );
};

export default SignUp;
