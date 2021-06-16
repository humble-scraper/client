import { Close } from "@material-ui/icons";
import styled from "styled-components";
import { urlFor } from "../../util";
import ItemList from "./item/ItemList";

const ExpandedModalRoot = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;
  padding-top: 3%;
  padding-left: 15%;
  left: 0;
  top: 0;
  justify-content: center;
`;

const ExpandedRoot = styled.div`
  height: 90%;
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
  max-height: 20em;
`;

const ImgService = styled.img.attrs({
  src: urlFor("image_placeholder2.jpg"),
  alt: "Some image but expanded",
})`
  height: 20%;
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

const Title = styled.div.attrs({
  children: "Quantic Dream Deluxe Bundle",
})`
  width: 50%;
  padding: 0.5em;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #ffffff;
  margin: 1em;
`;

const ItemPrice = styled.div`
  background-color: #7d828a;
  height: 15em;
  margin: 2%;
  width: 96%;
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

type ExpandedProps = { open?: () => void };

const Expanded = (
  { open }: ExpandedProps = { open: () => undefined }
): JSX.Element => (
  <ExpandedModalRoot>
    <ExpandedRoot>
      <ImgService />
      <CoolRainbowThingy />
      <Title />
      <ExpandedFlex>
        <ItemList />
        <ItemPrice />
      </ExpandedFlex>
      <ExpandedFlex>
        <CloseButton onClick={open} />
      </ExpandedFlex>
      <CoolRainbowThingy />
    </ExpandedRoot>
  </ExpandedModalRoot>
);

export default Expanded;
