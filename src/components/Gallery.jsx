import ImageGallery from "react-image-gallery";
import galleryAssets from "../assets/galleryAssets";

const Gallery = () => {
const images = galleryAssets.map((img, i )=> {
    return {
      original: img,
      originalHeight: "600px",
      key: i,
    };
  });

return (
        <ImageGallery items={images}  />
    )
}

export default Gallery


// npm Install react-images
// npm install react-photo-gallery
// Download photos for gallery form unsplash etc etc
// create object containg them
// code out basic gallery and get it working
// style gallery page