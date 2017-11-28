import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput,Button, Slider, Picker, Switch, DatePickerIOS, ImagePickerIOS} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      input: ''
    }
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(){
    this.setState({input: value})
  }
  render() {
    let pic = {
      uri: 'https://www.nationalgeographic.com/content/dam/photography/PROOF/2017/August/sleeping-sperm-whale/01-sleeping-whale-pod.jpg'
    };
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text>WHATS UP MORGAN AND PETE</Text>
        <TextInput
       style={{height: 40, borderColor: 'gray', borderWidth: 1}}
       onChangeText={(text) => this.setState({text})}
       value={this.state.text}
      />
      <Slider />
      <Button
          onPress={() => {
            let text = this.state.text;
            this.setState({input: text})
          }}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>{this.state.input}</Text>
        <Picker
  >
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
<Switch />
<DatePickerIOS date={new Date()}/>

        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text>WHATS UP ASH</Text>
        <Text>WHATS UP ASH</Text>
        <Text>WHATS UP ASH</Text>
        <Text>WHATS UP ASH</Text>
        <Text>WHATS UP ASH</Text>

      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
