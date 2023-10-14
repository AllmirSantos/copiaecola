import * as S from "./styles";
import * as T from "../../../globalStyle.jsx";
import { CopyAnimationIndex, CopyAnimationStyle } from "./data";
import ButtonSimple from "../../buttons/buttonSimple";
import { useState } from "react";

export default function Animation01() {
  const [isAnimation, setIsAnimation] = useState(false);
  function onAnimation() {
    setIsAnimation(!isAnimation);
  }
  const [isOpenCode, setIsOpenCode] = useState(false);
  function onOpenCode() {
    setIsOpenCode(!isOpenCode);
  }

  const [selectedButton, setSelectedButton] = useState(0);
  const isButtonIndex = selectedButton === 0;
  const isButtonStyle = selectedButton === 1;

  return (
    <S.Container>
      <pre>
        <T.CodeView>
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
          <div className="viewCode">
            <div>
              <span>
                <p
                  onClick={() => {
                    onOpenCode(true);
                  }}
                  className={(isOpenCode && "codeOpen") || "codeClose"}
                >
                  CODIGO 👨‍💻
                </p>
              </span>
              {isOpenCode && (
                <span>
                  <p
                    key={0}
                    onClick={() => setSelectedButton(0)}
                    className={isButtonIndex && "codeActive"}
                  >
                    Index.jsx 💻
                  </p>
                  <p
                    key={1}
                    onClick={() => setSelectedButton(1)}
                    className={isButtonStyle && "codeActive"}
                  >
                    Style.jsx 💅
                  </p>
                </span>
              )}
            </div>
          </div>
          {isOpenCode && (
            <div className="boxCodeView">
              {isButtonIndex && <CopyAnimationIndex />}

              {isButtonStyle && <CopyAnimationStyle />}
            </div>
          )}
        </T.CodeView>
      </pre>
    </S.Container>
  );
}
