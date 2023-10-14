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
    width: 100px;
    display: flex;
    margin: 0px 0px 0px 20px;
    font-size: 20px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    color: #fff;
    animation-duration: 1s;
    transition: 1s;
  }
  .textAnimation {
    background-color: ${colors.segundaryGreen};
    padding: 17px 10px;
    display: flex;
    flex: 1;
    margin: 0px 0px 0px 20px;
    font-size: 20px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    color: #fff;
    animation-duration: 1s;
    transition: 1s;
  }
`;
