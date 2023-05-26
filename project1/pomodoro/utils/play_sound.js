import { Audio } from 'expo-av';

const playSound = async () => {
    const soundObject = new Audio.Sound();
    console.log("Playing media")

    try {
      await soundObject.loadAsync(require('../assets/audiotuti.mp4'));
      await soundObject.playAsync();
      // You can also set additional options for the sound, such as volume or looping.
      // For example: await soundObject.setVolumeAsync(0.5);
    } catch (error) {
      console.error('Error playing sound: ', error);
    }
  };

  export default playSound;