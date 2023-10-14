import hljs from "highlight.js";
import "highlight.js/styles/base16/dracula.css";
import { useEffect } from "react";
import { marked } from "marked";

const copyPackages = `
# Com npm > npm install styled-components 
# Com yarn > yarn add styled-components
`;

const copyComponent = `
  \`\`\`
  <ButtonSimple
    title="Button Simple"
    bgColor=""
    bgColorActive=""
    colorFont=""
    colorFontActive=""
    width="200px"
    height=""
    radius=""
    fontSize=""
    padding=""
    shadow=""
/>
  \`\`\`
`;

const copyIndex = `
  \`\`\`
  import { ContainerShirts } from "./style";

export default function ButtonSimple({
  title,
  fontSize,
  width,
  bgColor,
  bgColorActive,
  radius,
  colorFont,
  onClick,
  colorFontActive,
  height,
  padding,
  borderColor,
  borderWidth,
  onClick,

}) {
  return (
    <>
      <ContainerShirts
        bgColor={bgColor}
        radius={radius}
        fontSize={fontSize}
        width={width}
        bgColorActive={bgColorActive}
        colorFont={colorFont}
        colorFontActive={colorFontActive}
        height={height}
        padding={padding}
        borderColor={borderColor}
        borderWidth={borderWidth}
        onClick={onClick}

      >
        <button>
          <p>{title} </p>
        </button>
      </ContainerShirts>
    </>
  );
}
  \`\`\`
`;

const copyStyle = `
 \`\`\`
import styled from "styled-components";

export const ContainerShirts = styled.asid\`
  display: flex;
  width: ${(prop) => (prop.width ? prop.width : "100%")};
  height: ${(prop) => (prop.height ? prop.height : "60px")};
  padding: ${(prop) => (prop.padding ? prop.padding : "0px")};
  button {
    padding: 0px;
    height: 100%;
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    border: none;
    overflow: hidden;
    background-color: ${(prop) => (prop.bgColor ? prop.bgColor : "#09ac5d")};
    border-radius: ${(prop) => (prop.radius ? prop.radius : "10px")};
    font-size: ${(prop) => (prop.fontSize ? prop.fontSize : "18px")};
    border: solid;
    border-color: ${(prop) => (prop.borderColor ? prop.borderColor : "pink")};
    border-width: ${(prop) => (prop.borderWidth ? prop.borderWidth : "3px")};
    & :active {
      display: flex;
      text-align: center;
      justify-content: center;
      flex: 1;
      height: 100%;
      width: 100%;
      background-color: ${(prop) =>
        prop.bgColorActive ? prop.bgColorActive : "#01552c"};
      color: ${(prop) =>
        prop.colorFontActive ? prop.colorFontActive : "#fff"};
    }
    p {
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin: 0px;
      color: ${(prop) => (prop.colorFont ? prop.colorFont : "#fff")};
    }
  }\`;
   \`\`\`
`;

///-------------------------CODE PACKAGES---------------------------///

const CopyPackages = () => {
  useEffect(() => {
    hljs.highlightAll();
  });
  return <>{copyPackages}</>;
};

///--------------------------CODE INDEX-----------------------------///
const CopyIndex = () => {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: marked(copyIndex) }}></div>
    </>
  );
};

///--------------------------CODE STYLE-----------------------------///
const CopyStyle = () => {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: marked(copyStyle) }}></div>
    </>
  );
};

///--------------------------CODE STYLE-----------------------------///
const CopyComponent = () => {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: marked(copyComponent) }}></div>
    </>
  );
};
///-----------------------------OBS-------------------------------///

export { CopyIndex, CopyStyle, CopyPackages, CopyComponent };
