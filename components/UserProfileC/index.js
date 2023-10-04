import React, {Children} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

class UserProfileC extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleButton: false,
      TextInputValue: ' ',
    };
  }

  render() {
    const {textColor, textBGColor} = this.props;
    const {toggleButton, TextInputValue} = this.state;

    return (
      <View>
        <Text style={{color: textColor, backgroundColor: textBGColor}}>
          Hello World!
        </Text>
        <TextInput
          defaultValue="Enter the text"
          onChangeText={changedText => {
            console.log(changedText);
            this.setState({TextInputValue: changedText});
          }}
        />
        <Text>
          Button toggle state is: {toggleButton == true ? 'Yes' : 'No'}
        </Text>
        <Button
          onPress={() => {
            this.setState({toggleButton: !toggleButton});
            console.log('Button Pressed');
          }}
          title="Tap Button"
          color="#841584"
        />
      </View>
    );
  }
}

export default UserProfileC;
