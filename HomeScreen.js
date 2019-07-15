import React from 'react'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class HomeScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Text
        onPress={() => navigate('Profile')}>
        Ayyyy this some text
      </Text>
    );
  }
}

export default HomeScreen
