import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HeaderContainer = () => {
  return (
    <ImageBackground
      source={require('@assets/images/home-background.png')}
      style={styles.container}
      imageStyle={styles.backgroundImage}>
      <View style={styles.leftSection}>
        <FontAwesome name="arrow-left" size={16} color={'white'} style={{ marginTop: 2 }} />
        <Text style={styles.location}>View Details</Text>
      </View>
      <View style={styles.leftSection}>
        <FontAwesome name="money" size={16} color={'white'} style={{ marginTop: 2 }} />
        <Text style={styles.location}>
          <FontAwesome name="rupee" size={16} color={'white'} style={{ marginTop: 2 }} /> 1999
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '100%',
    width: '100%',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    overflow: 'hidden',
  },
  backgroundImage: {
    resizeMode: 'cover',
    height: '100%',
  },
  leftSection: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  location: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
    padding: 0,
  },
});

export default HeaderContainer;
