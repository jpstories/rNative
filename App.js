import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import gallery from './img/gallery.png';
import fans from './img/fans.jpg';
import nat_1 from './img/nat.jpg';
import nat_2 from './img/nat2.jpg';
import edit from './img/edit.png';

export default function App() {
  return (
    <View style={styles.wrap}>

        <View style={styles.aside}>
          <Text style={styles.title}>Lib</Text>
          <Image style={styles.logo} source={gallery}/>
        </View>

        <View style={styles.content}>
          <Text style={styles.content__text}>Actor: Unname</Text>

          <View style={styles.content__gallery}>
            <Image style={styles.content__img_active} source={fans}/>

            <Image style={styles.content__img} source={nat_1}/>
            <Image style={styles.content__img} source={nat_2}/>
            <Image style={styles.content__img} source={fans}/>
          </View>

          <Image style={styles.edit__img} source={edit}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    fontFamily: "Arial",
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eee',
    justifyContent: 'center',
    overflow: 'scroll',
  },

  aside: {
    // backgroundColor: '#268',
    backgroundColor: '#313',
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    width: 100,
    position: 'absolute', 
    top: 0, 
    bottom: 0, 
    left: 0, 
    right: 0,
    opacity: 0.7,
    zIndex: 999,
  },


  title: {
    // color: '#11c0ff',
    color: '#eee',
    fontSize: 26,
    fontWeight: "bold",
  },

  logo: {
    width: 85,
    height: 85,
    marginTop: 5,
  },

  content: {
    backgroundColor: '#eee',
    width: 500,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#222',
    overflow: 'scroll',
  },

  content__text: {
    color: '#222',
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 25,
    width: 600,
    borderTopColor: 'black',
    borderTopWidth: 1,
  },

  content__gallery: {
    width: 600,
    backgroundColor: '#eee',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 47,
    marginTop: 12,
    overflow: 'scroll',
  },

  content__img: {
    marginTop: 2,
    width: 435,
    height: 215,
    borderWidth: 1,
    borderColor: '#666',
  },

  content__img_active: {
    width: 325,
    height: 255,
    marginLeft: 99,
    // borderColor: '#777',
    marginTop: 210,
  },

  edit__img: {
    width: 55,
    height: 55,
    opacity: 0.8,
    position: 'absolute',
    top: 140,
    left: 25,
    zIndex: 9999,
    backgroundColor: '#fff',
  }

});
