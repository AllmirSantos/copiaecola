import hljs from "highlight.js";
import "highlight.js/styles/base16/dracula.css";
import { useEffect } from "react";
import { marked } from "marked";

const copyPackages = `
# Com npm > npm install styled-components 
# Com yarn > yarn add styled-components
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
  shadow,
  borderColor,
  borderWidth,
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
        shadow={shadow}
        borderColor={borderColor}
        borderWidth={borderWidth}
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

export const ContainerShirts = styled.aside\`
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
    box-shadow: 0px 0px 5px ${(prop) =>
      prop.shadow ? prop.shadow : "#09ac5d"};
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
const CopyStile = () => {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: marked(copyStyle) }}></div>
    </>
  );
};

///-----------------------------OBS-------------------------------///

const Obs = () => {
  return (
    <>
      <p>Obs: Em style.tsx remova as ' ' e adicione ` ` </p>
    </>
  );
};

export { CopyIndex, CopyStile, Obs, CopyPackages };
