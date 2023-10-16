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
    ul {
      padding: 0px;
      margin: 0px;
      li {
        margin: 0px;
        padding: 9.8px 20px;
        list-style: none;
        height: 20px;
        color: #0d0d0d;
        border-bottom: 0.5px solid #c3c1c1;
      }
      li:last-child {
        border-bottom: none;
      }
    }
    .selectedMenuActive {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      animation-duration: 0.5s;
      transition: 0.5s;
      &:active {
        background-color: #0280fec9;
      }
    }
    .imgMenu {
      width: 25px;
      path {
        fill: white;
      }
    }
    .selectedMenuDisable {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      animation-duration: 0.5s;
      transition: 0.5s;
      &:active {
        background-color: #0280fec9;
      }
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
