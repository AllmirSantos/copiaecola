import hljs from "highlight.js";
import "highlight.js/styles/base16/dracula.css";
import { useEffect } from "react";
import { marked } from "marked";

const copyAnimationIndex = `
  \`\`\`
import * as S from "./styles";
import ButtonSimple from "../../buttons/buttonSimple";
import { useState } from "react";

export default function Animation01() {
  const [isAnimation, setIsAnimation] = useState(false);
  function onAnimation() {
    setIsAnimation(!isAnimation);
  }
  return (
    <S.Container>
        <S.Animation>
          <ButtonSimple
            width={"200px"}
            title={"Animar"}
            onClick={() => {
              onAnimation(true);
            }}
          />
          {isAnimation && <p className="text">Animação</p>}
        </S.Animation>
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
  color: #c5c5c5;
\`;

export const Animation = styled.div\`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  .text {
    background-color: #F28E74;
    padding: 17px 10px;
    display: flex;
    margin: 0px 0px 0px 20px;
    flex: 1;
    font-size: 20px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    color: #fff;
    -webkit-animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  @-webkit-keyframes fade-in-top {
    0% {
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-top {
    0% {
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
\`;

  \`\`\`
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
