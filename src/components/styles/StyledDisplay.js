import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 30px;
  color: ${props => (props.gameover ? "red" : "#999")};
  background: #000;
  font-size: 0.8rem;
`;
