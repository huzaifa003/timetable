import {  onAuthStateChanged, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useEffect } from 'react';
import {View} from 'react-native'
import { Text, Input, Button } from 'react-native-elements';
import {auth} from '../Components/DB';


const SignIn = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [error, setError] = React.useState('');
  const [displayError, setDisplayError] = React.useState('None')

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
        if (user){
            navigation.reset({index: 0, routes : [{name: "Home"}]})
            // console.log(user);
        }
    })
  },[])
  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth,email, password);

      navigation.navigate('SignIn');
    } catch (error) {
      setError('Sign In failed: ' + error.message);
      setDisplayError('')
    }
  };


  return (
    <View style={{}}>
      
        <Text style={{backgroundColor: 'red', display: displayError }}> {error} </Text>
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

      <Button title="Sign In" onPress={handleSignIn} />

    </View>
  );
};

export default SignIn;
