import hljs from "highlight.js";
import "highlight.js/styles/base16/dracula.css";
import { useEffect } from "react";
import { marked } from "marked";

const copyAnimationIndex = `
  \`\`\`
import * as S from "./styles";
]import { useState } from "react";
import { ReactComponent as Heart } from "../../../images/heart.svg";
import { ReactComponent as HeartActive } from "../../../images/heart01.svg";

export default function Animation06() {
  const [isOpenCode, setIsOpenCode] = useState(false);
  function onOpenCode() {
    setIsOpenCode(!isOpenCode);
  }

  const [isSelectedMenu, setIsSelectedMenu] = useState(false);
  function onClickMenu() {
    setIsSelectedMenu(!isSelectedMenu);
  }

  const [selectedButton, setSelectedButton] = useState(0);
  const isButtonIndex = selectedButton === 0;
  const isButtonStyle = selectedButton === 1;

  return (
    <S.Container>
      <pre>
          <S.Animation>
            <div className="boxNav">
              <buton
                onClick={() => {
                  onClickMenu(true);
                }}
                className={
                  (isSelectedMenu && "selectedMenuActive") ||
                  "selectedMenuDisable"
                }
              >
                {(isSelectedMenu && <HeartActive className="imgMenu" />) || (
                  <Heart className="imgMenu" />
                )}
              </buton>
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

export const Container = styled.aside\`;
display: flex;
\`;

export const Animation = styled.div\`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-bottom: 1px solid rgba(218, 224, 231, 0.168);
  .tab {
    width: 300px;
    width: 100%;
    background-color: #0280fec9;
  }
  .boxNav {
    width: 100%;
    display: flex;
    flex-direction: column;
    .selectedMenuActive {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      animation-duration: 0.5s;
      transition: 0.5s;
      &:active {
        background-color: #f8164331;
      }
      .imgMenu {
        width: 25px;
        path {
          fill: #f81643;
        }
      }
    }

    .selectedMenuDisable {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      animation-duration: 0.5s;
      transition: 0.5s;
      &:active {
        background-color: #f8164331;
      }
      .imgMenu {
        width: 25px;
        path {
          fill: #fff;
        }
      }
    }
    div {
      margin-top: 10px;
      background-color: #fff;

      p {
        padding: 10px;
        margin: 0px;
        color: #0d0d0d;
      }
    }
    .boxMenuActive {
      height: 200px;
      width: 200px;
      animation-duration: 0.5s;
      transition: 0.5s;
      overflow: hidden;
    }
    .boxMenuDisable {
      height: 200px;
      width: 0px;
      animation-duration: 0.5s;
      transition: 0.5s;
      overflow: hidden;
    }
  }
\`;
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