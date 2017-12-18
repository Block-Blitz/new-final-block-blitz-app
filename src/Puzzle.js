import React from 'react'
// import "./puzzle-logic.js";


const Puzzle = () => (
  <div className="puzzle">
    <h2>First to Complete Wins!</h2>
    <div className="dialog-container">
      <div className="dialog is-waiting">
        <p className="dialog__text">&nbsp;</p>
        <div>
          <button className="button try-again-button">Try again</button>
          <button className="button close-dialog-button">Close</button>
        </div>
      </div>
    </div>

    <div className="grid">
      <div data-tile="a" className="tile h2 bgx3 bgy1"></div>
      <div data-tile="b" className="tile bgx2 bgy1"></div>
      <div data-tile="c" className="tile bgx1 bgy4"></div>
      <div data-tile="d" className="tile bgx1 bgy1"></div>
      <div data-tile="e" className="tile w2 bgx2 bgy4"></div>
      <div data-tile="f" className="tile h2"></div>
      <div data-tile="g" className="tile bgx3"></div>
      <div data-tile="h" className="tile bgx3 bgy3"></div>
      <div data-tile="i" className="tile bgx1 bgy3"></div>
      <div data-tile="j" className="tile h2 bgy3"></div>
      <div data-tile="k" className="tile h2 bgx2 bgy2"></div>
      <div data-tile="l" className="tile w2 bgy2"></div>
      <div data-tile="m" className="tile w2 bgx1"></div>
    </div>

    <div>
      <button className="button shuffle-button">Shuffle</button>
    </div>
  </div>

)

export default Puzzle

