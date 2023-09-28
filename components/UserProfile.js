import React, {useState} from 'react';
import {View, Text, TextInput, Button, ScrollView} from 'react-native';

const UserProfile = props => {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const textInputStyle = {
    backgroundColor: 'Pink',
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
      />

      <TextInput
        value={lastName}
        defaultValue="Last Name"
        onChangeText={changedText => {
          setLastname(changedText);
        }}
      />

      <TextInput
        value={city}
        defaultValue="City"
        onChangeText={changedText => {
          setCity(changedText);
        }}
      />

      <TextInput
        value={country}
        defaultValue="Country"
        onChangeText={changedText => {
          setCountry(changedText);
        }}
      />

      <Button
        onPress={() => {
          props.onSubmitPressed({
            firstName,
            lastName,
            city,
            country,
          });
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
    </View>
  );
};

export default UserProfile;
