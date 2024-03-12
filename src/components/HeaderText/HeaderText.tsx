import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {getFontFamily} from '../../../assets/fonts/helper';
import {scaleFontSize} from '../../scaling';

interface HeaderProps {
  title: string;
}

const HeaderText: FC<HeaderProps> = ({title}) => {
  return (
    <Text
      style={{
        color: '#022150',
        fontFamily: getFontFamily('Inter', '600'),
        fontSize: scaleFontSize(24),
      }}>
      {title}
    </Text>
  );
};

export default HeaderText;
