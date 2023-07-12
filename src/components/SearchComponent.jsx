import { Image, Input } from "@nextui-org/react";
import search from "../assets/search.png";

export const SearchComponent = () => {
  return (
    <Input
      Placeholder="¿Que estas buscando?"
      clearable
      underlined
      width="100%"
      maxwidth="50rem"
      contentRight={<Image src={search} alt="search" />}
    ></Input>
  );
};
