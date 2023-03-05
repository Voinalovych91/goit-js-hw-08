// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');
const galleryCardEl = createGalleryCard(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryCardEl);

function createGalleryCard(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `;
        })
        .join('');
}

new SimpleLightbox('.gallery a',
    {
        captionSelector: 'img',
        captionType: 'attr',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250
    });