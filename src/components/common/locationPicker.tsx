import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '@theme';
import DistanceIcon from '../../../assets/svg/distance.svg';
const { height } = Dimensions.get('window');

interface Props {
  isHome?: boolean;
}

const LocationPicker = (props: Props) => {
  const { isHome } = props;
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={{ ...styles.card, height: isHome ? height * 0.28 : height * 0.24 }}>
        <View style={styles.inputRow}>
          <TextInput
            label="From"
            value={fromLocation}
            onChangeText={text => setFromLocation(text)}
            mode={'outlined'}
            left={
              <TextInput.Icon
                icon={() => <FontAwesome name="map-marker" size={24} color="black" />}
              />
            }
            style={styles.input}
            outlineColor="lightgray"
          />
          {isHome && (
            <View style={styles.mapIcon}>
              <Image source={require('@assets/images/map-icon.png')} />
            </View>
          )}
        </View>
        <View style={styles.inputRow}>
          <TextInput
            label="To"
            value={toLocation}
            onChangeText={setToLocation}
            mode={'outlined'}
            left={<TextInput.Icon icon="map" />}
            style={styles.input}
            outlineColor="lightgray"
          />
        </View>

        {isHome && (
          <>
            <TextInput
              label="Date"
              value={date.toDateString()}
              onPress={() => setShowDatePicker(true)}
              mode="outlined"
              left={
                <TextInput.Icon
                  icon={() => <FontAwesome name="calendar" size={24} color="black" />}
                />
              }
              style={styles.datePickerContainer}
              outlineColor="lightgray"
            />
            {showDatePicker && (
              <DateTimePicker value={date} mode="date" display="default" onChange={onDateChange} />
            )}
          </>
        )}

        {!isHome && (
          <>
            <View style={styles.detailContainer}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome name="calendar" size={24} />
                <Text> 20/10/24</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome name="clock-o" size={24} />
                <Text> 20Hr.</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome name="map-marker" size={24} />
                <Text> 200Km</Text>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    paddingBottom: 5,
    position: 'relative',
  },
  input: {
    flex: 1,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    backgroundColor: '#fff',
  },
  mapIcon: {
    position: 'absolute',
    backgroundColor: colors.orange,
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    top: 35,
    zIndex: 999,
  },
  detailContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 7,
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default LocationPicker;
