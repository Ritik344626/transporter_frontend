import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const UserContainer = () => {
    return (
        <ImageBackground
            source={require('@assets/images/home-background.png')}
            style={styles.container}
            imageStyle={styles.backgroundImage}
        >
            <View style={styles.leftSection}>
                <Text style={styles.username}>Hi! Abhishek</Text>
                <Text style={styles.location}>Delhi</Text>
            </View>
            <View style={{ padding: 20 }}>
                <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
                    style={styles.profileImage}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: '100%',
        width: '100%',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        overflow: 'hidden',
    },
    backgroundImage: {
        resizeMode: 'cover',
        height: "100%"
    },
    leftSection: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
    },
    username: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    location: {
        fontSize: 16,
        color: '#fff',
    }
});

export default UserContainer;
