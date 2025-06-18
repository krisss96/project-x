import * as THREE from 'three';
import { displayPaintingInfo, hidePaintingInfo } from "./paintinginfo.js";
import { updateMovement } from "./movement.js";

export const setupRendering = (
  scene,
  camera,
  renderer,
  paintings,
  controls,
  walls
) => {
    const clock = new THREE.Clock(); // clock to keep track of the time between frames
    
    let render = function () {
        const delta = clock.getDelta(); // get the time between frames
    
        updateMovement(delta, controls, camera, walls); // update the movement of the camera
    
        const distanceThreshold = 8; // set a distance treshold - 8 units
    
        let paintingToShow;
        paintings.forEach((painting) => {
            // loop through all paintings
            const distanceToPainting = camera.position.distanceTo(painting.position); // get distance to painting
    
            if (distanceToPainting < distanceThreshold) { // if dostance is less than treshold(8units)
                paintingToShow = painting; // painting will show
    
    
            }
        });
    
        if (paintingToShow) { // if there is painting to stow
            displayPaintingInfo(paintingToShow.userData.info); // displays painting info
        } else {
            hidePaintingInfo(); // otherwise hide  the info
        }


         renderer.gammaOutput = true;
         renderer.gammaFactor = 2.2;

         renderer.render(scene, camera);
         requestAnimationFrame(render);
        };

  render();
};
