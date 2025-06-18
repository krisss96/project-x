import * as THREE from 'three';

export function createWalls(scene, textureLoader) {
    let wallGroup = new THREE.Group(); // creating group to hold the walls
    scene.add(wallGroup);

// Texture loader (walls)
const wall1Texture = textureLoader.load('static/leather_red_03_coll1_4k.png')
wall1Texture.wrapS = THREE.RepeatWrapping; //  wrap the texture horizontally
wall1Texture.wrapT = THREE.RepeatWrapping; // wrap the texture vertically   
wall1Texture.repeat.set( 1, 1); 
 ///for better quality of img
   wall1Texture.anisotropy = 16;
   wall1Texture.minFilter = THREE.LinearMipMapLinearFilter;
   wall1Texture.magFilter = THREE.LinearFilter; 


const wallMatherial = new THREE.MeshLambertMaterial({map: wall1Texture})


// Front wall
const frontWall = new THREE.Mesh (
    new THREE.BoxGeometry(60, 32, 0.001 ),
    new THREE.MeshLambertMaterial({ map: wall1Texture})
);

frontWall.position.z = -30; // move to the back

// Left wall
const leftWall = new THREE.Mesh (
    new THREE.BoxGeometry( 60, 32, 0.001),
    new THREE.MeshLambertMaterial({ map: wall1Texture})
);


leftWall.rotation.y = Math.PI / 2; // rotate to 90 degrees
leftWall.position.x = -30 ;


// Right wall 
const rightWall = new THREE.Mesh (
    new THREE.BoxGeometry( 60, 32, 0.001),
    new THREE.MeshLambertMaterial({ map: wall1Texture})
);

rightWall.rotation.y = -Math.PI / 2; // rotate to -90 degrees
rightWall.position.x = 30;


// Back wall
const backWall = new THREE.Mesh (
    new THREE.BoxGeometry( 60, 32, 0.001),
    new THREE.MeshLambertMaterial({  map: wall1Texture})
);

backWall.position.z = 30;

wallGroup.add(frontWall, rightWall, leftWall, backWall);

return wallGroup;

}