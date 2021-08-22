import React from "react";
import { TETROMINOS } from "../tetrominos";
import { StyledCell } from "./styles/StyledCell";

function Cell({ type }) {
  return (
    <StyledCell type={'L'} color={TETROMINOS['L'].color}>
      cell
    </StyledCell>
  );
}

export default Cell;
