import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
`;

export const Animation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-bottom: 1px solid rgba(218, 224, 231, 0.168);
  .tab {
    width: 300px;
    width: 100%;
    background-color: #0280fec9;
  }
  .boxNav {
    width: 100%;
    display: flex;
    flex-direction: column;
    .selectedMenuActive {
      width: 60px;
      height: 60px;
      border-radius: 100%;
      background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      animation-duration: 0.5s;
      transition: 0.5s;
    }
    .selectedMenuDisable {
      width: 60px;
      height: 60px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: blue;
      cursor: pointer;
      animation-duration: 0.5s;
      transition: 0.5s;
    }
    div {
      margin-top: 10px;
      background-color: #fff;

      p {
        padding: 10px;
        margin: 0px;
        color: #0d0d0d;
      }
    }
    .boxMenuActive {
      height: 200px;
      width: 200px;
      animation-duration: 0.5s;
      transition: 0.5s;
      overflow: hidden;
    }
    .boxMenuDisable {
      height: 200px;
      width: 0px;
      animation-duration: 0.5s;
      transition: 0.5s;
      overflow: hidden;
    }
  }
`;
