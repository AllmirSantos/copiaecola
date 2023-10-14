import hljs from "highlight.js";
import "highlight.js/styles/base16/dracula.css";
import { useEffect } from "react";
import { marked } from "marked";

const copyAnimationIndex = `
  \`\`\`
import * as S from "./styles";
import { useState } from "react";

export default function Animation03() {
  const [selectedButtonNav, setSelectedButtonNav] = useState(0);
  const isButtonNav01 = selectedButtonNav === 0;
  const isButtonNav02 = selectedButtonNav === 1;
  const isButtonNav03 = selectedButtonNav === 2;
  const isButtonNav04 = selectedButtonNav === 3;
  const isButtonNav05 = selectedButtonNav === 4;

  return (
    <S.Container>
      <pre>
        <S.Animation>
          <div>
            <span
              onClick={() => setSelectedButtonNav(0)}
              className={(isButtonNav01 && "navActive") || "navDisable"}
            >
              01
            </span>
            <span
              onClick={() => setSelectedButtonNav(1)}
              className={(isButtonNav02 && "navActive") || "navDisable"}
            >
              02
            </span>
            <span
              onClick={() => setSelectedButtonNav(2)}
              className={(isButtonNav03 && "navActive") || "navDisable"}
            >
              03
            </span>
            <span
              onClick={() => setSelectedButtonNav(3)}
              className={(isButtonNav04 && "navActive") || "navDisable"}
            >
              04
            </span>
            <span
              onClick={() => setSelectedButtonNav(4)}
              className={(isButtonNav05 && "navActive") || "navDisable"}
            >
              05
            </span>
          </div>
        </S.Animation>
      </pre>
    </S.Container>
  );
}


  \`\`\`
`;
const copyAnimationStyle = `
  \`\`\`
  import styled from "styled-components";

export const Container = styled.aside\`
  display: flex;
\`;

export const Animation = styled.div\`
  display: flex;
  flex-direction: row;
  padding: 15px;
  border-bottom: 1px solid rgba(218, 224, 231, 0.168);
  div {
    border: 1px solid rgba(218, 224, 231, 0.168);
    border-radius: 8px;
    overflow: hidden;
    height: 60px;
    display: flex;
    span:nth-of-type(1) {
      border-left: none;
    }
    span {
      cursor: pointer;
      display: flex;
      color: #fff;
      justify-content: center;
      align-items: center;
      width: 70px;
      border-left: 1px solid rgba(218, 224, 231, 0.168);
      font-size: 16px;
      &:hover {
        background-color: #0280fe26;
        color: #fff;
        cursor: pointer;
      }
    }
    .navActive {
      background-color: #0280fe75;
      color: #fff;
      cursor: pointer;
    }
  }
\`;
\`\`\''
`;

const CopyAnimationStyle = () => {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: marked(copyAnimationStyle) }}
      ></div>
    </>
  );
};
const CopyAnimationIndex = () => {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: marked(copyAnimationIndex) }}
      ></div>
    </>
  );
};

export { CopyAnimationStyle, CopyAnimationIndex };
