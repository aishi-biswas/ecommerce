const productMainImages = document.querySelectorAll(".default .main-img img");
const productThumbnails = document.querySelectorAll(".default .thumb-list div");
const lightboxMainImages = document.querySelectorAll(".lightbox .main-img img");
const lightboxThumbnailImages = document.querySelectorAll(".lightbox .thumb-list div");
const imageLightbox = document.querySelector(".lightbox");
const closeLightboxIcon = document.querySelector(".icon-close");
const prevImageIcon = document.querySelector(".icon-prev");
const nextImageIcon = document.querySelector(".icon-next");

let activeImageIndex = 0;

const switchImage = (index, mainImages, thumbnailImages) => {
  mainImages.forEach((img) => {
    img.classList.remove("active");
  });
  thumbnailImages.forEach((thumb) => {
    thumb.classList.remove("active");
  });

  mainImages[index].classList.add("active");
  thumbnailImages[index].classList.add("active");
  activeImageIndex = index;
};

productThumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    switchImage(index, productMainImages, productThumbnails);
  });
});

lightboxThumbnailImages.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    switchImage(index, lightboxMainImages, lightboxThumbnailImages);
  });
});

productMainImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    imageLightbox.classList.add("active");
    switchImage(index, lightboxMainImages, lightboxThumbnailImages);
  });
});

prevImageIcon.addEventListener("click", () => {
  if (activeImageIndex <= 0) {
    switchImage(productMainImages.length - 1, lightboxMainImages, lightboxThumbnailImages);
  } else {
    switchImage(activeImageIndex - 1, lightboxMainImages, lightboxThumbnailImages);
  }
});

nextImageIcon.addEventListener("click", () => {
  if (activeImageIndex >= productMainImages.length - 1) {
    switchImage(0, lightboxMainImages, lightboxThumbnailImages);
  } else {
    switchImage(activeImageIndex + 1, lightboxMainImages, lightboxThumbnailImages);
  }
});

closeLightboxIcon.addEventListener("click", () => {
  imageLightbox.classList.remove("active");
});
