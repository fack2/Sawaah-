import styled from 'styled-components';

export const NavBarWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  border-bottom-width: 1px;
`;

export const NavBarLogoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 60px;
`;

export const NavBarLogo = styled.Image`
  width: 40px;
  height: 40px;
`;

export const NavBarTextWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 160px;
`;

export const NavBarText = styled.Text`
  font-family: 'Signika';
  font-size: 14px;
  color: #2e5d6a;
  font-weight: bold;
`;
