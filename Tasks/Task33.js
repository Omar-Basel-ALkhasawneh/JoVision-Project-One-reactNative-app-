// Tasks/Task33.js

import React, { useRef, useState } from 'react';
import { StyleSheet, View, Dimensions, Image, TouchableOpacity, Text } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';

const videoUrl = require('../Resources/video.mp4'); // Ensure the video file exists in the Resources folder
const posterUrl = require('../Resources/poster2.jpg'); // Ensure the poster image exists in the Resources folder

const Task33 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <View style={styles.container}>
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : (
        <TouchableOpacity style={styles.videoContainer} onPress={handleVideoPress}>
          <Video
            ref={videoRef}
            source={videoUrl}
            style={styles.video}
            poster={posterUrl}
            posterResizeMode="cover"
            resizeMode="cover"
            paused={!isPlaying}
            onBuffer={() => console.log('Buffering...')}
            onError={(error) => {
              console.log('Error:', error.error);
              setErrorMessage('Error loading video');
            }}
          />
          {!isPlaying && (
            <>
              <Image source={posterUrl} style={styles.poster} />
              <Icon name="play-circle-outline" size={64} color="white" style={styles.playIcon} />
            </>
          )}
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
  videoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  poster: {
    position: 'absolute',
    width: width * 0.9,
    height: width * 1 * 16 / 9, // 16:9 aspect ratio
  },
  playIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -32 }, { translateY: -32 }],
  },
  video: {
    width: width * 0.97,
    height: width * 1 * 16 / 9, // 16:9 aspect ratio
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
});

export default Task33;
