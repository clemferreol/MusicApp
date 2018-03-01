import React from 'react';
import { View, Text, Image, WebView } from 'react-native';
import { Card } from 'react-native-elements';
import TrackPlayer from './TrackPlayer';
import { Button } from 'react-native-elements';
import { WebBrowser } from 'expo';
import {StackNavigator}  from 'react-navigation';
import App from '../App';

class Items extends React.Component {
  state = {
    video: this.props.video
  }
  render(){
    const {
        cardStyle,
        imageStyle,
        contentStyle,
        titleStyle,
        channelTitleStyle,
        descriptionStyle
     } = styles;
    const {
        title,
        channelTitle,
        description,
        thumbnails: { medium: { url } }
    } = this.state.video.snippet;

    const videoId =  this.state.video.id.videoId;

    return(
      <View>
           <Card title={null} containerStyle={cardStyle}>
              <Image
                  style={imageStyle}
                  source= {{ uri: url}}
              />
              <View style={contentStyle}>
                  <Text style={titleStyle}>
                      {title}
                  </Text>
                  <Text style={channelTitleStyle}>
                      {channelTitle}
                  </Text>
                  <Text style={descriptionStyle}>
                      {description}
                  </Text>

                  <Button
                    raised
                    title="Save And Play"
                    icon={{ name: 'play-arrow' }}
                    containerViewStyle={{ marginTop: 10 }}
                    backgroundColor="#E62117"
                    onPress={() => this.props.navigation.navigate('TrackPlayer', { idVideo: videoId }) }
                  />

              </View>
           </Card>
      </View>

    );
  }
}


const styles = {
  cardStyle: {
    padding: 5
  },
  imageStyle: {
    alignSelf: 'stretch',
    height: 180
  },
  contentStyle: {
    flex: 1,
    padding: 5
  },
  titleStyle: {
    fontSize: 12,
    marginBottom: 5
  },
  channelTitleStyle: {
    fontSize: 11,
    color: '#777',
    marginBottom: 5,
    alignSelf: 'flex-end'
  },
  descriptionStyle: {
    fontSize: 11,
    alignSelf: 'center'
  }
};
export default Items;
