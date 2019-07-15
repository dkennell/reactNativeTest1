/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './HomeScreen'
import Appy from './Appy'

// const App = () => {
//   return (
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic">
//           <View>
//             <Text>asfd</Text>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </Fragment>
//   );
// };
//
// export default App;

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: Appy},
});

const App = createAppContainer(MainNavigator);

export default App;
