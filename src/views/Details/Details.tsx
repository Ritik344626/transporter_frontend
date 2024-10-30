import { View, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { StackProps } from '@navigator/stack';
import HeaderContainer from '@components/Details/headerContainer';
import LocationPicker from '@components/common/locationPicker';
import { Button, Checkbox, Text } from 'react-native-paper';
import { useState } from 'react';
import { colors } from '@theme';
import MapComponent from '@components/common/map';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
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
    height: height * 0.25,
    overflow: 'hidden',
  },
  locationPicker: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '80%',
    justifyContent: 'center',
    padding: 10,
    elevation: 5,
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: height * 0.4,
    resizeMode: 'contain',
  },
  detailContainer: {
    width: width,
    backgroundColor: '#E1C6FC',
    height: 100,
    marginBottom: 2,
    padding: 15,
  },
  button: {
    width: width * 0.92,
    backgroundColor: colors.orange,
    marginVertical: 8,
    padding: 8,
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    gap: 5,
  },
  itemText: {
    marginLeft: 5,
    lineHeight: 36,
  },
});

export default function Details({ navigation, route }: StackProps) {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <HeaderContainer />
        </View>
        <View style={styles.locationPicker}>
          <LocationPicker />
        </View>
      </View>
      <View style={styles.mapContainer}>
        <MapComponent />
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.item}>
          <FontAwesome name="cube" size={30} color="#191970" />
          <Text style={styles.itemText}>Product Name</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.item}>
            <MaterialCommunityIcons name="weight-kilogram" size={36} color="#191970" />
            <Text style={styles.itemText}>50Kg</Text>
          </View>
          <View style={styles.item}>
            <MaterialIcons name="straighten" size={36} color="#191970" />
            <Text style={styles.itemText}>80 Ft.</Text>
          </View>
          <View style={styles.item}>
            <MaterialIcons name="store" size={30} color="#191970" />
            <Text style={styles.itemText}>Product Type</Text>
          </View>
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}></Checkbox>
        <Text>Safety and Security check</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button}>
          <Text style={styles.text}>Book Now</Text>
        </Button>
      </View>
    </View>
  );
}
