import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  display: flex;
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  cursor: text;
  font-size: 16px;
  border-radius: 5px;

  &.invalid {
    border: 2px solid red;
  }
`;
