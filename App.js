import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={estilo.container}>
      <Text style= {estilo.titulo}>Top 3 melhores jogos do mundo</Text>
      <StatusBar style="auto" />
      <Text style= {estilo.legenda}>1° Minecraft</Text>
      <Image style={estilo.img} source={require("./assets/i575891.jpg")} />
      <Text style= {estilo.legenda}>2° Habbo</Text>
      <Image style={estilo.img} source={require("./assets/habbo-hotel.jpg")} />
      <Text style= {estilo.legenda}>3° Mineirinho ultra adventures</Text>
      <Image style={estilo.img} source={require("./assets/D4kixaaXoAAoTiw.jpg")} />
    </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    alignItems: 'center',  
  },

  titulo:{
    fontSize:50,
    marginTop:20,
    color:"orange",
  },
  legenda:{
   
    fontSize:25,
    marginTop:20,
    color:"orange",
  },
   img:{
    marginBottom:-15,
     width:400,
     height:250,
     marginTop:10,
     borderRadius:20,
    
   }
});
