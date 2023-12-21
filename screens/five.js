import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, Button } from 'react-native';

const five = () => {
    return (
        <View style={styles.container}>
            <View style={styles.ligne1}>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <Text>Your Location</Text>
                    <Text>3892 Olen Thomas Drive NY</Text>
                </View>
                <View>
                    <Image source={require('./images/pp.jpg')} style={{ width: 60, height: 40 }} />
                </View>
            </View>
            <View style={styles.ligne2}>
                <View></View>
                <Image source={require('./images/search.png')} style={{ width: 25, height: 25, position: 'relative', top: '30%', left: '15%' }} />
                <TextInput
                    style={{
                        height: 40,
                        borderColor: '#544F46',
                        flex: 1,
                        paddingLeft: 40,
                        borderWidth: 1,
                        borderRadius: 10,

                        fontSize: 15,
                        /*marginBottom:'5px',
                        marginTop:'5px',*/
                    }

                    }
                    placeholder='Search foods,groceries'

                />


                <Image source={require('./images/trait.png')} style={{ width: 50, height: 40, borderWidth: 2, borderRadius: 10, border: 'none' }} />

            </View>
            <View style={styles.ligne3}>
                <Text style={{ fontFamily: 'arial', fontWeight: 600, fontSize: 17 }}>Categories</Text>
                <Text style={{ color: 'green', fontSize: 15 }}>See all</Text>
            </View>

            <View style={styles.ligne4}>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <Image source={require('./images/plante.png')} style={{ width: 50, height: 50 }} />
                    <Text>Vegetables</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <Image source={require('./images/lait.png')} style={{ width: 50, height: 50 }} />
                    <Text>Dairies</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <Image source={require('./images/viande.png')} style={{ width: 50, height: 50 }} />
                    <Text>Meats</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <Image source={require('./images/Poisson.png')} style={{ width: 50, height: 50 }} />
                    <Text>Fish</Text>
                </View>
            </View>

            <View style={styles.ligne5}>
                <Text style={{ fontFamily: 'arial', fontWeight: 600, fontSize: 17 }}>Deals</Text>
                <Text style={{ color: 'green', fontSize: 15 }}>See all</Text>
            </View>
            <View style={styles.ligne6}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 15,
                    paddingLeft: 5,
                    marginTop: 10
                }}>
                    <Text style={{ fontSize: 20 }}>50% OFF</Text>
                    <Text>On grocery combo pack</Text>
                </View>
                <Image source={require('./images/panier1.png')} style={{ width: 60, height: 55, paddingLeft: 10, marginTop: 10 }} />
            </View>
            <View style={styles.ligne7}>
                <Text style={{ fontFamily: 'arial', fontWeight: 600, fontSize: 17 }}>Popular items</Text>
                <Text style={{ color: 'green', fontSize: 15 }}>See all</Text>
            </View>
            <View style={styles.ligne8}>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 15, width: 160, height: 100, borderWidth: 1, borderRadius: 20 }}>
                    <Image source={require('./images/coeur3.PNG')} style={{ width: 20, height: 20, position: 'relative', left: '70%' }} />
                    <Image source={require('./images/fruits.png')} style={{ width: 40, height: 40, position: 'relative', left: '30%', right: '-25%', bottom: '20%' }} />
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 70, position: 'relative', bottom: '30%', padding: 8 }}>
                        <Text>Bitroop</Text>
                        <Image source={require('./images/sac2.png')} style={{ width: 20, height: 20, }} />
                    </View>


                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 15, width: 160, height: 100, borderWidth: 1, borderRadius: 20 }}>
                    <Image source={require('./images/coeur3.PNG')} style={{ width: 20, height: 20, position: 'relative', left: '70%' }} />
                    <Image source={require('./images/1.png')} style={{ width: 40, height: 40, position: 'relative', left: '30%', right: '-25%', bottom: '20%' }} />
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 70, position: 'relative', bottom: '30%', padding: 8 }}>
                        <Text>Bitroop</Text>
                        <Image source={require('./images/sac2.png')} style={{ width: 20, height: 20, }} />
                    </View>


                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30
    },
    ligne1: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: 130,
        padding: 8
    },
    ligne2: {
        display: 'flex',
        flexDirection: 'row',
        padding: 2,
        gap: 25,
        width: '100%'
    },
    ligne3: {
        display: 'flex',
        flexDirection: 'row',
        // width:'100%',
        gap: 200,
        padding: 8
    },
    ligne4: {
        display: 'flex',
        flexDirection: 'row',
        gap: 45,
        padding: 10
    },
    ligne5: {
        display: 'flex',
        flexDirection: 'row',
        // width:'100%',
        gap: 230,
        padding: 8
    },
    ligne6: {
        display: 'flex',
        flexDirection: 'row',
        //padding:8 ,
        width: 270,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 2,
        borderRadius: 20,
        border: 'none',
        position: 'relative',
        left: '15%',
        right: '-25%',
        gap: 35
    },
    ligne7: {
        display: 'flex',
        flexDirection: 'row',
        // width:'100%',
        gap: 200,
        padding: 8
    },
    ligne8: {
        display: 'flex',
        flexDirection: 'row',
        // width:'100%',
        gap: 20,
        padding: 5
    }
});

export default five;
