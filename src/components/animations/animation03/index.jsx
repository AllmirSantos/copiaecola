import * as S from "./styles";
import * as T from "../../../globalStyle.jsx";
import { CopyAnimationIndex, CopyAnimationStyle } from "./data";
import { useState } from "react";

export default function Animation03() {
  const [isOpenCode, setIsOpenCode] = useState(false);
  function onOpenCode() {
    setIsOpenCode(!isOpenCode);
  }

  const [selectedButton, setSelectedButton] = useState(0);
  const isButtonIndex = selectedButton === 0;
  const isButtonStyle = selectedButton === 1;

  const [selectedButtonNav, setSelectedButtonNav] = useState(0);
  const isButtonNav01 = selectedButtonNav === 0;
  const isButtonNav02 = selectedButtonNav === 1;
  const isButtonNav03 = selectedButtonNav === 2;
  const isButtonNav04 = selectedButtonNav === 3;
  const isButtonNav05 = selectedButtonNav === 4;

  return (
    <S.Container>
      <pre>
        <T.CodeView>
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
