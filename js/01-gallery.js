import { galleryItems } from './gallery-items.js';
// Change code below this line
const imgGalleryItem = document.querySelector('.gallery');
const imgGallery = createDivs(galleryItems);

imgGalleryItem.insertAdjacentHTML('beforeend', imgGallery);

function createDivs(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return`
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
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
     
    const instance = basicLightbox.create(`<img class="modal__image" src="${modalEl}"/>`);
    instance.show();
   
    window.addEventListener('keydown', escPress);
    function escPress(event) {
        const KeyEsc = 'Escape';
        if (event.code === KeyEsc) {
            instance.close();
            window.removeEventListener('keydown', escPress);
        }
    }
}