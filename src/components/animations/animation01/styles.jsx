import styled from "styled-components";
import { colors } from "../../../theme";

export const Container = styled.aside`
  display: flex;
`;

export const Animation = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  border-bottom: 1px solid rgba(218, 224, 231, 0.168);
  .text {
    background-color: ${colors.primaryOrange};
    padding: 17px 10px;
    display: flex;
    margin: 0px 0px 0px 20px;
    flex: 1;
    font-size: 20px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    color: #fff;
    -webkit-animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  @-webkit-keyframes fade-in-top {
    0% {
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-top {
    0% {
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
