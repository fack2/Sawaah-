import React from 'react';
import {ButtonWrapper, ButtonText} from './index.style';

const Button = ({BtnText, onButtonPress}) => {
  return (
    <ButtonWrapper onPress={onButtonPress}>
      <ButtonText>{BtnText}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
