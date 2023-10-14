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
          <p className={(isAnimation && "text") || "textAnimation"}>
              Animação
            </p>
        </S.Animation>
    </S.Container>
  );
}

  \`\`\`
`;
const copyAnimationStyle = `
  \`\`\`
  import styled from "styled-components";
import { colors } from "../../../theme";

export const Container = styled.aside\`;
display: flex;
\`;

export const Animation = styled.div\`
  display: flex;
  flex-direction: row;
  padding: 15px;
  border-bottom: 1px solid rgba(218, 224, 231, 0.168);
  .text {
    background-color: #F28E74;
    padding: 17px 10px;
    width: 100px;
    display: flex;
    margin: 0px 0px 0px 20px;
    font-size: 20px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    color: #fff;
    animation-duration: 1s;
    transition: 1s;
  }
  .textAnimation {
    background-color:#0D827F;
    padding: 17px 10px;
    display: flex;
    flex: 1;
    margin: 0px 0px 0px 20px;
    font-size: 20px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    color: #fff;
    animation-duration: 1s;
    transition: 1s;
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
