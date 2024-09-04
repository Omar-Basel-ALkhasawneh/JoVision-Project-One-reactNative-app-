import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, RefreshControl, Image } from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function GalleryScreen() {
    const [images, setImages] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const loadImages = async () => {
        const files = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
        setImages(files.filter(file => file.endsWith('.jpg')));
    };

    useEffect(() => {
        loadImages();
    }, []);

    const onRefresh = async () => {
        setRefreshing(true);
        await loadImages();
        setRefreshing(false);
    };

    return (
        <View>
            <FlatList
                data={images}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Image source={{ uri: FileSystem.documentDirectory + item }} style={{ width: 100, height: 100 }} />
                )}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
        </View>
    );
}
