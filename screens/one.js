
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const one = () => {
    return (
        <View style={styles.container}>
             <View style={styles.ligne1}>
        <Image source={require('./images/fleche.PNG')} style={styles.img} />
        <Text>Product Detail</Text>
        <Image source={require('./images/troipoints.PNG')} style={styles.img} />
      </View>
      <View style={styles.ligne2}>
        <Text style={styles.text}>Juicy Orange</Text>
        <Text style={styles.text1}>Sweet and Juicy</Text>

      </View>
      <View style={styles.ligne3}>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
        <Text>Consectetur nemo iste dolorum in. Voluptates facilis eius quidem, </Text>
        <Text>Consectetur nemo iste dolorum in. Voluptates facilis eius quidem q .</Text>
        <Text>Consectetur nemo iste dolorum in. Voluptates facilis eius.</Text>
      </View>

       <View style={styles.ligne4}>
<View style={styles.coeur} >
  <Image source={require('./images/coeur.PNG')} style={styles.img1}/>
</View>
<View style={styles.rectangle}>
  <Text style={styles.find}>Find Nearest Store</Text>
</View>
      </View>
      <View style={styles.ligne5}>
        <Image source={require('./images/2 (2).png')} style={styles.img2}/>
      </View>

        </View>
    );
}

const styles = StyleSheet.create({
    containe: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    image: {
        width: 200,
        height: 200,
        margin: 15,
    },
    /*text: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },*/

    container: {
        display: 'flex',
        flexDirection: 'column',
        gap:30,
        borderWidth:1,
        borderRadius:20,
        borderColor:'white',
        backgroundColor:'pink'
        //justifyContent: 'space-between',
      },
      ligne1: {
        display: 'flex',
        flexDirection: 'row',
        gap:70,
        width:'100%',
        padding:10,
       
      },
      img: {
        width: 50,
        height: 50,
      },
      ligne2: {
        display: 'flex',
        flexDirection: 'column',
        gap:20,
        padding:10,
        //justifyContent: 'space-between',
      },
      text: {
        fontSize: 17,
        fontFamily: 'arial',
      },
      text1: {
        fontSize: 12,
        fontFamily: 'arial',
        color: 'pink',
      },
      ligne3: {
        display: 'flex',
        flexDirection: 'column',
        padding:10,
      },
      ligne4:{
        display: 'flex',
        flexDirection: 'row',
        gap:20,
        padding:10,
        //justifyContent: 'space-between',
      },
      coeur:{
        width:80,
        height:60,
        borderColor:'pink',
        borderWidth:2,
        borderRadius:20
      },
      img1:{
        width: 40,
        height: 40,
        position:'relative',
        left:'25%',
        right:'-25%',
        top:'25%',
        bottom:'-25%'
      },
      rectangle:{
        width:180,
        height:60,
        backgroundColor:'pink',
        color:'white',
        borderColor:'pink',
        borderWidth:2,
        borderRadius:20
      },
      find:{
        position:'relative',
        left:'25%',
        right:'-25%',
        top:'25%',
        bottom:'-25%',
        color:'white'
    
      },
      ligne5:{
        width:'100vw',
        height:210,
        borderWidth:2,
        borderRadius:20,
        margin:0,
        padding:0,
        backgroundColor:'white',
        borderColor:'white',
    
      },
      img2:{
        width:120,
        height:80,
        position:'relative',
        left:'30%',
        right:'-25%',
        bottom:'10%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
       
    
      }
    
});

export default one;
