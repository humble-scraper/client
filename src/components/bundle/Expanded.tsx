import styled from "styled-components";
import { urlFor } from "../../util";

const ExpandedModalRoot = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  width: 100%;
  height: 100%; 
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;
  padding-top: 3%;
  padding-left: 20%;
  left: 0;
  top: 0;
`;

const ExpandedRoot = styled.div`
  height: 85%;
  width: 60em;
  background: linear-gradient(
    to right,
    #bf953f,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #aa771c
  );
  margin: 1%;
  display: block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ExpandedFlex = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 29%;
`;

const ImgService = styled.img.attrs({
  src: urlFor("image_placeholder2.jpg"),
  alt: "Some image but expanded",
})`
  height: 70%;
  width: 100%;
  background-color: #a59225;
`;

const Title = styled.div.attrs({
  children: "Gold Butterfly",
})`
  width: 50%;
  padding: 0.5em;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #524c4c;
`;

const BigAssButton = styled.button`
  width: 30%;
  height: 50%;
  margin-left: 2.1em;
  align-self: center;
  border-radius: 4px;
  background-color: gold;
`;

type ExpandedProps = { open?: () => void };

const Expanded = (
  { open }: ExpandedProps = { open: () => undefined }
): JSX.Element => (
  <ExpandedModalRoot>
    <ExpandedRoot>
      <ImgService />
      <ExpandedFlex>
        <Title />
        <BigAssButton onClick={open}>Close this window</BigAssButton>
      </ExpandedFlex>
    </ExpandedRoot>
  </ExpandedModalRoot>
);

export default Expanded;
