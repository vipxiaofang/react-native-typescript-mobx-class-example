import React, {Component} from 'react';
import {Text, Button} from 'react-native';
import {inject, observer} from 'mobx-react';

interface UserProps {
  userStore: any,
  testStore: any
}

@inject((store: UserProps) => ({
  userStore: store.userStore,
  testStore: store.testStore
}))
@observer
export default class User extends Component<UserProps> {
  render() {
    const {userStore, testStore} = this.props;
    return (
      <>
        <Text>{userStore.name}</Text>
        <Button title="increment" onPress={() => testStore.increment()} />
        <Button title="decrement" onPress={() => testStore.decrement()} />
      </>
    )
  }
}