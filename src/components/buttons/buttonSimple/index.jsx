import { useState } from "react";
import { ContainerShirts } from "./style";
import WeeklyModal from "../../Modal";

export default function ButtonSimple({
  title,
  fontSize,
  width,
  bgColor,
  bgColorActive,
  radius,
  colorFont,
  onClick,
  colorFontActive,
  height,
  padding,
  shadow,
}) {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  function onOpenPopUp() {
    setIsOpenPopUp(!isOpenPopUp);
  }

  const handleClose = () => setIsOpenPopUp(false);

  return (
    <>
      <ContainerShirts
        bgColor={bgColor}
        radius={radius}
        fontSize={fontSize}
        width={width}
        bgColorActive={bgColorActive}
        colorFont={colorFont}
        colorFontActive={colorFontActive}
        height={height}
        padding={padding}
        shadow={shadow}
      >
        <button
          onClick={() => {
            onOpenPopUp(true);
          }}
        >
          <p>{title} </p>
        </button>
      </ContainerShirts>

      <WeeklyModal
        handleClose={handleClose}
        open={isOpenPopUp}
        exemple={<ButtonSimple title="Button Simple" width="200px" />}
        codeIndex={`import { ContainerShirts } from "./style";

export default function ButtonSimple({
  title,
  fontSize,
  width,
  bgColor,
  bgColorActive,
  radius,
  colorFont,
  onClick,
  colorFontActive,
  height,
  padding,
  shadow,
}) {
  return (
    <>
      <ContainerShirts
        bgColor={bgColor}
        radius={radius}
        fontSize={fontSize}
        width={width}
        bgColorActive={bgColorActive}
        colorFont={colorFont}
        colorFontActive={colorFontActive}
        height={height}
        padding={padding}
        shadow={shadow}
      >
        <button>
          <p>{title} </p>
        </button>
      </ContainerShirts>
    </>
  );
}
`}
        codeStyle={`import styled from "styled-components";
        
export const ContainerShirts = styled.aside'
  display: flex;
  width: ${(prop) => (prop.width ? prop.width : "100%")};
  height: ${(prop) => (prop.height ? prop.height : "60px")};
  padding: ${(prop) => (prop.padding ? prop.padding : "0px")};
  button {
    padding: 0px;
    height: 100%;
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    border: none;
    box-shadow: 0px 0px 5px ${(prop) =>
      prop.shadow ? prop.shadow : "#09ac5d"};
    background-color: ${(prop) => (prop.bgColor ? prop.bgColor : "#09ac5d")};
    border-radius: ${(prop) => (prop.radius ? prop.radius : "10px")};
    font-size: ${(prop) => (prop.fontSize ? prop.fontSize : "18px")};
    & :active {
      display: flex;
      text-align: center;
      justify-content: center;
      flex: 1;
      height: 100%;
      width: 100%;
      border-radius: ${(prop) => (prop.radius ? prop.radius : "10px")};
      background-color: ${(prop) =>
        prop.bgColorActive ? prop.bgColorActive : "#01552c"};
      color: ${(prop) =>
        prop.colorFontActive ? prop.colorFontActive : "#01552c"};
    }
    p {
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin: 0px;
      color: ${(prop) => (prop.colorFont ? prop.colorFont : "#fff")};
    }
  }
';
`}
      />
    </>
  );
}
