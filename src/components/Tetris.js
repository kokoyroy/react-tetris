import React from 'react';

// Components bellow
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

function Tetris() {
    return (
        <div>
            <Stage />
            <aside>
                <div>
                    <Display text="Score" />
                    <Display text="Rows" />
                    <Display text="Level" />
                </div>
                <StartButton callback="" />
            </aside>
        </div>
    );
}

export default Tetris;
