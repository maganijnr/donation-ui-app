import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import buttonStyles from './styles';

interface ButtonProps {
  buttonTitle: string;
  onPress: () => void;
  disabled: boolean;
  isLoading: boolean;
}

const Button: FC<ButtonProps> = ({
  buttonTitle,
  onPress,
  disabled,
  isLoading,
}) => {
  return (
    <TouchableOpacity style={buttonStyles.buttonWrapper} onPress={onPress}>
      <Text style={buttonStyles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default Button;
