import { Card } from "@nextui-org/react";
import useImageAvailability from "../hooks/useImageAvailability";
import PropTypes from "prop-types";
import { defaultImage } from "../assets/images.js";


export const ProductImage = ({ imageUrl }) => {
  const isImageAvailable = useImageAvailability(imageUrl);

  return (
    <Card.Image
      src={isImageAvailable ? imageUrl : defaultImage}
      width="100%"
      height="100%"
      objectFit="cover"
      alt="Card example background"
    />
  );
};

ProductImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
