import React from 'react';
import { Text, View, StyleSheet, StatusBar, Dimensions } from 'react-native';
import Button from '@components/Button';
import { StackProps } from '@navigator/stack';
import { colors } from '@theme';
import UserContainer from '@components/Home/userContainer';
import LocationPicker from '@components/Home/locationPicker';
import BookingContainer from '@components/Home/bookingContainer';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    overflow: 'scroll',
  },
  container: {
    width: width,
    position: 'relative',
    height: height * 0.32,
  },
  userContainer: {
    width: width,
    height: height * 0.3,
    overflow: 'hidden',
  },
  locationPicker: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '0%',
    justifyContent: 'center',
    padding: 10,
    elevation: 5,
  },
  bottomContainer: {
    width: width,
    top: height * 0.13,
  },
});

export default function Home({ navigation }: StackProps) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <UserContainer />
        </View>
        <View style={styles.locationPicker}>
          <LocationPicker />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <BookingContainer />
      </View>
    </View>
  );
}
