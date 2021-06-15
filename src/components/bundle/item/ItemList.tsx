import styled from "styled-components";
import Item from "./Item";

const ItemContainer = styled.div`
  min-height: 6em;
  max-height: 18em;
  width: 50em;
  background-color: red;
  padding: 1%;
  margin: 1%;
`;

const ItemList = (): JSX.Element => (
  <ItemContainer>
    <Item />
    <Item />
    <Item />
  </ItemContainer>
);

export default ItemList;
