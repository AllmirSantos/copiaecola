import styled from "styled-components";

export const Container = styled.aside`
  justify-items: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background-color: #1d1d23;
  display: flex;
  section {
    justify-items: center;
    align-items: center;
    height: 100vh;
    width: 90%;
    flex-direction: column;
    display: flex;
    background-color: #191923;
    z-index: 1;
    code {
      border-radius: 10px;
    }
    h1 {
      color: #15e84c;
      font-size: 50px;
      font-family: "Courier New", Courier, monospace;
      width: 90%;
      text-align: center;
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
      -webkit-animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
        both;
      animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

      li {
        width: fit-content;
        margin: 0px;
        list-style: none;
        background-color: #232231;
        border-radius: 10px;
        border: solid 2px #15e84c;
        cursor: pointer;
        transition: 1s;
        a {
          padding: 25px 20px;
          display: block;
        }

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
      li:nth-of-type(3n) {
        border: solid 2px #e8155b;
        &:hover {
          background-color: #e8155b;
        }
      }
    }
  }
`;
