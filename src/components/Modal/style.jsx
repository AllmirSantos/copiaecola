import styled from "styled-components";

import { colors } from "../../theme";

export const ContainerModal = styled.aside`
  display: flex;
  position: absolute;
  width: 100vw;
  max-height: 100vh;
  z-index: 3;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};

  .contentModal {
    position: relative;
    z-index: 2;
    height: calc(100vh - 130px);
    width: auto;
    display: flex;
    justify-content: center;
    border: none;
    background-color: var(--theme-bg-color);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 10px 30px;
    border: solid 1px #09ac5d71;
    border-radius: 10px;
    flex-direction: column;
    max-width: 80%;
    margin-top: 40px;
    box-shadow: 0px 0px 90px -50px #09ac5d;
    .boxButtonExemple {
      justify-content: center;
      align-items: center;
      display: flex;
      padding: 8px 0px 15px 0px;
      height: 80px;
      span {
        width: 100%;
        height: 80px;
        background-color: transparent;
        position: absolute;
        z-index: 1;
      }
    }
    .contentModalBox {
      display: flex;
      flex-direction: row;
      color: #e8e8e8;
      section {
        background-color: #282936;
        display: flex;
        flex: 10;
        flex-direction: column;
        overflow: hidden;
        border-radius: 10px;
        justify-content: center;
        transition: 0.8s;
        position: static;
        .btnExpandedRight {
          position: absolute;
          border-radius: 100%;
          width: 50px;
          height: 50px;
          background-color: #09ac5d;
          border: none;
          color: #e8e8e8;
          font-size: 25px;
          cursor: pointer;
          animation-name: breath-animation-left;
          transition: 0.8s;
          animation-duration: 0.8s;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: -24px;
        }
        @keyframes breath-animation-left {
          0% {
            height: 50px;
            width: 50px;
            margin-left: -60px;
          }
          50% {
            height: 20px;
            width: 20px;
            margin-left: -27px;
          }
          100% {
            height: 50px;
            width: 50px;
          }
        }
        .btnExpandedLeft {
          position: absolute;
          border-radius: 100%;
          width: 50px;
          height: 50px;
          background-color: #09ac5d;
          border: none;
          color: #e8e8e8;
          font-size: 25px;
          cursor: pointer;
          z-index: 3;
          margin-left: -60px;
          transition: 0.8s;
          animation-name: breath-animation-right;
          animation-duration: 0.8s;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @keyframes breath-animation-right {
          0% {
            height: 50px;
            width: 50px;
            margin-left: -24px;
          }
          50% {
            height: 20px;
            width: 20px;
            margin-left: -27px;
          }
          100% {
            height: 50px;
            width: 50px;
          }
        }
      }
      section:nth-of-type(2) {
        margin-left: 35px;
      }
      .sectionOpen {
        transition: 0.8s;
        flex: 10 !important;
        ::-webkit-scrollbar {
          width: 8px;
          background-color: #282936;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #09ac5d;
          border-radius: 3px;
          border: solid 3px #282936;
        }
      }

      .sectionClose {
        flex: 2;
        pre {
          overflow: hidden;
        }
      }
      div {
        display: flex;
        flex: 1;
        padding: 10px 15px;

        .imgLogo {
          width: 20px;
          padding-right: 10px;
        }
        p {
          margin: 0px;
        }
      }

      .code {
        text-align: start;
      }
      pre {
        max-height: calc(100vh - 320px);
        overflow-y: scroll;
        font-size: 15px;
        margin: 0px;
        padding: 0px 10px;
        background-color: #282936;
        border-radius: 0px 0px 10px 10px;
        overflow-x: hidden;
      }
      .preIndex {
        border-top: solid 0.5px #09ac5d;
      }
      .preStyle {
        border-top: solid 0.5px #09ac5d;
      }
    }
    .Packages {
      color: #fff;
      padding: 0px 15px;
      background-color: rgba(86, 86, 93, 0.344);
      margin-top: 0px;
      border-radius: 10px;
      width: fit-content;
      line-height: 20px;
      justify-content: center;
      align-items: center;
      display: flex;
      pre {
        padding: 0px;
        margin-top: -10px;
      }
      p {
        color: #09ac5d;
        text-transform: uppercase;
        font-size: 18px;
        margin: 0px 0px 4px 0px;
        padding: 0px;
      }
    }
    .btnClose {
      padding-top: 25px;
      display: flex;
      justify-content: center;
      margin-bottom: -38px;
      button {
        position: flex;
        background-color: #09ac5d;
        padding: 15px 20px;
        width: fit-content;
        border: none;
        border-radius: 5px;
        font-size: 20px;
        color: #fff;
        box-shadow: 0px 0px 5px #0000001f;
        cursor: pointer;
      }
    }
    .obsText {
      color: #e9595b;
      margin: 0px;
      padding: 0px;
      margin-bottom: -30px;
      display: block;
      p {
        height: 60px;
        margin: 0px;
        line-height: 20px;
        padding: 10px 0px;
        font-size: 14px;
      }
    }
  }
`;
