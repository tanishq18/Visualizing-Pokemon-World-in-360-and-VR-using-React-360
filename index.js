import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import Screen from './components/Screen';
import LoadingScreen from './components/LoadingScreen';
import Pokemon from './components/Pokemon';
import PokeBall from './components/PokeBall';
import World from './components/World';

AppRegistry.registerComponent('LoadingScreen', () => LoadingScreen);
AppRegistry.registerComponent('Screen', () => Screen);
AppRegistry.registerComponent('PokeBall1', () => PokeBall);
AppRegistry.registerComponent('PokeBall2', () => PokeBall);
AppRegistry.registerComponent('PokeBall3', () => PokeBall);
AppRegistry.registerComponent('PokeBall4', () => PokeBall);
AppRegistry.registerComponent('Pikachu', () => Pokemon);
AppRegistry.registerComponent('Cubone', () => Pokemon);
AppRegistry.registerComponent('Charmander', () => Pokemon);
AppRegistry.registerComponent('Haunter', () => Pokemon);
AppRegistry.registerComponent('World', () => World);

export default class pokemon_vr extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('pokemon_vr', () => pokemon_vr);
