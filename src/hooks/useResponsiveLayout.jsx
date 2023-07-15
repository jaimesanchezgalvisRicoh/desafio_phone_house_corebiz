import { useWindowSize } from "@react-hook/window-size";

export const useResponsiveLayout = () => {
  const [windowWidth] = useWindowSize();

  return windowWidth;
};
