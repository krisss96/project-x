import * as THREE from 'three';

export const setupFloor = (scene) => {
    const textureLoader = new THREE.TextureLoader();
    const floorTexture = textureLoader.load('static/Tiles131_8K-JPG_Color.jpg');

    floorTexture.wrapS = THREE.RepeatWrapping; //  wrap the texture horizontally
    floorTexture.wrapT = THREE.RepeatWrapping; // wrap the texture vertically   
    floorTexture.repeat.set( 5, 5); // repeat the texture 10 times in both directions
    ///for better quality of img
    floorTexture.anisotropy = 16;
    floorTexture.minFilter = THREE.LinearMipMapLinearFilter;
    floorTexture.magFilter = THREE.LinearFilter;

    // Floor plane
    const planeGeometry = new THREE.PlaneGeometry( 60, 60 ); // (x, y)
    const planeMaterial = new THREE.MeshStandardMaterial({ 
        map: floorTexture, 
        side: THREE.DoubleSide, // both sides of the plane will be visible
    }); 
    
    const floorPlane = new THREE.Mesh( planeGeometry, planeMaterial ); 
    
    floorPlane.rotation.x = Math.PI / 2; // rotate to 90 degrees
    floorPlane.position.y = -Math.PI;  // rotate -180 degrees
    
    
    scene.add(floorPlane); // adds floor to scene

};