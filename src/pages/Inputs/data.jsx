import hljs from "highlight.js";
import "highlight.js/styles/base16/dracula.css";
import { useEffect } from "react";
import { marked } from "marked";

const copyComponent = `
  \`\`\`
<Input name={"Email"} label={"Digite seu email"} type="email" />
  \`\`\`
`;

const copyIndex = `
  \`\`\`
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import * as S from "./styles";

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
  return (
    <S.Container>
      <CssTextField name={name} label={label} id={name} type={type} />
    </S.Container>
  );
}
  \`\`\`
`;

const copyStyle = `
  \`\`\`
import styled from "styled-components";

export const Container = styled.aside\`
  justify-items: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  background-color: #191923;
  display: flex;
  & input {
    width: calc(100% - 16px);
  }
\`
  \`\`\`
`;

const CopyComponent = () => {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: marked(copyComponent) }}></div>
    </>
  );
};
const CopyIndex = () => {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: marked(copyIndex) }}></div>
    </>
  );
};
const CopyStyle = () => {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: marked(copyStyle) }}></div>
    </>
  );
};

export { CopyComponent, CopyStyle, CopyIndex };
