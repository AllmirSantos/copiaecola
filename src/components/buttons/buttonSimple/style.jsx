import styled from "styled-components";

export const ContainerShirts = styled.aside`
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
    overflow: hidden;
    background-color: ${(prop) => (prop.bgColor ? prop.bgColor : "#09ac5d")};
    border-radius: ${(prop) => (prop.radius ? prop.radius : "10px")};
    font-size: ${(prop) => (prop.fontSize ? prop.fontSize : "18px")};
    border: solid;
    border-color: ${(prop) => (prop.borderColor ? prop.borderColor : "pink")};
    border-width: ${(prop) => (prop.borderWidth ? prop.borderWidth : "3px")};
    & :active {
      display: flex;
      text-align: center;
      justify-content: center;
      flex: 1;
      height: 100%;
      width: 100%;
      background-color: ${(prop) =>
        prop.bgColorActive ? prop.bgColorActive : "#01552c"};
      color: ${(prop) =>
        prop.colorFontActive ? prop.colorFontActive : "#fff"};
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
`;
