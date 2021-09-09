import React, {Component} from 'react';
import {Text} from 'react-native';
import {inject, observer} from 'mobx-react';

interface TestProps {
  testStore: any
}

@inject('testStore')
@observer
export default class Test extends Component<TestProps> {
  render() {
    const {testStore} = this.props;
    return (
      <>
        <Text>{testStore.count}</Text>
      </>
    )
  }
}