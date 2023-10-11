import styled from "styled-components";
import { colors, sizes } from "../../theme";

export const ContentSize = styled.div`
  p {
    display: flex;
    color: #c5c5c5;
    margin: 0px;
    padding: 0px;
    align-items: end;
    span {
      display: block;
      margin-right: 8px;
      margin-left: 15px;
      background-color: ${colors.primaryOrange};
    }
    span:nth-of-type(1) {
      width: ${sizes.xs};
      height: ${sizes.xs};
      margin-left: 0px;
    }
    span:nth-of-type(2) {
      width: ${sizes.s};
      height: ${sizes.s};
    }
    span:nth-of-type(3) {
      width: ${sizes.m};
      height: ${sizes.m};
    }
    span:nth-of-type(4) {
      width: ${sizes.l};
      height: ${sizes.l};
    }
    span:nth-of-type(5) {
      width: ${sizes.xl};
      height: ${sizes.xl};
    }
    span:nth-of-type(6) {
      width: ${sizes.xxl};
      height: ${sizes.xxl};
    }
  }
`;

export const Content = styled.div`
  p {
    display: flex;
    color: #c5c5c5;
    margin: 0px;
    span {
      display: block;
      width: 15px;
      height: 15px;
      margin-right: 8px;
      border-radius: 100%;
      border: solid 0.5px #ffffff63;
      margin-left: 15px;
    }
    span:nth-of-type(1) {
      background-color: ${colors.primaryOrange};
      margin-left: 0px;
    }
    span:nth-of-type(2) {
      background-color: ${colors.primaryGreen};
    }
    span:nth-of-type(3) {
      background-color: ${colors.segundaryGreen};
    }
    span:nth-of-type(4) {
      background-color: ${colors.background};
    }
    span:nth-of-type(5) {
      background-color: ${colors.dark};
    }
  }
`;

export const Container = styled.aside`
  justify-items: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  background-color: transparent;
  display: flex;
  .boxAll {
    width: 90%;
    justify-items: center;
    align-items: center;
    display: flex;
    overflow-y: scroll;
    background-color: #191923;
    z-index: 1;
  }
  section {
    display: flex;
    gap: 10px;
    width: fit-content;
    flex-direction: column;
    pre {
      margin: 5px 0px;
      margin-top: 15px;
      code {
        border-radius: 10px;
        width: 700px;
      }
    }
  }
  h1 {
    color: #15e84c;
    font-size: 50px;
  }
`;
