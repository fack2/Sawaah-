import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ScrollView, ActivityIndicator} from 'react-native';

import {
  getDestinationCountries,
  selectCountry,
  selectDate,
  selectClassType,
  changeAdultsNumber,
  changeChildrenNumber,
  enableDateDropdownList,
  enableClassDropdownList,
} from '../../../actions/defaultAppActions';

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
  PageLoaderContainer,
} from './index.style';

class Destination extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.props.getDestinationCountries();
  }

  handleCountrySelection = country => {
    const {dateDropdownListEnabled, classDropdownListEnabled} = this.props;

    this.props.selectCountry(country);

    this.props.enableDateDropdownList(dateDropdownListEnabled);

    this.props.enableClassDropdownList(classDropdownListEnabled);
  };

  handleDateSelection = (date, classDropdownListEnabled) => {
    this.props.selectDate(date);
    this.props.enableClassDropdownList(classDropdownListEnabled);
  };

  handleClassTypeSelection = classType => {
    this.props.selectClassType(classType);
  };

  handleAdultsNumberChange = destinationAdultsNumber => {
    this.props.changeAdultsNumber(destinationAdultsNumber);
  };

  handleChildrenNumberChange = childrenNumber => {
    this.props.changeChildrenNumber(childrenNumber);
  };

  onSearchButtonPress = () => {
    const {navigate} = this.props.navigation;
    return navigate('SearchResult');
  };

  render() {
    const {
      destinationCountries,
      country,
      date,
      classType,
      destinationAdultsNumber,
      childrenNumber,
      dateDropdownListEnabled,
      classDropdownListEnabled,
    } = this.props;

    return (
      <>
        {destinationCountries ? (
          <ScrollView>
            <NavBar />
            <PageContainer>
              <PageTitle>Where do you want to fly to?</PageTitle>
              <DropdownListsBox>
                <DropdownLists
                  selectedValue={country}
                  onValueChange={this.handleCountrySelection}>
                  <DropdownLists.Item label="Country" value="Country" />
                  {destinationCountries.map(ele => {
                    return (
                      <DropdownLists.Item
                        key={ele.destination_id}
                        label={ele.country}
                        value={ele.country}
                      />
                    );
                  })}
                </DropdownLists>
              </DropdownListsBox>

              <DropdownListsBox>
                <DropdownLists
                  selectedValue={date}
                  onValueChange={this.handleDateSelection}
                  enabled={dateDropdownListEnabled}>
                  <DropdownLists.Item label="Date" value="Date" />
                  {destinationCountries ? (
                    destinationCountries
                      .filter(ele => ele.country === country)
                      .map(ele => {
                        return (
                          <DropdownLists.Item
                            key={ele.destination_id}
                            label={ele.date}
                            value={ele.date}
                          />
                        );
                      })
                  ) : (
                    <></>
                  )}
                </DropdownLists>
              </DropdownListsBox>

              <DropdownListsBox>
                <DropdownLists
                  selectedValue={classType}
                  onValueChange={this.handleClassTypeSelection}
                  enabled={classDropdownListEnabled}>
                  <DropdownLists.Item label="Class" value="Class" />
                  <DropdownLists.Item label="First Class" value="First Class" />
                  <DropdownLists.Item
                    label="Business Class"
                    value="Business Class"
                  />
                  <DropdownLists.Item
                    label="Economy Class"
                    value="Economy Class"
                  />
                </DropdownLists>
              </DropdownListsBox>

              <AdultsChildrenBoxes>
                <AdultsChildrenText>Adults</AdultsChildrenText>
                <AdultsChildrenNumberBox>
                  <AdultsChildrenNumberText
                    value={destinationAdultsNumber}
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

              <Button
                ButtonTextValue="Search"
                onButtonPress={this.onSearchButtonPress}
              />
            </PageContainer>
          </ScrollView>
        ) : (
          <PageLoaderContainer>
            <ActivityIndicator size="large" color="blue" />
          </PageLoaderContainer>
        )}
      </>
    );
  }
}

const mapStateToProps = ({
  defaultAppReducer: {
    destinationCountries,
    country,
    date,
    classType,
    destinationAdultsNumber,
    childrenNumber,
    dateDropdownListEnabled,
    classDropdownListEnabled,
  },
}) => {
  return {
    destinationCountries,
    country,
    date,
    classType,
    destinationAdultsNumber,
    childrenNumber,
    dateDropdownListEnabled,
    classDropdownListEnabled,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getDestinationCountries,
      selectCountry,
      selectDate,
      selectClassType,
      changeAdultsNumber,
      changeChildrenNumber,
      enableDateDropdownList,
      enableClassDropdownList,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Destination);
