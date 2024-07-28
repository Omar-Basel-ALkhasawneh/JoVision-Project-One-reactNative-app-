// Tasks/Task32.js

import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';

const videoUrl = 'https://www.w3schools.com/html/mov_bbb.mp4'; // Replace with your video URL
const posterUrl = 'https://via.placeholder.com/1280x720.png?text=Poster+Image'; // Replace with your high-quality poster URL

const Task32 = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPress = () => {
    setIsPlaying(true);
  };

  return (
    <View style={styles.container}>
      {isPlaying ? (
        <Video
          source={{ uri: videoUrl }}
          style={styles.video}
          poster={posterUrl}
          posterResizeMode="cover"
          resizeMode="contain"
          controls={true}
          paused={!isPlaying}
        />
      ) : (
        <TouchableOpacity style={styles.posterContainer} onPress={handlePlayPress}>
          <Image source={{ uri: posterUrl }} style={styles.poster} />
          <Icon name="play-circle-outline" size={64} color="white" style={styles.playIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  posterContainer: {
    position: 'relative',
  },
  poster: {
    width: width * 0.9,
    height: width * 0.9 * 9 / 16, // 16:9 aspect ratio
  },
  playIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -32 }, { translateY: -32 }],
  },
  video: {
    width: width * 0.9,
    height: width * 0.9 * 9 / 16, // 16:9 aspect ratio
  },
});

export default Task32;
