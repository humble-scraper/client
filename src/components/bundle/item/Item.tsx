import styled from "styled-components";

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
  height: 50%;
  min-width: inherit;
  background-color: #a173c0;
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
      <ItemLink>www.ThiccBois.com</ItemLink>
    </ItemFlex>
  </ItemRoot>
);

export default Item;
