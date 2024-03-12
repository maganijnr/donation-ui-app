import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import buttonStyles from './styles';

interface ButtonProps {
  buttonTitle: string;
  onPress: () => void;
  disabled: boolean;
}

const Button: FC<ButtonProps> = ({buttonTitle, onPress, disabled}) => {
  return (
    <TouchableOpacity style={buttonStyles.buttonWrapper}>
      <Text style={buttonStyles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default Button;
