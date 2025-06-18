import * as THREE from 'three';

// check if objects is an array. If it's not, we assume it's a THREE.Group and set objects to objects.children. We then use forEach to loop over each object in objects and add a bounding box to it
export const createBoundingBoxes = (objects) => {
  // objects will be either paintings or walls that we pass in from main.js
  if (!objects) return;

  if (!Array.isArray(objects)) {
    objects = objects.children;
  }

  if (!objects) return;

  objects.forEach((object) => {
    object.BoundingBox = new THREE.Box3(); // create a new bounding box for each object
    object.BoundingBox.setFromObject(object); // set the bounding box to the object (painting or wall)
  });
};

// Note: Without the checking won't work!
// if (!Array.isArray(objects)) {
//     objects = objects.children;
//   
