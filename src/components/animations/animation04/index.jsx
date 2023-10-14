import * as S from "./styles";
import * as T from "../../../globalStyle.jsx";
import { CopyAnimationIndex, CopyAnimationStyle } from "./data";
import { useState } from "react";

export default function Animation04() {
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

  return (
    <S.Container>
      <pre>
        <T.CodeView>
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
