import {View, Text, TextInput} from 'react-native';
import React, {Dispatch, FC, SetStateAction} from 'react';
import inputStyles from './style';

interface IProps {
  label?: string;
  value: string;
  keyBoardType?:
    | 'default'
    | 'numeric-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url';
  setValue: Dispatch<SetStateAction<string>>;
  secureText?: boolean;
  placeholder?: string;
}

const FormInput: FC<IProps> = ({
  label,
  value,
  setValue,
  keyBoardType = 'default',
  secureText = false,
  placeholder,
}) => {
  return (
    <View style={inputStyles.inputContainer}>
      {label && <Text style={inputStyles.inputLabel}>{label}</Text>}
      <TextInput
        style={inputStyles.input}
        onChangeText={value => setValue(value)}
        value={value}
        //@ts-ignore
        keyboardType={keyBoardType}
        secureTextEntry={secureText}
        placeholder={placeholder}
        placeholderTextColor={'#969AA8'}
      />
    </View>
  );
};

export default FormInput;
