import * as THREE from 'three';

let sound; // audio sorce veriable
let bufferLoaded = false; // if not loaded audio dosn't play

export const setupAudio = (camera) => {

const listener = new THREE.AudioListener();
camera.add(listener);

sound = new THREE.Audio(listener);

const audioLoader = new THREE.AudioLoader();
audioLoader.load("sounds/a-quick-one-before-the-eternal-worm-devours-connecticut-youtubemp3free.org.mp3", function(buffer) {
    sound.setBuffer(buffer); // set the audio sorce to buffer
    sound.setLoop(true); // set loop
    sound.setVolume(0.5); // set volume
    bufferLoaded = true; // once it's loaded- true
});

};

//playing audio
export const startAudio = () => {
 if (sound && bufferLoaded) {
    sound.play();
 }
    
};

export const stopAudio = () => {
 if (sound) {
    sound.pause();
 }
    
};

