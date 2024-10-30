import React from 'react';
import { Text, View, StyleSheet, StatusBar, Dimensions, ScrollView } from 'react-native';
import Button from '@components/Button';
import { StackProps } from '@navigator/stack';
import { colors } from '@theme';
import LocationPicker from '@components/common/locationPicker';
import { BookingContainer, UserContainer } from '@components/Home';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
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
    height: '0%', // This may need to be adjusted if you want it visible
    justifyContent: 'center',
    padding: 10,
    elevation: 5,
  },
  bottomContainer: {
    width: width,
    top: height * 0.13,
    paddingBottom: 20,
    marginBottom: 90,
  },
});

export default function Home({ navigation }: StackProps) {
  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, height: 'auto' }}
        showsVerticalScrollIndicator={false}
        style={{ paddingBottom: 50 }}>
        <View style={styles.container}>
          <View style={styles.userContainer}>
            <UserContainer />
          </View>
          <View style={styles.locationPicker}>
            <LocationPicker isHome={true} />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <BookingContainer />
        </View>
      </ScrollView>
    </View>
  );
}
