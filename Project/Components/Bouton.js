import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

class Bouton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}></Text>
          <Button
            title={this.props.titre}
            color="blue"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30, //tailler grande  -
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default Bouton;
