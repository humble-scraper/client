import styled from "styled-components";
import Item from "./Item";

const ItemContainer = styled.div`
  min-height: 6em;
  max-height: 18em;
  width: 53em;
  background-color: #7d828a;
  padding-left: 0.5%;
  padding-right: 0.5%;
  padding-top: 0.5%;
  padding-bottom: 0%;
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
