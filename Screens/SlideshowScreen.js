import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Button, FlatList } from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function SlideshowScreen() {
    const [images, setImages] = useState([]);
    const [isPaused, setIsPaused] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef();

    const loadImages = async () => {
        const files = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
        setImages(files.filter(file => file.endsWith('.jpg')));
    };

    useEffect(() => {
        loadImages();
    }, []);

    useEffect(() => {
        let interval;
        if (!isPaused && images.length > 0) {  // Add check for empty images array
            interval = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPaused, images]);

    useEffect(() => {
        flatListRef.current?.scrollToIndex({ index: currentIndex });
    }, [currentIndex]);

    return (
        <View>
            <FlatList
                ref={flatListRef}
                data={images}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Image source={{ uri: FileSystem.documentDirectory + item }} style={{ width: 300, height: 300 }} />
                )}
                horizontal
                pagingEnabled
                scrollEnabled={false}
            />
            <Button title={isPaused ? 'Resume' : 'Pause'} onPress={() => setIsPaused(!isPaused)} />
        </View>
    );
}
