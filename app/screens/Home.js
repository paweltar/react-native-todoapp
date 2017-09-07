import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, View, Text } from 'react-native';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Input } from '../components/TextInput';
import { ItemsList } from '../components/ItemsList';
import { DeleteButton } from '../components/Button';

import { toggleState, updateText, submitText, removeFinished } from '../actions/todos';

const fakeItems = [
  {
    title: 'Buy milk',
    date: new Date(),
    isDone: false,
    id: uuidv4(),
  },
  {
    title: 'Wash dishes',
    date: new Date(),
    isDone: true,
    id: uuidv4(),
  },
  {
    title: 'Lawn the grass',
    date: new Date(),
    isDone: true,
    id: uuidv4(),
  },
  {
    title: 'Walk with dog',
    date: new Date(),
    isDone: false,
    id: uuidv4(),
  },
  {
    title: 'Finish this app',
    date: new Date(),
    isDone: false,
    id: uuidv4(),
  },
];

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    items: PropTypes.array,
    inputValue: PropTypes.string,
  };

  handleItemPress = (i) => {
    this.props.dispatch(toggleState(i));
  };

  handleTextChange = (text) => {
    this.props.dispatch(updateText(text));
  };

  handleTextSubmit = () => {
    this.props.dispatch(submitText());
  };

  handleFinishedRemoval = () => {
    this.props.dispatch(removeFinished());
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} />
        <Header />
        <Input
          inputValue={this.props.inputValue}
          onTextChange={this.handleTextChange}
          onTextSubmit={this.handleTextSubmit}
        />
        <ItemsList onPressItem={this.handleItemPress} items={this.props.items} />
        <DeleteButton onPressDelete={this.handleFinishedRemoval} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  items: state.todos.items,
  inputValue: state.todos.inputValue,
});

export default connect(mapStateToProps)(Home);
