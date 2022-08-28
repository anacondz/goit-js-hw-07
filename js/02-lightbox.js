import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgGalleryItem = document.querySelector('.gallery');
const imgGallery = createDivs(galleryItems);

imgGalleryItem.insertAdjacentHTML('beforeend', imgGallery);

function createDivs(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return`
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('');
}
imgGalleryItem.addEventListener('click', bigSizeImg);

function bigSizeImg(event) {
    event.preventDefault();
    const imgColor = event.target.classList.contains(`gallery__image`);
 
    if (!imgColor) {
        return;
    }
   
    const modalEl = event.target.dataset.source;

    var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
        captionPosition: 'bottom'
    });
}