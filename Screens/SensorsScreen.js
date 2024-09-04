import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Location from 'react-native-location';
import { Accelerometer } from 'expo-sensors';

export default function SensorsScreen() {
    const [location, setLocation] = useState(null);
    const [accelerometerData, setAccelerometerData] = useState({});

    useEffect(() => {
        let locationSubscription;
        let accelerometerSubscription;

        // Configure the Location API for high accuracy
        Location.configure({
            distanceFilter: 0, // Receive updates regardless of distance change
        });

        (async () => {
            // Request location permissions from the user
            const permission = await Location.requestPermission({
                ios: "whenInUse", // or "always"
                android: {
                    detail: "fine" // or "coarse"
                }
            });

            if (permission === "authorizedWhenInUse" || permission === "authorizedAlways") {
                // Start watching the user's location
                locationSubscription = Location.subscribeToLocationUpdates(locations => {
                    const location = locations[0]; // Take the first result from the location array
                    setLocation({
                        latitude: location.latitude,
                        longitude: location.longitude,
                        altitude: location.altitude,
                        speed: location.speed,
                    });
                });
            }

            // Subscribe to accelerometer data
            accelerometerSubscription = Accelerometer.addListener(data => {
                setAccelerometerData(data);
            });

            // Set the update interval for the accelerometer
            Accelerometer.setUpdateInterval(500);
        })();

        return () => {
            // Clean up location and accelerometer subscriptions
            if (locationSubscription) locationSubscription();
            if (accelerometerSubscription) accelerometerSubscription.remove();
        };
    }, []);

    return (
        <View>
            {location && (
                <View>
                    <Text>Latitude: {location.latitude}</Text>
                    <Text>Longitude: {location.longitude}</Text>
                    <Text>Altitude: {location.altitude}</Text>
                    <Text>Speed: {location.speed}</Text>
                </View>
            )}
            <Text>Accelerometer X: {accelerometerData.x}</Text>
            <Text>Accelerometer Y: {accelerometerData.y}</Text>
            <Text>Accelerometer Z: {accelerometerData.z}</Text>
        </View>
    );
}
