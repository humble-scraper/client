import styled from "styled-components";
import { ItemProps } from "../BundleContentProps";

const ItemRoot = styled.div`
  display: flex;
  width: inherit;
  height: 5em;
  margin-bottom: 0.2em;
  background-color: #282c34;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: white;
  &:hover {
    background-color: #282c343e;
    cursor: pointer;
    color: #070707;
  }
`;

const ItemFlex = styled.div`
  background-color: transparent;
  width: 35%;
  height: inherit;
`;

const ItemImg = styled.img.attrs({
  alt: "item image",
})`
  background-color: #868ab1;
  width: 30%;
  height: inherit;
`;

const ItemName = styled.div`
  height: 50%;
  min-width: inherit;
  background-color: transparent;
`;

const ItemPublisher = styled.div`
  height: 50%;
  min-width: inherit;

  background-color: transparent;
`;

const ItemPrice = styled.div`
  height: 50%;
  min-width: inherit;
  background-color: transparent;
  text-align: right;
  align-items: center;
  padding-right: 4em;
`;

const ItemLink = styled.div`
  display: flex;
  height: 50%;
  min-width: inherit;
  background-color: transparent;
`;

// potentially break into its own component
const LinkHeader = styled.div`
  background-color: inherit;
  width: 50%;
`;

const LinkButton = styled.button.attrs({
  children: "Link Available",
})`
  height: 100%; // to change
  width: 50%;
  background-color: #54e628;
  &:hover {
    background-color: #3ba81a99;
    cursor: pointer;
  }
  &:active {
    background-color: red;
    cursor: pointer;
  }
`;

const Item = ({
  itemTitle,
  itemImage,
  itemPrice,
  itemPublisher,
}: ItemProps = {}): JSX.Element => (
  <ItemRoot>
    <ItemImg src={itemImage} />
    <ItemFlex>
      <ItemName>{itemTitle}</ItemName>
      <ItemPublisher>{itemPublisher}</ItemPublisher>
    </ItemFlex>
    <ItemFlex>
      <ItemPrice>{itemPrice}</ItemPrice>
      <ItemLink>
        <LinkHeader />
        <LinkButton />
      </ItemLink>
    </ItemFlex>
  </ItemRoot>
);

export default Item;
