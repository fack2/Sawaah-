import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  countrySelector,
  dateSelector,
  classTypeSelector,
  adultsNumberChange,
  childrenNumberChange,
} from './../../../actions';
import Button from './../../SharedComponent/Button';
import NavBar from './../../SharedComponent/NavBar';

import {
  PageTitle,
  PageContainer,
  DropdownListsBox,
  DropdownLists,
  AdultsChildrenBoxes,
  AdultsChildrenText,
  AdultsChildrenNumberBox,
  AdultsChildrenNumberText,
} from './index.style';

class Destination extends Component {
  handleCountryChange = country => {
    this.props.countrySelector(country);
  };

  handleDateChange = date => {
    this.props.dateSelector(date);
  };

  handleClassTypeChange = classType => {
    this.props.classTypeSelector(classType);
  };

  handleAdultsNumberChange = adultsNumber => {
    this.props.adultsNumberChange(adultsNumber);
  };

  handleChildrenNumberChange = childrenNumber => {
    this.props.childrenNumberChange(childrenNumber);
  };

  onButtonPress = () => {
    const {navigate} = this.props.navigation;
    return navigate('SearchResult');
  };

  render() {
    const {country, date, classType, adultsNumber, childrenNumber} = this.props;
    return (
      <>
        <NavBar />
        <PageContainer>
          <PageTitle>Where do you want to fly to?</PageTitle>
          <DropdownListsBox>
            <DropdownLists
              selectedValue={country}
              onValueChange={this.handleCountryChange}>
              <DropdownLists.Item label="Country" value="Country" />
              <DropdownLists.Item label="France" value="France" />
              <DropdownLists.Item label="Italy" value="Italy" />
            </DropdownLists>
          </DropdownListsBox>
          <DropdownListsBox>
            <DropdownLists
              selectedValue={date}
              onValueChange={this.handleDateChange}>
              <DropdownLists.Item label="Date" value="Date" />
              <DropdownLists.Item
                label="Monday 25th of Nov"
                value="Monday 25th of Nov"
              />
            </DropdownLists>
          </DropdownListsBox>
          <DropdownListsBox>
            <DropdownLists
              selectedValue={classType}
              onValueChange={this.handleClassTypeChange}>
              <DropdownLists.Item label="Class" value="Class" />
              <DropdownLists.Item
                label="Business Class"
                value="Business Class"
              />
              <DropdownLists.Item label="First Class" value="First Class" />
              <DropdownLists.Item label="Economy Class" value="Economy Class" />
            </DropdownLists>
          </DropdownListsBox>
          <AdultsChildrenBoxes>
            <AdultsChildrenText>Adults</AdultsChildrenText>
            <AdultsChildrenNumberBox>
              <AdultsChildrenNumberText
                value={adultsNumber}
                onChangeText={this.handleAdultsNumberChange}
                placeholder="0"
              />
            </AdultsChildrenNumberBox>
          </AdultsChildrenBoxes>
          <AdultsChildrenBoxes>
            <AdultsChildrenText>Children</AdultsChildrenText>
            <AdultsChildrenNumberBox>
              <AdultsChildrenNumberText
                value={childrenNumber}
                onChangeText={this.handleChildrenNumberChange}
                placeholder="0"
              />
            </AdultsChildrenNumberBox>
          </AdultsChildrenBoxes>
          <Button ButtonTextValue="Search" onButtonPress={this.onButtonPress} />
        </PageContainer>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    country: state.country,
    date: state.date,
    classType: state.classType,
    adultsNumber: state.adultsNumber,
    childrenNumber: state.childrenNumber,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      countrySelector,
      dateSelector,
      classTypeSelector,
      adultsNumberChange,
      childrenNumberChange,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Destination);
