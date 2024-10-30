import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Controller } from 'react-hook-form';

const CustomInput = ({ control, name, label, rules, errors }: any) => (
  <View style={styles.container}>
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          label={label}
          mode="outlined"
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          error={!!errors[name]}
          style={styles.input}
        />
      )}
    />
    {errors[name] && <Text style={styles.errorText}>{errors[name]?.message}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});

export default CustomInput;
