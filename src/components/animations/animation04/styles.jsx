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
    justify-content: center;
    align-items: center;
    div {
      border: 1px solid rgba(218, 224, 231, 0.168);
      border-radius: 8px;
      overflow: hidden;
      height: 60px;
      display: flex;
      span:nth-of-type(1) {
        border-left: none;
      }
      span {
        cursor: pointer;
        display: flex;
        color: #fff;
        justify-content: center;
        align-items: center;
        padding: 0px 20px;
        border-left: 1px solid rgba(218, 224, 231, 0.168);
        font-size: 16px;
        &:hover {
          background-color: #0280fe26;
          color: #fff;
          cursor: pointer;
        }
      }
      .navActive {
        background-color: #0280fe75;
        color: #fff;
        cursor: pointer;
        display: flex;
      }
    }
  }
  .boxNavSection {
    height: 200px;
    margin-top: 15px;
    section {
      height: 100%;
      border-radius: 10px;
      justify-content: center;
      align-items: center;
      font-size: 28px;
      -webkit-animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
        both;
      animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
  }
  @-webkit-keyframes fade-in-top {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in-top {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
