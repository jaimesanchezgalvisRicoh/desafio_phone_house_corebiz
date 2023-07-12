import ImageGallery from "react-image-gallery";
import { useWindowSize } from "@react-hook/window-size/throttled";
import sliderImagesfrom from "../data/sliderImages.json";

import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/components/sliderComponent.css";

export const Slider = () => {
  const [widthD] = useWindowSize();

  const images = sliderImagesfrom.map((image) => {
    function getImageUrl(name) {
      return new URL(`../assets/slider/${name}.png`, import.meta.url).href;
    }

    const imgURL = getImageUrl(widthD > 768 ? image.desktop : image.mobile);

    return {
      original: imgURL,
      desktop: imgURL,
    };
  });

  return (
    <ImageGallery
      showThumbnails={false}
      showBullets={true}
      items={images}
      showPlayButton={false}
      aria-label="Slider"
      showFullscreenButton={false}
      showNav={false}
    />
  );
};
