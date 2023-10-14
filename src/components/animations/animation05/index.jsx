import * as S from "./styles";
import * as T from "../../../globalStyle.jsx";
import { CopyAnimationIndex, CopyAnimationStyle } from "./data";
import { useState } from "react";

export default function Animation05() {
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
        <T.CodeView>
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
                {(isSelectedMenu && <text>Close</text>) || <text>Open</text>}
              </buton>
              <div
                className={
                  (isSelectedMenu && "boxMenuActive") || "boxMenuDisable"
                }
              >
                <p>MENU</p>
              </div>
            </div>
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
