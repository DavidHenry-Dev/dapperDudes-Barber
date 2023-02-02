import react from "react";
import ImageGallery from "react-image-gallery";
import { barber1, barber2, barber3 } from "../assets";
import lookBook from "../assets/gallery";

const Gallery = () => {
const images = lookBook.map((img, i )=> {
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