import * as S from "./styles";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import * as T from "../../globalStyle.jsx";
import { CopyStyle, CopyIndex, CopyComponent } from "./data";
import { useState } from "react";

const CssTextField = styled(TextField)({
  width: "100%",
  "& label.Mui-focused": {
    background: "#ffffff0",
    padding: "0px 10px 0px 2px",
    color: "#7EC3C0",
    marginTop: "0px",
    height: "auto",
  },
  "& label": {
    color: "#A0AAB4",
    background: "#ffffff0",
    padding: "0px 10px 0px 10px",
  },
  "& input": {
    paddingLeft: "20px",
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#7EC3C0",
    },
  },
});

export default function Input({ name, label, type }) {
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
            <CssTextField name={name} label={label} id={name} type={type} />
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
