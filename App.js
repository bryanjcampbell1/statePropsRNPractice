import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert, AppRegistry, Text } from 'react-native';


export default class App extends React.Component {
  render() {
    return < MainApp/>;
  }
}

class MainApp extends Component {

  constructor(props) {
    super(props);
    this.state = { tapNumber: 0 };
  }

handleClick = () => {
      // your logic
      this.setState({
      tapNumber: 1 + this.state.tapNumber,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this.handleClick} title="Click Me" color="#FFFFFF" accessibilityLabel="Tap on Me" />
          <CustomText taps={this.state.tapNumber} />
        </View>
      </View>
    );
  }
}

class CustomText extends Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <View>
          <Text>Tap Number is {this.props.taps}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
})

