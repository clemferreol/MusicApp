import React from 'react';
import { StyleSheet, Text, View, WebView, Platform, TextInput, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          breakpoint:""
        };
    }
  render() {
    const breakpoint = this.state.breakPoint
    const { params } = this.props.navigation.state;
    return (
      <View  style={{ height: 500 }}>
        <WebView
        style={ styles.WebViewContainer }
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri:`https://www.youtube.com/embed/${params.idVideo}?start=${breakpoint}`}} />

        <TextInput
          placeholder="Example : 344"
          onChangeText={breakPoint => this.setState({breakPoint})}
          style={{textAlign: 'center', marginBottom: 7, height: 50}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  WebViewContainer: {

    marginTop: (Platform.OS == 'ios') ? 20 : 0,

  }

});
