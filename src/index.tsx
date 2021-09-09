import React, {Component} from 'react';
import {Provider} from "mobx-react";
import {SafeAreaView} from 'react-native';
import stores from './stores';
import Test from './components/Test';
import User from './components/User';

export default class Index extends Component {
  render() {
    return (
      <Provider {...stores}>
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Test />
          <User />
        </SafeAreaView>
      </Provider>
    )
  }
}