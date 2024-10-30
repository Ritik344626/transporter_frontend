import Button from '@components/Button';
import Image from '@components/Image';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { colors } from '@theme';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import OfferCard from './offerCard';
const { width } = Dimensions.get('window');

export const BookingContainer = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(0);

  const vehicles = [
    { id: 1, image: require('@assets/images/vehicle.png') },
    { id: 2, image: require('@assets/images/vehicle.png') },
    { id: 3, image: require('@assets/images/vehicle.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Select Vehicle</Text>
        <Text style={{}}>View All</Text>
      </View>
      <View style={styles.vehicleSection}>
        {vehicles.map(vehicle => (
          <TouchableOpacity key={vehicle.id} onPress={() => setSelectedVehicle(vehicle.id)}>
            <View
              style={[
                styles.vehicleContainer,
                selectedVehicle === vehicle.id && styles.selectedVehicle,
              ]}>
              <Image source={vehicle.image} style={styles.vehicleImage} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <Button style={styles.button}>
        <Text style={styles.text}>Book Now</Text>
      </Button>
      <View style={styles.offerSection}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.white }}>Our Offer:</Text>
        <OfferCard
          fromLocation="Delhi"
          toLocation="Kolkata"
          distance="1,200KM"
          duration="20 Hr."
          price="1,999"
          onBook={() => console.log('Booking initiated')}
        />
        <OfferCard
          fromLocation="Delhi"
          toLocation="Kolkata"
          distance="1,200KM"
          duration="20 Hr."
          price="1,999"
          onBook={() => console.log('Booking initiated')}
        />

        <OfferCard
          fromLocation="Delhi"
          toLocation="Kolkata"
          distance="1,200KM"
          duration="20 Hr."
          price="1,999"
          onBook={() => console.log('Booking initiated')}
        />

        <OfferCard
          fromLocation="Delhi"
          toLocation="Kolkata"
          distance="1,200KM"
          duration="20 Hr."
          price="1,999"
          onBook={() => console.log('Booking initiated')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.orange,
  },
  vehicleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  vehicleContainer: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 8,
    padding: 5,
    marginBottom: 5,
  },
  selectedVehicle: {
    borderColor: 'blue',
  },
  vehicleImage: {
    height: 50,
    width: width * 0.25,
  },
  image: {
    width: '100%',
  },
  offerSection: {
    width: width,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: colors.darkPurple,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
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
    width: 80,
    height: 60,
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
  button: {
    width: width * 0.92,
    backgroundColor: colors.orange,
    marginVertical: 20,
    padding: 15,
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
