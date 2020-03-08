import React, {Component} from 'react';
import {View} from 'react-native';
import {Text} from 'native-base';
import {CustomHeader} from '../CustomHeader';

export class Setting extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <CustomHeader
          title="Setting Details"
          navigation={this.props.navigation}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Seeting Screen</Text>
        </View>
      </View>
    );
  }
}
