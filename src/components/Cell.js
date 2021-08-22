import React from "react";
import { TETROMINOS } from "../tetrominos";
import { StyledCell } from "./styles/StyledCell";

function Cell({ type }) {
  return <StyledCell type={type} color={TETROMINOS[type].color}></StyledCell>;
}

export default Cell;
