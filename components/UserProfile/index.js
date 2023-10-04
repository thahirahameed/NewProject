import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, ScrollView} from 'react-native';

const UserProfile = props => {
  const [firstName, setFirstname] = useState(props.firstName);
  const [lastName, setLastname] = useState(props.lastName);
  const [city, setCity] = useState(props.city);
  const [country, setCountry] = useState(props.country);

  useEffect(() => {
    console.log('hey! first name just got changed');
    setFirstname(props.firstName);
  }, [props.firstName]);

  useEffect(() => {
    console.log('hey! last name just got changed');
    setFirstname(props.lastName);
  }, [props.lastName]);

  useEffect(() => {}); //1. stupid - called all the time for everything

  useEffect(() => {}, []); //2. runs for the first time when component gets loaded

  useEffect(() => {}, [props.firstName, props.lastName]); //3. gets run when those dependencies get changed, OR relation

  useEffect(() => {
    return () => {
      //quickly unset, uninitialize, stop listing
    }; //4. return function runs when component is unmounting
  }, []);

  const textInputStyle = {
    backgroundColor: 'pink',
    height: 40,
    margin: 10,
    padding: 10,
  };

  return (
    <View style={{flex: 1}}>
      <TextInput
        value={firstName}
        defaultValue="First Name"
        onChangeText={changedText => {
          setFirstname(changedText);
        }}
        style={textInputStyle}
      />

      <TextInput
        value={lastName}
        defaultValue="Last Name"
        onChangeText={changedText => {
          setLastname(changedText);
        }}
        style={textInputStyle}
      />

      <TextInput
        value={city}
        defaultValue="City"
        onChangeText={changedText => {
          setCity(changedText);
        }}
        style={textInputStyle}
      />

      <TextInput
        value={country}
        defaultValue="Country"
        onChangeText={changedText => {
          setCountry(changedText);
        }}
        style={textInputStyle}
      />

      <Button
        onPress={() => {
          props.onSubmitPressed({
            firstName,
            lastName,
            city,
            country,
          });

          setFirstname('');
          setLastname('');
          setCity('');
          setCountry('');
        }}
        title="Submit"
        color="#841584"
      />

      <Button
        onPress={() => {
          props.onDeletePressed();
        }}
        title="Delete"
        color="#301004"
      />

      <Button
        onPress={() => {
          props.onForcefulUpdateRequest('Aarvin');
        }}
      />

      <View style={props.childrenStyle}>{props.children}</View>
    </View>
  );
};

export default UserProfile;
