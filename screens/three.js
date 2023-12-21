import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const three = () => {
    return (
        <View style={styles.container}>
            <View style={styles.ligne1}>
        <Image source={require('./images/back.png')} style={styles.img} />
        <Image source={require('./images/cadanar.png')} style={styles.img} />
      </View>
      <View style={styles.ligne2}>
        <Text style={styles.text}>My</Text>
        <Text style={styles.text}>Order</Text>
      </View>
      <View style={styles.ligne3}>
        <View style={styles.fruit}>
          <View style={styles.coeur}>
            <Image style={styles.img2}  source={require('./images/orange.png')} />
          </View>
          <View>
            <Text> 1 x</Text>
          </View>
          <View>
            <Text>Orange</Text>
            <Text>$10</Text>
          </View>
          <View>
            <Image source={require('./images/poubelle.png')} style={styles.img1} />
          </View>
        </View>

        <View style={styles.fruit}>
          <View style={styles.coeur}>
            <Image style={styles.img2} source={require('./images/pomme.png')} />
          </View>
          <View>
            <Text> 1 x</Text>
          </View>
          <View>
            <Text>Orange</Text>
            <Text>$10</Text>
          </View>
          <View>
            <Image source={require('./images/poubelle.png')} style={styles.img1} />
          </View>
        </View>
        <View style={styles.fruit}>
          <View style={styles.coeur}>
            <Image style={styles.img2} source={require('./images/orange.png')} />
          </View>
          <View>
            <Text> 1 x</Text>
          </View>
          <View>
            <Text>Orange</Text>
            <Text>$10</Text>
          </View>
          <View>
            <Image source={require('./images/poubelle.png')} style={styles.img1} />
          </View>
        </View>
        <View style={styles.fruit}>
          <View style={styles.coeur}>
            <Image style={styles.img2} source={require('./images/raisain.png')} />
          </View>
          <View>
            <Text> 1 x</Text>
          </View>
          <View>
            <Text>Orange</Text>
            <Text>$10</Text>
          </View>
          <View>
            <Image source={require('./images/poubelle.png')} style={styles.img1} />
          </View>
        </View>

      </View>
<View style={styles.ligne4}>
  <Text>Total Price</Text>
  <Text>$50</Text>
</View>
<View style={styles.ligne5}>
  <Text style={{position: 'relative',left: '25%', right: '-25%',top:'10%'}}>Payement</Text>
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
        gap: 30,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white',
        //backgroundColor:'pink'
        //justifyContent: 'space-between',
      },
      ligne1: {
        display: 'flex',
        flexDirection: 'row',
        gap: 240,
        width: '100vw',
        padding: 10,
        //backgroundColor:'black'
    
      },
      img: {
        width: 45,
        height: 40,
      },
      ligne2: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        padding: 10,
        //justifyContent: 'space-between',
      },
      text: {
        fontSize: 17,
        fontFamily: 'arial',
      },
      text1: {
        fontSize: 14,
        fontFamily: 'arial',
        color: 'pink',
      },
      ligne3: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        padding: 10,
      },
      fruit: {
        display: 'flex',
        flexDirection: 'row',
        gap: 45,
      },
      ligne4: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        padding: 10,
        justifyContent: 'space-between',
      },
      coeur: {
        width: 90,
        height: 55,
        borderColor: 'pink',
        borderWidth: 2,
        borderRadius: 20,
        //backgroundColor: 'orange'
      },
      img1: {
        width: 25,
        height: 25,
        /*position: 'relative',
        left: '25%',
        right: '-25%',
        top: '25%',
        bottom: '-25%'*/
      },
      rectangle: {
        width: 180,
        height: 60,
        backgroundColor: 'pink',
        color: 'white',
        borderColor: 'pink',
        borderWidth: 2,
        borderRadius: 20
      },
      find: {
        position: 'relative',
        left: '25%',
        right: '-25%',
        top: '25%',
        bottom: '-25%',
        color: 'white'
    
      },
      ligne5: {
        width: 140,
        height: 45,
        borderColor: 'pink',
        borderWidth: 1,
        borderRadius: 20,
        position: 'relative',
        left: '25%',
        right: '-25%',
        backgroundColor:'pink',
        bottom:'4%',
    
      },
      img2: {
        width: 40,
        height: 40,
        position: 'relative',
        left: '25%',
        right: '-25%',
        //bottom: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    
    
      },
      
});

export default three;
