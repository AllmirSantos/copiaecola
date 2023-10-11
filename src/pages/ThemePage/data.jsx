import hljs from "highlight.js";
import "highlight.js/styles/base16/dracula.css";
import { useEffect } from "react";
import { marked } from "marked";

const themeColors = `
  \`\`\`
  // Cores no arquivo theme.jsx                                
   
  export const colors = {
    primaryOrange: "#F28E74",
    primaryGreen: " #7EC3C0",
    segundaryGreen: "#0D827F",
    background: "#191923",
    dark: "#2C2C2C",
};
  \`\`\`
`;

const copyStyleColors = `
  \`\`\`
import styled from "styled-components";
import { colors } from "../../theme";

export const Content = styled.div\`
  p {
    display: flex;
    color: #c5c5c5;
    margin: 0px;
    span {
      display: block;
      width: 15px;
      height: 15px;
      margin-right: 8px;
      border-radius: 100%;
      border: solid 0.5px #ffffff63;
      margin-left: 15px;
    }
    span:nth-of-type(1) {
      background-color: ${"colors.primaryOrange"};
      margin-left: 0px;
    }
    span:nth-of-type(2) {
      background-color: ${"colors.primaryGreen"};
    }
    span:nth-of-type(3) {
      background-color: ${"colors.segundaryGreen"};
    }
    span:nth-of-type(4) {
      background-color: ${"colors.background"};
    }
    span:nth-of-type(5) {
      background-color: ${"colors.dark"};
    }
  }
\`
  \`\`\`
`;

const themeSizes = `
  \`\`\`
  // Tamanhos no arquivo theme.jsx                                
   
export const sizes = {
  xs: "8px",
  s: "16px",
  m: "32px",
  l: "64px",
  xl: "128px",
  xxl: "256px",
};
  \`\`\`
`;

const copyStyleSizes = `
  \`\`\`
import styled from "styled-components";
import { sizes } from "../../theme";

export const ContentSize = styled.div\`
  p {
    display: flex;
    color: #c5c5c5;
    margin: 0px;
    padding: 0px;
    align-items: end;
    span {
      display: block;
      margin-right: 8px;
      margin-left: 15px;
      background-color: #F28E74;
    }
    span:nth-of-type(1) {
      width: ${"sizes.xs"};
      height: ${"sizes.xs"};
      margin-left: 0px;
    }
    span:nth-of-type(2) {
      width: ${"sizes.s"};
      height: ${"sizes.s"};
    }
    span:nth-of-type(3) {
      width: ${"sizes.m"};
      height: ${"sizes.m"};
    }
    span:nth-of-type(4) {
      width: ${"sizes.l"};
      height: ${"sizes.l"};
    }
    span:nth-of-type(5) {
      width: ${"sizes.xl"};
      height: ${"sizes.xl"};
    }
    span:nth-of-type(6) {
      width: ${"sizes.xxl"};
      height: ${"sizes.xxl"};
    }
  }
\`;
  \`\`\`
`;

const ThemeColors = () => {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: marked(themeColors) }}></div>
    </>
  );
};
const CopyStyleColors = () => {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: marked(copyStyleColors) }}></div>
    </>
  );
};
const ThemeSizes = () => {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: marked(themeSizes) }}></div>
    </>
  );
};
const CopyStyleSizes = () => {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: marked(copyStyleSizes) }}></div>
    </>
  );
};

export { ThemeColors, CopyStyleColors, ThemeSizes, CopyStyleSizes };
