import React, { Component } from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search';
import Search from './Search';
import List from './List';
import { StackNavigator } from 'react-navigation';


const API_KEY = 'AIzaSyBCFerpRh0FJedeieAC8yKybF02WbgnsEI';

export default class Home extends Component {

    constructor(props) {
    super(props);

    this.state = {
      loading: false,
      navigation: this.props.navigation,
      videos: [],
    };
  }

  componentWillMount(){
    this.searchYT('Valentina Lisitsa');
  }

  onPressSearch = term => {
    this.searchYT(term);
  }

  searchYT = term => {
    this.setState({ loading: true });
    YTSearch({key: API_KEY, term }, videos => {
      //console.log(videos);
      this.setState({
        loading: false,
        videos
      });
    });
  }

  render() {
    const { loading, videos, navigation } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <Search
            loading={loading}
            onPressSearch={this.onPressSearch} />
        <List videos={videos} navigation={navigation} />
      </View>
    );
  }
}
