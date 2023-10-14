import styled from "styled-components";

export const Container = styled.aside`
  justify-items: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  background-color: #191923;
  display: flex;
  z-index: 1;
  section {
    display: flex;
    gap: 10px;
    flex-direction: column;
    height: 100vh;
    padding-bottom: 40px;
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
  .boxAll {
    width: 90%;
    justify-items: center;
    align-items: center;
    display: flex;
    overflow-y: scroll;
    background-color: #191923;
    z-index: 1;
  }
`;
