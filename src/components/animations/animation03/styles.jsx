import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
`;

export const Animation = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  border-bottom: 1px solid rgba(218, 224, 231, 0.168);
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
      width: 70px;
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
    }
  }
`;
