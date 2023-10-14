import styled from "styled-components";
import { colors } from "../../theme";

export const Content = styled.div`
  p {
    display: flex;
    color: #c5c5c5;
    margin: 0px;
  }
`;
export const Container = styled.aside`
  justify-items: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  background-color: ${colors.background};
  display: flex;
  .boxAll {
    width: 90%;
    justify-items: center;
    align-items: center;
    display: flex;
    overflow-y: scroll;
    height: 100vh;
    background-color: #191923;
    z-index: 1;
  }
  section {
    display: flex;
    gap: 10px;
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
