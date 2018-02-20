import React, { Component } from 'react';
import { View } from 'react-native';

import Header from 'components/Header';
import Feed from 'components/Feed';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

export default class App extends Component {
  state = {

  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Feed />
      </View>
    );
  }
}
