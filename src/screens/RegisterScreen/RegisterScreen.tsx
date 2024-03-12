import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import registerStyles from './styles';
import HeaderText from '../../components/HeaderText/HeaderText';
import {horizontalScale, scaleFontSize, verticalScale} from '../../scaling';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';

const RegisterScreen = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');

  return (
    <SafeAreaView style={registerStyles.pageContainer}>
      <Pressable
        style={{
          position: 'absolute',
          top: verticalScale(80),
          left: horizontalScale(15),
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          size={scaleFontSize(20)}
          color="#156CF7"
        />
      </Pressable>
      <KeyboardAvoidingView
        enabled
        //@ts-ignore
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={registerStyles.pageContentWrapper}>
        <HeaderText title="Hello and Welcome !" />
        <FormInput
          label="Full name"
          value={fullName}
          setValue={setFullName}
          keyBoardType="default"
          placeholder="John Doe"
        />
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
          <Button buttonTitle="Register" onPress={() => {}} disabled={false} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
