import { Image, Input } from "@nextui-org/react";
import search from "../assets/search.png";

export const SearchComponent = () => {
  return (
    <Input
      labelPlaceholder="¿Que estas buscando?"
      clearable
      underlined
      width="100%"
      maxwidth="800px"
      contentRight={<Image src={search} alt="search" />}
    ></Input>
  );
};
