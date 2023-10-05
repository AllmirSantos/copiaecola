import styled from "styled-components";

export const Container = styled.aside`
  justify-items: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  background-color: #191923;
  display: flex;
  h1 {
    color: #15e84c;
    font-size: 50px;
    font-family: "Courier New", Courier, monospace;
  }
  button {
    background-color: red;
    padding: 20px;
    color: #fff;
  }
  text {
    background-color: #121212;
    height: 50%;
    width: 50%;
    position: absolute;
    display: flex;
    -webkit-animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  ul {
    padding: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0 20px;
    width: 80%;
    color: #fff;
    font-family: "Courier New", Courier, monospace;
    font-size: 18px;
    -webkit-animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

    li {
      padding: 25px 20px;
      width: fit-content;
      margin: 0px;
      list-style: none;
      background-color: #232231;
      border-radius: 10px;
      border: solid 2px #15e84c;
      cursor: pointer;
      transition: 1s;

      &:hover {
        animation: 1s;
        background-color: #15e84c;
      }
    }
    li:nth-of-type(2n) {
      border: solid 2px #1597e8;
      &:hover {
        background-color: #1597e8;
      }
    }
  }
`;
