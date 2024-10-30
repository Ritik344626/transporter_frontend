import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  const envConfig: ExpoConfig = {
    ...config,
    slug: process.env.EXPO_PUBLIC_SLUG ?? 'The-Transporter',
    name: process.env.EXPO_PUBLIC_NAME ?? 'The-transporter',
    ios: {
      ...config.ios,
      bundleIdentifier: process.env.EXPO_PUBLIC_IOS_BUNDLE_IDENTIFIER,
      buildNumber: '1',
    },
    android: {
      ...config.android,
      package: 'com.example.transporter',
      versionCode: 1,
      "config": {
        "googleMaps": {
          "apiKey": "AIzaSyBh7eZkFtwIzbwIyuyU0s--5p36FW-9quU"
        }
      }
    },
    updates: {
      url: `https://u.expo.dev/${process.env.EXPO_PUBLIC_PROJECT_ID}`,
    },
    extra: {
      ...config.extra,
      "eas": {
        "projectId": "d88dbf5b-f8a2-49ce-a936-cd981be78119",
        javaVersion: "17"
      },
      ENV: process.env.EXPO_PUBLIC_ENV,
      API_URL: process.env.EXPO_PUBLIC_API_URL,
    },
  };
  return envConfig;
};
