import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import loginStyles from './styles';
import HeaderText from '../../components/HeaderText/HeaderText';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';
import {verticalScale} from '../../scaling';

const LoginScreen = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <SafeAreaView style={loginStyles.pageContainer}>
      <KeyboardAvoidingView
        enabled
        //@ts-ignore
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={loginStyles.pageContentWrapper}>
        <HeaderText title="Welcome Back" />
        <FormInput
          label="Email"
          value={email}
          setValue={setEmail}
          keyBoardType="email-address"
          placeholder="username@gmail.com"
        />
        <FormInput
          label="Password"
          value={password}
          setValue={setPassword}
          keyBoardType="default"
          secureText={true}
          placeholder="******"
        />
        <View style={{marginTop: verticalScale(20)}}>
          <Button buttonTitle="Login" onPress={() => {}} disabled={false} />
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate('Register');
          }}
          style={loginStyles.redirectButton}>
          <Text style={loginStyles.redirectText}>Don’t have an account?</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
