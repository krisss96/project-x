import * as THREE from 'three';
import {scene, setupScene} from './scene.js';
import { createPaintings } from "./paintings.js";
import { createWalls } from "./walls.js";
import { setupLighting } from "./lighting.js";
import { setupFloor } from "./floor.js";
import { createCeiling } from "./ceiling.js";
import { createBoundingBoxes } from "./boundingBox.js";
import { setupRendering } from "./rendering.js";
import { setupEventListeners } from "./eventListeners.js";
import { addObjectsToScene } from "./sceneHelpers.js";
import { setupPlayButton, showMenu } from "./menu.js";
import { setupAudio } from "./audioGuide.js";
import { loadColumnModel } from "/js/column.js";



let {camera, controls, renderer} = setupScene();

setupAudio(camera);

// Texture loader
const textureLoader = new THREE.TextureLoader();

const walls = createWalls(scene, textureLoader);
const floor = setupFloor(scene);
const ceiling = createCeiling(scene, textureLoader);
const paintings = createPaintings(scene, textureLoader);
const lighting = setupLighting(scene, paintings);

createBoundingBoxes(walls);

createBoundingBoxes(paintings);

addObjectsToScene(scene, paintings);

setupPlayButton(controls);

document.getElementById('menu-button').addEventListener('click', showMenu);

setupEventListeners(controls);

setupRendering(scene, camera, renderer, paintings, controls, walls);

loadColumnModel(scene);



