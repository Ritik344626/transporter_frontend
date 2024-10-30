import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '@theme';

interface Props {
  fromLocation: string;
  toLocation: string;
  distance: string;
  duration: string;
  price: string;
  onBook: () => void;
}

const OfferCard = (props: Props) => {
  const { fromLocation, toLocation, distance, duration, price, onBook } = props;
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Image source={require('@assets/images/vehicle.png')} style={styles.truckImage} />
        <View style={styles.info}>
          <Text style={styles.label}>From: {fromLocation}</Text>
          <Text style={styles.label}>To: {toLocation}</Text>
          <View style={styles.distanceContainer}>
            <Text style={styles.distance}>
              <FontAwesome name="map-marker" size={14} /> {distance}
            </Text>
            <Text style={styles.distance}>
              <FontAwesome name="clock-o" size={14} /> {duration}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.price}>
            <FontAwesome name="rupee" size={14} /> {price}
          </Text>
          <Button
            style={{
              backgroundColor: colors.orange,
              borderRadius: 5,
              marginTop: 4,
              marginLeft: 5,
            }}
            onPress={onBook}>
            <Text style={{ fontSize: 14, color: 'white' }}>Book Now</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginVertical: 10,
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  truckImage: {
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  distanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  distance: {
    fontSize: 14,
    color: '#666',
    marginRight: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'right',
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default OfferCard;
