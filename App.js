import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import HelloWorld from './src/component/HelloWorld';
import HelloWorld2 from './src/component/Hello';
import MyButton from './src/component/MyButton';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text>1-1</Text>
      <HelloWorld name="Alexis"></HelloWorld>
      <HelloWorld name="José"></HelloWorld>

      <Text>1-2</Text>
      <HelloWorld name="Alexis">je suis dev.</HelloWorld>

      <Text>1-3</Text>
      <HelloWorld>C'est ma description</HelloWorld>

      <Text>1-4</Text>
      <MyButton
      label = "Dire bonsoir (click)"
      alrt={()=>alert('Bonsoir')}
      />

      <Text> </Text> 
      <Text> </Text>

      <Text>2-1</Text>
      <HelloWorld2>C'est ma description mais elle n'a pas été passé par des props</HelloWorld2>   

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 45,
    marginLeft: 10,
    marginRight: 10,
  },
});
