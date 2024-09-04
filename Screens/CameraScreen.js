import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, Image, Alert } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import * as FileSystem from 'expo-file-system';

export default function CameraScreen({ navigation }) {
    const [hasPermission, setHasPermission] = useState(false);
    const [photoUri, setPhotoUri] = useState(null);
    const cameraRef = useRef(null);

    const devices = useCameraDevices();
    const device = devices.back;

    // Request Camera Permission
    useEffect(() => {
        (async () => {
            const status = await Camera.requestCameraPermission();
            setHasPermission(status === 'authorized');
        })();

        return () => {
            // Cleanup camera when leaving the screen
            if (cameraRef.current) {
                cameraRef.current.stopRecording();
            }
        };
    }, []);

    const takePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePhoto({
                qualityPrioritization: 'balanced',
            });
            setPhotoUri(`file://${photo.path}`);
        }
    };

    const savePhoto = async () => {
        const fileName = `${FileSystem.documentDirectory}photo_${Date.now()}.jpg`;
        await FileSystem.moveAsync({
            from: photoUri,
            to: fileName,
        });
        setPhotoUri(null);
        Alert.alert("Photo saved successfully!");
    };

    const discardPhoto = () => {
        setPhotoUri(null);
    };

    if (!device || !hasPermission) {
        return <Text>Requesting camera permission...</Text>;
    }

    return (
        <View style={{ flex: 1 }}>
            {photoUri ? (
                <View style={{ flex: 1 }}>
                    <Image source={{ uri: photoUri }} style={{ width: '100%', height: '80%' }} />
                    <Button title="Save Photo" onPress={savePhoto} />
                    <Button title="Discard Photo" onPress={discardPhoto} />
                </View>
            ) : (
                <Camera
                    style={{ flex: 1 }}
                    ref={cameraRef}
                    device={device}
                    isActive={true}
                    photo={true}
                />
            )}
            <Button title="Take Picture" onPress={takePicture} />
        </View>
    );
}
