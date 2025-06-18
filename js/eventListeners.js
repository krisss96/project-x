import { keysPressed } from "./movement.js"; // import the keysPressed object
import { showMenu, hideMenu } from "./menu.js"; // import the showMenu function
import { startAudio, stopAudio} from "./audioGuide.js";


// by deafault-
let lockPointer = true;
let showMenuOnLock = false;


export const setupEventListeners = (controls) => {
    //add event listeeners to the document which is the whole page
    document.addEventListener(
        "keydown",
         (event) => onKeyDown(event, controls), 
         false
        );// keydown event when key is pressed

    document.addEventListener(
        "keyup",
         (event) => onKeyUp(event, controls), 
          false
        ); // keyup event when key is released

    controls.addEventListener("unlock", () => {
        if (showMenuOnLock) {
            showMenu();
        }
        showMenuOnLock = false;
    });// add event listerer to the controls to show men u when the  pointer is unlocked

    // Add eventlisteners for audio
   document.getElementById("start-audio").addEventListener("click", startAudio);
   document.getElementById("stop-audio").addEventListener("click", stopAudio);

};

// toggle pointerlock
function togglePointerLock(controls) {
    if (lockPointer) {
        controls.lock();
    } else {
        showMenuOnLock = false;
        controls.unlock();

    }
    
    lockPointer = !lockPointer; //toggle the variable
}

function onKeyDown(event, controls) {
    // the event object that has key property
    if (event.key in keysPressed) {
        // check if key is pressed
        keysPressed[event.key] = true; // if yes, set the value of the key presse dto true
    }

    // if we press keyboard- taggle pointerlock
    if(event.key=== " " || event.key === 'Space') {
        togglePointerLock(controls);
    } 
    

    if(event.key ===  'Escape') {
        showMenu()
        showMenuOnLock = true;
        controls.unlock();
        lockPointer = false;
    }


      if(event.key === 'Enter') {
        hideMenu()
        controls.lock();
        lockPointer = true;
    }

    
}

function onKeyUp(event) {
    if(event.key in keysPressed) {
       
        keysPressed[event.key] = false; // set to false until key is relieased
    }    
}