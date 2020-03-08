import React, {Component} from 'react';
import {View} from 'react-native';
import {Text, Button} from 'native-base';
import {CustomHeader} from '../../CustomHeader';

export class Search extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <CustomHeader
          title="Search"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Search Screen!</Text>
          <Button
            light
            onPress={() => this.props.navigation.navigate('SearchDetails')}>
            <Text>Go to Search Details</Text>
          </Button>
        </View>
      </View>
    );
  }
}
