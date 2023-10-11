import styled from "styled-components";

export const Container = styled.aside`
  justify-items: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  background-color: #191923;
  display: flex;
  & input {
    width: calc(100% - 16px);
  }
`;
