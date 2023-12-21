import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const four = () => {
    return (
        <View style={styles.container}>
            <View style={styles.ligne1}>
        <Image source={require('./images/sac.png')} style={styles.img}/>
      </View>
      <View style={styles.ligne2}>
        <View style={styles.text}>
          <Text style={styles.tet}>Order Groceries</Text>
          <Text style={styles.tet}>and Get delivered</Text>
          <Text style={styles.tet}> in few minutes</Text>
        </View>
        <View style={styles.bouton}>
          <Text style={{
             top:'15%',
             left:'25%',
             right:'-25%',
          }}> Get starded</Text>
        </View>
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
   /* text: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },*/
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white',
        backgroundColor:'rgba(127, 255, 212, 0.587)',
        
      },
      img:{
        width:150,
        height:250,
        position:'relative',
        left:'25%',
        right:'-25%',
        top:'40%'
      },
      ligne1:{
        width:'100vw',
        /*position:'relative',
        left:'25%',
        right:'-25%',*/
      },
      ligne2:{
        width:'100vw',
        height:275,
        position:'relative',
        top:'15%',
        borderWidth:2,
        borderRadius:20,
        margin:0,
        padding:0,
        backgroundColor:'white',
        borderColor:'white',
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        //backgroundColor:'white'
      },
      text:{
        position:'relative',
        top:'30%',
        left:'25%',
        right:'-25%',
       
      },
      tet:{
    fontFamily:'arial',
    fontSize:20,
    fontWeight:600,
      },
      bouton:{
        width:120,
        height:40,
        position:'relative',
        top:'30%',
        left:'25%',
        right:'-25%',
        borderColor:'rgba(127, 255, 212, 0.587)',
        borderWidth:2,
        borderRadius:20,
        //backgroundColor:'green'
    
      }
});

export default four;
