import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import CustomInput from '@components/common/input';
import { colors } from '@theme';
import Image from '@components/Image';
import { useLoginMutation } from '@utils/api';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginScreen = ({ navigation }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [login, { isLoading, isError, error }] = useLoginMutation();

  const onSubmit = async (data: any) => {
    console.log('Login Data: ', data);
    const result = await login(data).unwrap();
    console.log('Login successful:', result);

    navigation.navigate('Main');
  };

  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login here</Text>
      <Text style={styles.subHeader}>Welcome back you've been missed!</Text>
      <Image
        source={require('@assets/images/login.webp')}
        style={{ height: height * 0.45, width: width }}
      />

      <CustomInput name="email" control={control} label="Email" errors={errors} />
      <CustomInput name="password" control={control} label="Password" errors={errors} />

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.signInButtonText}>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.createAccount}
        onPress={() => navigation.navigate('Register')}>
        <Text>
          Don't have account? <Text style={{ color: colors.darkPurple }}>Create New</Text>
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
  forgotPassword: {
    alignSelf: 'flex-end',
    marginVertical: 8,
  },
  forgotPasswordText: {
    color: colors.darkPurple,
    fontSize: 14,
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

export default LoginScreen;
