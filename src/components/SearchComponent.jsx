import { Image, Input } from "@nextui-org/react";
import search from "../assets/icons/search.png";

export const SearchComponent = () => {
  return (
    <Input
      placeholder="¿Que estas buscando?"
      clearable
      underlined
      width="100%"
      maxwidth="50rem"
      contentRight={<Image src={search} alt="search" />}
    ></Input>
  );
};
