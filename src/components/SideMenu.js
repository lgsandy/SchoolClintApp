import React, {Component} from 'react';
import {Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import {List, ListItem} from 'native-base';
import {IMAGE} from '../constants/image';

export class SideMenu extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={IMAGE.ICON_DEFAULT_USER}
            style={{height: 120, width: 120, borderRadius: 60}}
          />
        </View>
        <ScrollView>
          <List>
            <ListItem onPress={() => this.props.navigation.navigate('Setting')}>
              <Text>Setting</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('Profile')}>
              <Text>Profile</Text>
            </ListItem>
          </List>
        </ScrollView>
        <List>
          <ListItem
            noBorder
            onPress={() => this.props.navigation.navigate('auth')}>
            <Text>Logout</Text>
          </ListItem>
        </List>
      </SafeAreaView>
    );
  }
}
