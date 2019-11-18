import React from 'react';
import {ButtonWrapper, ButtonText} from './index.style';

const Button = ({ButtonTextValue, onButtonPress}) => {
  return (
    <ButtonWrapper onPress={onButtonPress}>
      <ButtonText>{ButtonTextValue}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
