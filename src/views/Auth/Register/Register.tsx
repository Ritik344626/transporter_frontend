import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import CustomInput from '@components/common/input';
import { colors } from '@theme';
import Image from '@components/Image';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

const RegisterScreen = ({ navigation }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    console.log('Registration Data: ', data);
    // Handle registration logic here
  };

  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <Text style={styles.subHeader}>Create an account so you can explore Transporter</Text>
      <Image
        source={require('@assets/images/register.webp')}
        style={{ height: height * 0.28, width: width }}
      />

      {/* Name Input */}
      <CustomInput name="name" control={control} label="Name" errors={errors} />
      {/* Email Input */}
      <CustomInput name="email" control={control} label="Email" errors={errors} />
      {/* Password Input */}
      <CustomInput
        name="password"
        control={control}
        label="Password"
        errors={errors}
        secureTextEntry // Optionally add secureTextEntry for password field
      />
      {/* Confirm Password Input */}
      <CustomInput
        name="confirmPassword"
        control={control}
        label="Confirm Password"
        errors={errors}
        secureTextEntry // Optionally add secureTextEntry for confirm password field
      />

      <TouchableOpacity style={styles.signInButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.signInButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.createAccount}>
          Already have an account, <Text style={{ color: colors.darkPurple }}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.orange,
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 16,
    color: '#000',
    marginBottom: 24,
  },
  signInButton: {
    width: '100%',
    backgroundColor: colors.orange,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccount: {
    color: '#000',
    fontSize: 14,
    marginTop: 8,
  },
});

export default RegisterScreen;
