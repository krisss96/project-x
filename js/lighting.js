import * as THREE from 'three';

export const setupLighting = (scene, paintings) => {
 
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); 

    //Hemisphere Light for Soft Fill
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
   hemiLight.position.set(0, 50, 0);
   scene.add(hemiLight);
    
    scene.add(ambientLight);

    //Create spotlight
    function createSpotLight(x, y, z, intensity, targetPosition) {
        const spotlight = new THREE.SpotLight(0xffffff, intensity);
        spotlight.position.set(x, y, z);
        spotlight.target.position.copy(targetPosition);
        spotlight.castShadow = true;
        spotlight.angle = 1.57079;
        spotlight.penumbra = 0.2;
        spotlight.decay = 1;
        spotlight.intensity = 10; 
        spotlight.distance = 40;
        spotlight.shadow.mapSize.width = 1024;
        spotlight.shadow.mapSize.height = 1024;
        return spotlight
    }
 
    const ceilingY = 16; // Set to ceiling height

    paintings.forEach((painting) => {
        const pos = painting.position;
        // Place the spotlight at the ceiling, horizontally aligned with the painting
        const spotLight = createSpotLight(pos.x, ceilingY, pos.z, 3, pos);
        scene.add(spotLight);
        scene.add(spotLight.target);
    });
};