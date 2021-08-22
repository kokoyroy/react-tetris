import React, { useState } from "react";
// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { StyledTetriswrapper } from "./styles/StyledTetriswrapper";
import { StyledTetris } from "./styles/StyledTetris";
// hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

function Tetris() {
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)
  const [player] = usePlayer()
  
  const [stage, setStage, rowsCleared] = useStage(player);
  console.log('rerender')




  return (
    <StyledTetriswrapper>
      <StyledTetris>
        <Stage stage={stage} />
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
