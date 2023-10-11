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
