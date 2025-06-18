// Painting info
export function displayPaintingInfo(info) {
    const infoElement = document.getElementById('painting-info');

    //Set HTML content inside info element
    infoElement.innerHTML =
       `
       <h2>${info.title}</h2>
        <p>Artist: ${info.artist}</p>
        <p>Description: ${info.description}</p> 
        `;

    infoElement.classList.add('show'); // add the show class
};

// Hide painting info in the DOM
export const hidePaintingInfo= () => {
 const infoElement = document.getElementById('painting-info');
 infoElement.classList.remove('show'); // remove gthe show class


};
