import styled from "styled-components";
import Bundle from "./bundle/Bundle";
import { bundleTest, bundleTest2 } from "./bundle/BundleContentProps";

const SectionTitle = styled.div`
    font-family: 'Sofia Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: white;
    font-size: 1.17em;
    font-weight: bold;
    margin: 1em;
`;

const ContentRoot = styled.div`
  display: block;
`;

const Content = (): JSX.Element => (
  <ContentRoot>
    <SectionTitle>The Ultimate Web Scraping experience!</SectionTitle>
    <SectionTitle>Featured</SectionTitle>
    <Bundle {...bundleTest} />
    <SectionTitle>Previously Scrolled</SectionTitle>
    <Bundle {...bundleTest2} />
    <SectionTitle>Saved</SectionTitle>
    <Bundle {...bundleTest} />
  </ContentRoot>
);

export default Content;
