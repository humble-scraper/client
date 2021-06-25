import styled from "styled-components";
import Item from "./Item";
import { ItemProps } from "../BundleContentProps";

const ItemContainer = styled.div`
  min-height: 6em;
  max-height: 18em;
  min-width: 53em;
  background-color: #7d828a;
  padding-left: 0.5%;
  padding-right: 0.5%;
  padding-top: 0.5%;
  padding-bottom: 0%;
  margin: 1%;
  overflow-y: scroll;
`;

type itemListProps = {
  itemList?: ItemProps[];
};

const ItemList = ({ itemList }: itemListProps = {}): JSX.Element => (
  <ItemContainer>
    {itemList.map((item: ItemProps) => (
      <Item {...item} key={item.itemTitle} />
    ))}
  </ItemContainer>
);

export default ItemList;
