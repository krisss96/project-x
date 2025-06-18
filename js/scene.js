import * as THREE from 'three';
import {PointerLockControls} from 'three-stdlib';

//Scene
 export const scene = new THREE.Scene();
let camera;
let controls;
let renderer;

export const setupScene = () => {

//Camera
const camera = new THREE.PerspectiveCamera( // Camera that mimics how the human eye see things
    75, // field of view (can try 60 later)
    window.innerWidth / window.innerHeight,
    1, // near
    1000 // far
); 

scene.add(camera);
camera.position.set(0, 3, 0); // moves camera 3units in Y axis

//Renderer
renderer = new THREE.WebGLRenderer({antialias: false}); // used for smooth edges
renderer.setSize( window.innerWidth, window.innerHeight ); 
renderer.setClearColor(0xffffff, 1); // background colour (color/intensity)
document.body.appendChild( renderer.domElement); // adding renderer to HTML 

renderer.shadowMap.enabled = true // enable shadow mapping
renderer.shadowMap.type = THREE.PCFSoftShadowMap // renderer.shadowMap.type- property that defines the type of shadow map used by renderer
// THREE.PCFSoftShadowMap- type of shadow map to smooth the edges of shadows and make them appear softer

//Controls
const controls = new PointerLockControls(camera, renderer.domElement); // PointerLockControls allows camera to be controled by mouse and keyboard
scene.add(controls.getObject()); // add  PointerLockControls object to the scene

window.addEventListener("resize", onWindowResize, false); // add an event listener to the window that calls the onWindowResize function when the window is resized. Its work is to update the camera's aspect ratio and the renderer's size. The third parameter is set to false to indicate that the event listener should be triggered in the bubbling phase instead of the capturing phase. The bubbling phase is when the event bubbles up from the target element to the parent elements. The capturing phase is when the event trickles down from the parent elements to the target element. 
  
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight; // update the camera's aspect ratio
    camera.updateProjectionMatrix(); //The projection matrix is used to determine how 3D points are mapped to the 2D space of the screen
    renderer.setSize(window.innerWidth, window.innerHeight); // update the size of the renderer
  }

  return { camera, controls, renderer }; // return the camera, controls, and renderer so that they can be used in other modules
};


