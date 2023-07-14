import { useState, useEffect } from "react";

function useImageAvailability(imageUrl) {
  const [isImageAvailable, setIsImageAvailable] = useState(false);

  useEffect(() => {
    const checkImageAvailability = async () => {
      try {
        const response = await fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent(imageUrl)}`
        );

        if (response.status === 401) {
          setIsImageAvailable(false);
        }
      } catch (error) {
        setIsImageAvailable(false);
      }
    };

    if (imageUrl) {
      checkImageAvailability();
    }
  }, [imageUrl]);

  return isImageAvailable;
}

export default useImageAvailability;
