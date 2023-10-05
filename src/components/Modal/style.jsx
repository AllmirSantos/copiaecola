import styled from "styled-components";

export const ContainerModal = styled.aside`
  display: flex;
  position: absolute;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  justify-content: center;
  align-items: center;

  .contentModal {
    position: relative;
    z-index: 2;
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
    border: none;
    background-color: #232231;
    padding: 10px;
    border: solid 1px #09ac5d;
    border-radius: 10px;
    flex-direction: column;
    max-width: 80%;
    .boxButtonExemple {
      justify-content: center;
      align-items: center;
      display: flex;
      padding: 8px 0px 15px 0px;
    }
    .contentModalBox {
      display: flex;
      flex-direction: row;
      color: #e8e8e8;
      section {
        background-color: #070813;
        display: flex;
        flex: 10;
        flex-direction: column;
        overflow: hidden;
        border-radius: 8px;
        justify-content: center;
        transition: 1s;
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
          transition: 1s;
          animation-duration: 1s;
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
          transition: 1s;
          animation-name: breath-animation-right;
          animation-duration: 1s;
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
        transition: 1s;
        flex: 10 !important;
      }
      .sectionClose {
        flex: 2;
      }
      div {
        background-color: #051a3c;
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

      .boxHeaderStyle {
        background-color: #053c38 !important;
      }
      .code {
        text-align: start;
      }
      pre {
        height: 60vh;
        overflow-y: scroll;
        padding: 00px 20px;
        color: #c1bdce;
        font-size: 15px;
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
  }
`;
