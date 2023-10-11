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
    box-shadow: 0px 0px 5px ${(prop) => (prop.shadow ? prop.shadow : "#09ac5d")};
    background-color: ${(prop) => (prop.bgColor ? prop.bgColor : "#09ac5d")};
    border-radius: ${(prop) => (prop.radius ? prop.radius : "10px")};
    font-size: ${(prop) => (prop.fontSize ? prop.fontSize : "18px")};
    border: solid;
    border-color: ${(prop) => (prop.borderColor ? prop.borderColor : "pink")};
    border-width: ${(prop) => (prop.borderWidth ? prop.borderWidth : "3px")};
    color: ${(prop) => (prop.colorFont ? prop.colorFont : "#fff")};
    transition: 0.8s;
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
      z-index: 1;
    }
  }

  ///---------EFEITO 01 CIMA > BAIXO---------///
  button {
    &:hover {
      color: #09ac5d;
    }
  }
  button:before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #014e5f;
    top: 0;
    border-radius: 0 0 50% 50%;
    transition: 0.6s;
  }
  button:hover:before {
    height: 100%;
    border-radius: 0;
  }

  ///---------EFEITO 02 BAIXO > CIMA---------///
  /* button {
    &:hover {
      color: #09ac5d;
    }
  }
  button:before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #014e5f;
    bottom: 0;
    border-radius: 50% 50% 0 0;
    transition: 0.6s;
  }
  button:hover:before {
    height: 100%;
    border-radius: 0;
  } */

  ///---------EFEITO 03 ESQUERDA > DIREITA---------///
  /* button {
    &:hover {
      color: #09ac5d;
    }
  }
  button:before {
    content: "";
    position: absolute;
    left: 0;
    width: 0%;
    height: 100%;
    background: #014e5f;
    bottom: 0;
    transition: 0.6s;
    border-radius: 0px 50% 50% 0;
  }

  button:hover:before {
    border-radius: 0;
    width: 100%;
    border-radius: 0px;
  } */

  ///---------EFEITO 04 DIREITA > ESQUERDA---------///
  /* button {
    &:hover {
      color: #09ac5d;
    }
  }
  button:before {
    content: "";
    position: absolute;
    right: 0;
    width: 0%;
    height: 100%;
    background: #014e5f;
    bottom: 0;
    transition: 0.6s;
    border-radius: 50% 0 0 50%;
  }

  button:hover:before {
    border-radius: 0;
    width: 100%;
    border-radius: 0px;
  } */
`;
