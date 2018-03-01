import React from 'react';
import { ScrollView, View } from 'react-native';
import Items from './Items';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

const List = ({ videos, navigation }) => {
     const navigate = navigation;
     const videoItems = videos.map(video =>(
         <Items
            key={video.etag}
            video={video}
            navigation={navigate}
        />
     ));
    return(
        <ScrollView>
            <View style={styles.containerStyle}>
                {videoItems}
            </View>
        </ScrollView>
    );
};


const styles = {
    containerStyle: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    }
}
export default List;
