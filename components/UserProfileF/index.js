import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const UserProfileF = props => {
  const [toggleButton, setToggleButton] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');

  const {extBGColor, textColor} = props;

  return (
    <View>
      <Text style={{color: 'red', backgroundColor: 'blue'}}>Hello World!</Text>
      <TextInput
        defaultValue="Enter the text"
        onChangeText={changedText => {
          console.log(changedText);
        }}
      />
      <Text>Button toggle state is: {toggleButton == true ? 'Yes' : 'No'}</Text>
      <Button
        onPress={() => {
          setToggleButton(!toggleButton);
        }}
        title="Tap Button"
        color="#841584"
      />
    </View>
  );
};

export default UserProfileF;
