import * as THREE from 'three';

import { paintingData } from './paintingData.js';

export function createPaintings(scene, textureLoader) {
 
    let paintings = [];

     const frameTexture = textureLoader.load('static/524aa21eace2c7f87ee0db3023b36e0b-removebg-preview.png');

     const paintingLayout = [
    // Front Wall
    { width: 7.5, height: 9.5, position: { x: -17, y: 5.2, z: -29 }, rotationY: 0 },
    { width: 12.6, height: 7, position: { x: -1.2, y: 4, z: -29 }, rotationY: 0 },
    { width: 10, height: 7.6, position: { x: 16, y: 4.3, z: -29 }, rotationY: 0 },

    // Right Wall
    { width: 6.6, height: 11, position: { x: 29, y: 4.1, z: -16.5 }, rotationY: -Math.PI / 2 },
    { width: 9, height: 11.6, position: { x: 29, y: 4.3, z: 0 }, rotationY: -Math.PI / 2 },
    { width: 8.5, height: 11, position: { x: 29, y: 4.1, z: 16.5 }, rotationY: -Math.PI / 2 },

    // Left Wall
    { width: 8.1, height: 6, position: { x: -29, y: 4.2, z: -16}, rotationY: Math.PI / 2 },
    { width: 7.8, height: 5.5, position: { x: -29, y: 4, z: -1 }, rotationY: Math.PI / 2 },
    { width: 10.3, height: 7.6, position: { x: -29, y: 5, z: 15}, rotationY: Math.PI / 2 },

    // Back Wall
    { width: 8, height: 11.1, position: { x: -18, y: 5, z: 29}, rotationY: Math.PI },
    { width: 21, height: 14, position: { x: 1, y: 5.1, z: 29 }, rotationY: Math.PI },
    { width: 6, height: 8.6, position: { x: 19, y: 3.8, z: 29 }, rotationY: Math.PI },
  ];

  paintingData.forEach((data, i) => {
    const layout = paintingLayout[i];

    const painting = new THREE.Mesh(
      new THREE.PlaneGeometry(layout.width, layout.height),
      new THREE.MeshStandardMaterial({ map: textureLoader.load(data.imgSrc), roughness: 0.7, metalness: 0.0 })
    );

    painting.position.set(layout.position.x, layout.position.y, layout.position.z);
    painting.rotation.y = layout.rotationY;

   painting.userData = {
      type: 'painting', 
      info: data.info, 
      url: data.info.link
    };

    painting.castShadow = true;// sets painting to cast shadow
    painting.receiveShadow = true; // set the painting to receive shadow

    // Frame
    const frameWidth = layout.width + 2;   
        const frameHeight = layout.height + 2; 
        const frame = new THREE.Mesh(
            new THREE.PlaneGeometry(frameWidth, frameHeight),
            new THREE.MeshLambertMaterial({ map: frameTexture, transparent: true })
        );
        frame.position.copy(painting.position);
        frame.rotation.copy(painting.rotation);
        frame.translateZ(-0.01); 
        frame.rotation.y = layout.rotationY;
        frame.castShadow = false;
        frame.receiveShadow = false;
        
        scene.add(frame);

    paintings.push(painting);
    scene.add(painting);
});

    return paintings;
}