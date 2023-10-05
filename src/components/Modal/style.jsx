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
      color: #09ac5d;
      justify-content: center;
      align-items: center;
      display: flex;
      padding: 20px;
    }
    .contentModalBox {
      display: flex;
      flex-direction: row;
      color: #e8e8e8;
      section {
        background-color: #070813;
        display: flex;
        flex: 1;
        flex-direction: column;
        overflow: hidden;
        border-radius: 8px;
      }
      section:nth-of-type(2) {
        margin-left: 10px;
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
