import React from "react";
import { createStage } from "../gameHelpers";
// Components bellow
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { StyledTetriswrapper } from "./styles/StyledTetriswrapper";
import { StyledTetris } from "./styles/StyledTetris";

function Tetris() {
  return (
    <StyledTetriswrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton callback="" />
        </aside>
      </StyledTetris>
    </StyledTetriswrapper>
  );
}

export default Tetris;
