import * as THREE from 'three';
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export const loadColumnModel = (scene) => {
  const loader = new GLTFLoader();

  // Define the positions for all four columns
  const columnPositions = [
    { x: 28, y: -3.2, z: -28 },
    { x: -28, y: -3.2, z: -28 },
    { x: 28, y: -3.2, z: 28 },
    { x: -28, y: -3.2, z: 28},
  ];

  loader.load(
    './assets/column/scene.gltf',
    (gltf) => {
      // --- Process the original model first to create a template ---
      const templateColumn = gltf.scene;
      
      templateColumn.traverse((child) => {
        if (child.isMesh && child.material) {
          const oldMaterial = child.material;
          const newMaterial = new THREE.MeshStandardMaterial({
            // Harvest the 'map' (the main texture) from the old material.
            map: oldMaterial.map,
          });

          // Replace the broken material with our new, clean one.
          child.material = newMaterial;
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      // --- Create a column for each position ---
      columnPositions.forEach((pos, index) => {
        // For the first column, use the original template. For the rest, clone it.
        const column = (index === 0) ? templateColumn : templateColumn.clone();

        // Set position and scale for each column
        column.position.set(pos.x, pos.y, pos.z);
        column.rotation.y = Math.PI / 2; 
        column.scale.set(0.33, 0.33, 0.33);
        
        // Add the column to the scene
        scene.add(column);
      });

      console.log("4 column models loaded and materials have been replaced.");
    },
    undefined,
    (error) => {
      console.error('An error occurred while loading the model.', error);
    }
  );
};