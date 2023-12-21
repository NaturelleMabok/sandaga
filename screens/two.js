import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
/*const slides = [
    {
      type: 'view',
      Content: (
        <View style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 40,
        }}>
          <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 20,
        }}>
          <View style={{
            backgroundColor: '#ffee58',
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderRadius: 20,
            border: 'none'
          }}>
            <Image style={{
              width: 100,
              height: 70, position: 'relative', top: '25%', left: '25%', right: '-25%'
            }} source={require('./images/orange.png')} />
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop:15,
            }}>
              <Text style={{ color: 'orange' }}>Orange</Text>
              <Text style={{ color: 'orange' }}> S10</Text>
            </View>
            <Text style={{borderRadius: 10,
      backgroundColor: '#ffa000',
      width: 60,
      height: 20,
      borderWidth: 1,
      position: 'relative',
       //top: '25%', 
      left: '28%', 
      right: '-25%',
      textAlign: 'center',
      border:'none',
      marginBottom:5,
      }}> ADD</Text>
          </View>
          <View style={{
            backgroundColor: '#b388ff',
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderRadius: 20,
            border: 'none'
          }}>
            <Image style={{
              width: 100,
              height: 70,
              position: 'relative',
              top: '25%',
              left: '25%',
              right: '-25%'
            }} source={require('./images/raisain.png')} />
            
          </View>
        </View>
  <Text>Nearby shop</Text>
  <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',gap:20}}>
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between' ,gap:10, width:200,height:70,borderWidth:1,borderColor:'#ff006a',borderRadius:20}}>
      <Image style={{width:40,height:40,margin:10}} source={require('./images/boutique.png')}/>
      <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between' ,gap:5,alignItems:'flex-start'}}>
      <Text>Xenter shop</Text> 
      <Text>2356 Toltrican Street</Text>
      <Text>9AM -7PM</Text>
      </View>
      
    </View>
  
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between' ,gap:10, width:200,height:70,borderWidth:1,borderColor:'#ff006a',borderRadius:20}}>
      <Image style={{width:40,height:40,margin:10}} source={require('./images/boutique2.png')}/>
      <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between' ,gap:5,alignItems:'flex-start'}}>
      <Text>Xenter shop</Text> 
      <Text>2356 Toltrican Street</Text>
      <Text>9AM -7PM</Text>
      </View>
      
    </View>
  </View>
  <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between' ,gap:70,width:'100%'}}>
    <Image style={{width:20,height:15,marginBottom:20}} source={require('./images/home.png')}/>
    <Image style={{width:20,height:15,marginBottom:20}} source={require('./images/loupe.png')}/>
    <Image style={{width:20,height:15,marginBottom:20}} source={require('./images/panier.png')}/>
    <Image style={{width:25,height:25,marginBottom:15}} source={require('./images/personne.png')}/>
  
  </View>
        </View>
        
      )
    }
  ]*/

const two = () => {
    return (
        <View style={styles.container}>
            <View style={styles.colum1}>
        <Image style={styles.images} source={require('./images/menu.png')} />
        <Image style={styles.images} source={require('./images/pp.jpg')} />
      </View>
      <View style={styles.colum2}>
        <Text style={styles.text}>Discover Seasonal</Text>
        <Text style={styles.text}>Fruits and Vegitables</Text>
      </View>
      <View style={styles.colum3}>
        <Text style={styles.text1}>Orange</Text>
        <Text>Grape</Text>
        <Text>Pineapple</Text>
      </View>



      <View style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 40,
        }}>
          <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 20,
        }}>
          <View style={{
            backgroundColor: '#ffee58',
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderRadius: 20,
            border: 'none'
          }}>
            <Image style={{
              width: 100,
              height: 70, position: 'relative', top: '25%', left: '25%', right: '-25%'
            }} source={require('./images/orange.png')} />
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop:15,
            }}>
              <Text style={{ color: 'orange' }}>Orange</Text>
              <Text style={{ color: 'orange' }}> S10</Text>
            </View>
            <Text style={{borderRadius: 10,
      backgroundColor: '#ffa000',
      width: 60,
      height: 20,
      borderWidth: 1,
      position: 'relative',
       //top: '25%', 
      left: '28%', 
      right: '-25%',
      textAlign: 'center',
      border:'none',
      marginBottom:5,
      }}> ADD</Text>
          </View>
          <View style={{
            backgroundColor: '#b388ff',
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderRadius: 20,
            border: 'none'
          }}>
            <Image style={{
              width: 100,
              height: 70,
              position: 'relative',
              top: '25%',
              left: '25%',
              right: '-25%'
            }} source={require('./images/raisain.png')} />
            
          </View>
        </View>
  <Text>Nearby shop</Text>
  <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',gap:20}}>
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between' ,gap:10, width:200,height:70,borderWidth:1,borderColor:'#ff006a',borderRadius:20}}>
      <Image style={{width:40,height:40,margin:10}} source={require('./images/boutique.png')}/>
      <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between' ,gap:5,alignItems:'flex-start'}}>
      <Text>Xenter shop</Text> 
      <Text>2356 Toltrican Street</Text>
      <Text>9AM -7PM</Text>
      </View>
      
    </View>
  
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between' ,gap:10, width:200,height:70,borderWidth:1,borderColor:'#ff006a',borderRadius:20}}>
      <Image style={{width:40,height:40,margin:10}} source={require('./images/boutique2.png')}/>
      <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between' ,gap:5,alignItems:'flex-start'}}>
      <Text>Xenter shop</Text> 
      <Text>2356 Toltrican Street</Text>
      <Text>9AM -7PM</Text>
      </View>
      
    </View>
  </View>
  <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between' ,gap:70,width:'100%'}}>
    <Image style={{width:20,height:15,marginBottom:20}} source={require('./images/home.png')}/>
    <Image style={{width:20,height:15,marginBottom:20}} source={require('./images/loupe.png')}/>
    <Image style={{width:20,height:15,marginBottom:20}} source={require('./images/panier.png')}/>
    <Image style={{width:25,height:25,marginBottom:15}} source={require('./images/personne.png')}/>
  
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
    text: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        backgroundColor: '#e8eaf6',
        width: '100%',
        gap: 20,
    borderWidth:2,
    borderRadius:20,
    borderColor:'white',
    
      },
      images: {
        width: 40,
        height: 40,
      },
      colum1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //marginTop: 10,
        gap: 10,
      },
      colum2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        //marginBottom: '100%',
        gap: 10,
      },
      text: {
        fontSize: 20,
        fontFamily: 'arial',
        fontWeight: 'bold',
      },
    
      colum3: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        marginTop: 10,
      },
      text1: {
        borderRadius: 10,
        backgroundColor: '#ffc400',
        width: 60,
        height: 20,
        borderWidth: 1,
        textAlign: 'center',
        border:'none'
      }
});

export default two;
