import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {
  state = {
    text: '',
    todo: ['test', 'testttt', 'yaaa']
  }

  addTodo = () => {
    let newTodo = this.state.text
    let arr = this.state.todo
    arr.push(newTodo)
    this.setState({todo: arr, text: ''})
  }
  deleteTodo = (items) => {
    let arr = this.state.todo
    let pos = arr.indexOf(items)
    arr.splice(pos, 1)
    this.setState({todo: arr})
  }
  renderTodo = () => {
    return this.state.todo.map((items, index) => (
      <TouchableOpacity key={index}>
        <Text 
          style={styles.todo}
          onPress={() => {this.deleteTodo(items)}}
        >{items}</Text>
      </TouchableOpacity>
    ))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Note App</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Type here to translate!"
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
        />
        <Button 
          title="Add TODO"
          color="#841584"
          onPress={this.addTodo}
        />
        {this.renderTodo()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  inputStyle: {
    height: 40,
    borderColor: 'green',
    borderWidth: 1,
    marginTop: 20,
  },
  header: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold',
  },
  todo: {
    fontSize: 18,
    color: 'green'
  }
});
