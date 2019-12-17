import styled from 'styled-components';

export const PageContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 250px;
  margin-top: 40px;
`;

export const PageTitle = styled.Text`
  font-family: 'Ubuntu';
  font-size: 19px;
  margin-bottom: 20px;
`;

export const DropdownListsBox = styled.View`
  border: 1px solid #000000;
  border-radius: 7px;
  background: #ffffff;
  margin-top: 15px;
  padding-left: 7px;
`;

export const DropdownLists = styled.Picker`
  font-family: 'Ubuntu';
`;

export const AdultsChildrenBoxes = styled.View`
  border: 1px solid #000000;
  border-radius: 7px;
  background: #ffffff;
  margin-top: 10px;
  padding-left: 7px;
  padding-right: 15px;
  margin-top: 15px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AdultsChildrenText = styled.Text`
  font-family: 'Ubuntu';
  font-size: 15.3px;
  padding-left: 7px;
`;

export const AdultsChildrenNumberBox = styled.View`
  width: 15px;
  height: 15px;
`;

export const AdultsChildrenNumberText = styled.TextInput`
  font-family: 'Ubuntu';
  border: 1px solid gray;
  border-radius: 1.5px;
  text-align: center;
  padding: 0px 2px;
  font-size: 11px;
  color: gray;
`;

export const PageLoaderContainer = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
