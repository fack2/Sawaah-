import React from 'react';

import {
  NavBarWrapper,
  NavBarTextWrapper,
  NavBarText,
  NavBarLogo,
  NavBarLogoWrapper,
} from './index.style';

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavBarLogoWrapper>
        <NavBarLogo
          source={require('./../../../assets/images/airplane-logo.png')}
        />
      </NavBarLogoWrapper>

      <NavBarTextWrapper>
        <NavBarText>Home</NavBarText>
        <NavBarText>Profile</NavBarText>
      </NavBarTextWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;
