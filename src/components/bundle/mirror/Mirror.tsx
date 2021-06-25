import styled from "styled-components";

const MirrorRoot = styled.div`
  display: block;
  background-color: #7d828a;
  height: 15em;
  margin: 2%;
  width: 96%;
  padding: 0.1em;
`;

const Title = styled.div`
  width: inherit;
  min-height: 20%;
  font-size: 1.1em;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-align: center;
  margin: 1%;
`;

const SubTitle = styled.div`
  width: inherit;
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  margin: 1%;
`;

const MirrorLink = styled.div`
  display: block;
  width: inherit;
  font-size: 1em;
  font-family: sans-serif;
  text-align: center;
  padding: 1%;
  color: navy;
  &:hover {
    color: #f3000099;
    cursor: pointer;
  }
`;

type MirrorProps = { bundleTitle?: string };

const Mirror = (
  {bundleTitle}:MirrorProps
): JSX.Element => (
  <MirrorRoot>
    <Title>{bundleTitle}</Title>
    <SubTitle>Available Downloads:</SubTitle>
    <MirrorLink>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Z Lib</a>
    </MirrorLink>
    <MirrorLink>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Phat Pdfs</a>
    </MirrorLink>
    <MirrorLink>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Li-bro-ry</a>
    </MirrorLink>
    <MirrorLink>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">JoeMama books</a>
    </MirrorLink>
    <MirrorLink>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        Bootylicous Bookworms
      </a>
    </MirrorLink>
  </MirrorRoot>
);

export default Mirror;
