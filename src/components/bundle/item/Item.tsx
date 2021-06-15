import styled from "styled-components";
import { urlFor } from "../../../util";

const ItemRoot = styled.div`
  display: flex;
  width: inherit;
  height: 5em;
  margin-bottom: 0.2em;
  background-color: aqua;
  &:hover {
    background-color: #d4a5a5;
    cursor: pointer;
  }
`;

const ItemFlex = styled.div`
  background-color: #41c420;
  width: 35%;
  height: inherit;
`;

const ItemImg = styled.img.attrs({
  src: urlFor("image_placeholder3.jpg"),
  alt: "item image",
})`
  background-color: #868ab1;
  width: 30%;
  height: inherit;
`;

const ItemName = styled.div`
  height: 50%;
  min-width: inherit;
  background-color: #b186a4;
`;

const ItemPublisher = styled.div`
  height: 50%;
  min-width: inherit;

  background-color: #b19786;
`;

const ItemPrice = styled.div`
  height: 50%;
  min-width: inherit;
  background-color: beige;
`;

const ItemLink = styled.div`
  display: flex;
  height: 50%;
  min-width: inherit;
  background-color: #a173c0;
`;

// potentially break into its own component
const LinkHeader = styled.div.attrs({
  children: "Z LIB LINK :",
})`
  background-color: inherit;
  width: 50%;
`;

const LinkButton = styled.button.attrs({
  children: "Link AVAILABLE",
})`
  height: 100%; // to change
  width: 50%;
  background-color: #3cff00;
`;

const Item = (): JSX.Element => (
  <ItemRoot>
    <ItemImg />
    <ItemFlex>
      <ItemName>How not to do Tax Evasion</ItemName>
      <ItemPublisher>Donaldo J Trumpu</ItemPublisher>
    </ItemFlex>
    <ItemFlex>
      <ItemPrice>$69.99</ItemPrice>
      <ItemLink>
        <LinkHeader />
        <LinkButton />
      </ItemLink>
    </ItemFlex>
  </ItemRoot>
);

export default Item;
