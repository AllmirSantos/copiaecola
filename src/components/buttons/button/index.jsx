import * as S from "./styles";
import * as T from "../../../globalStyle.jsx";
import { CopyStyle, CopyIndex, CopyComponent } from "./data";
import { useState } from "react";

export default function Button({
  title,
  fontSize,
  width,
  bgColor,
  bgColorActive,
  radius,
  colorFont,
  colorFontActive,
  height,
  padding,
  borderColor,
  borderWidth,
  onClick,
}) {
  const [isOpenCode, setIsOpenCode] = useState(false);
  function onOpenCode() {
    setIsOpenCode(!isOpenCode);
  }

  const [selectedButton, setSelectedButton] = useState(0);
  const isButtonIndex = selectedButton === 0;
  const isButtonStyle = selectedButton === 1;
  const isButtonComponent = selectedButton === 2;

  return (
    <S.Container>
      <pre>
        <T.CodeView>
          <S.Animation>
            <S.ContainerShirts
              bgColor={bgColor}
              radius={radius}
              fontSize={fontSize}
              width={width}
              bgColorActive={bgColorActive}
              colorFont={colorFont}
              colorFontActive={colorFontActive}
              height={height}
              padding={padding}
              borderColor={borderColor}
              borderWidth={borderWidth}
            >
              <button onClick={onClick}>
                <p>{title}</p>
              </button>
            </S.ContainerShirts>
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
                  <p
                    key={1}
                    onClick={() => setSelectedButton(2)}
                    className={isButtonComponent && "codeActive"}
                  >
                    Componente 🗂️
                  </p>
                </span>
              )}
            </div>
          </div>
          {isOpenCode && (
            <div className="boxCodeView">
              {isButtonIndex && <CopyIndex />}
              {isButtonStyle && <CopyStyle />}
              {isButtonComponent && <CopyComponent />}
            </div>
          )}
        </T.CodeView>
      </pre>
    </S.Container>
  );
}
