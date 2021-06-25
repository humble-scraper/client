import styled from "styled-components";
import { ItemProps } from "./BundleContentProps";
import ItemList from "./item/ItemList";
import Mirror from "./mirror/Mirror";

const ExpandedModalRoot = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  padding-top: 3%;
  padding-left: 13%;
  left: 0;
  top: 0;
  justify-content: center;
`;

const ExpandedRoot = styled.div`
  min-height: 90%;
  width: 75em;
  background-color: #282c34;
  display: block;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2),
    0 6px 20px 0 rgba(247, 244, 244, 0.19);
`;

const ExpandedFlex = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 7em;
  max-height: 60000em;
`;

const ImgService = styled.img.attrs({
  alt: "Some image but expanded",
})`
  height: 8em;
  width: 100%;
`;

const CoolRainbowThingy = styled.div`
  height: 0.5em;
  width: inherit;
  background-image: linear-gradient(
    130deg,
    #ff7a18,
    #af002d 41.07%,
    #319197 76.05%
  );
`;

const Title = styled.div`
  width: 50%;
  padding: 0.5em;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 1.25em;
  color: #ffffff;
  margin: 0.5em;
`;

const CloseButton = styled.button.attrs({
  children: "Close",
})`
  height: 4em;
  width: 40%;
  align-self: center;
  margin-left: 30%;
  margin-right: 30%;
  color: white;
  font-size: large;
  background-color: #282c34a7;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2),
    0 6px 20px 0 rgba(247, 244, 244, 0.19);
`;

type ExpandedProps = {
  open?: () => void;
  bundleTitle?: string;
  bundleExpandedImage?: string;
  bundleItems?: ItemProps[];
};

const Expanded = (
  { open, bundleTitle, bundleExpandedImage, bundleItems }: ExpandedProps = {
    open: () => undefined,
  }
): JSX.Element => (
  <ExpandedModalRoot>
    <ExpandedRoot>
      <ImgService src={bundleExpandedImage} />
      <CoolRainbowThingy />
      <Title>{bundleTitle}</Title>
      <ExpandedFlex>
        <ItemList itemList={bundleItems} />
        <Mirror bundleTitle={bundleTitle} />
      </ExpandedFlex>
      <ExpandedFlex>
        <CloseButton onClick={open} />
      </ExpandedFlex>
      <CoolRainbowThingy />
    </ExpandedRoot>
  </ExpandedModalRoot>
);

export default Expanded;
