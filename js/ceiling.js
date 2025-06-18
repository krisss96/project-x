import * as THREE from 'three';

export const createCeiling = (scene, textureLoader) => {

    // Texture loader (ceiling)
    const ceilingTexture = textureLoader.load('static/ceiling1.jpg');

    // Ceiling plane
        const ceilingGeometry = new THREE.PlaneGeometry( 60, 60 ); // (x, y)
        const ceilingMaterial = new THREE.MeshLambertMaterial ({
            map: ceilingTexture,
        })  
        
        const ceilingPlane = new THREE.Mesh( ceilingGeometry, ceilingMaterial );
    
        scene.add(ceilingPlane);
    
       ceilingPlane.rotation.x = Math.PI / 2; // rotate to -90 degrees
       ceilingPlane.position.y = 16;
    
       scene.add(ceilingPlane);

}