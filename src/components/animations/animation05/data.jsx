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

  return (
    <S.Container>
      <pre>
        <S.Animation>
          <div className="boxNav">
              <div>
                <span
                  key={0}
                  onClick={() => setSelectedButtonNav(0)}
                  className={(isButtonNav01 && "navActive") || "navDisable"}
                >
                  TAB 01
                </span>
                <span
                  key={1}
                  onClick={() => setSelectedButtonNav(1)}
                  className={(isButtonNav02 && "navActive") || "navDisable"}
                >
                  TAB 02
                </span>
                <span
                  key={2}
                  onClick={() => setSelectedButtonNav(2)}
                  className={(isButtonNav03 && "navActive") || "navDisable"}
                >
                  TAB 03
                </span>
              </div>
            </div>
            <div className="boxNavSection">
              {isButtonNav01 && <section className="tab">TAB 01</section>}
              {isButtonNav02 && <section className="tab">TAB 02</section>}
              {isButtonNav03 && <section className="tab">TAB 03</section>}
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
    justify-content: center;
    align-items: center;
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
        padding: 0px 20px;
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
        display: flex;
      }
    }
  }
  .boxNavSection {
    height: 200px;
    margin-top: 15px;
    section {
      height: 100%;
      border-radius: 10px;
      justify-content: center;
      align-items: center;
      font-size: 28px;
      -webkit-animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
        both;
      animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
  }
  @-webkit-keyframes fade-in-top {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in-top {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
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
