import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import './index.css'

const RPSRules = () => (
  <div className="rules-page">
    <Link to="/">
      <div className="backArrow">
        <BiArrowBack className="arrow" />
        <p className="back">Back</p>
      </div>
    </Link>

    <div className="headerContainer">
      <h1 className="headLine ">ROCK PAPER SCISSOR</h1>
      <img
        src="https://res.cloudinary.com/da3mrj5uf/image/upload/v1730271006/Group_7469_1_oyfqm2.png"
        alt="rock"
      />
    </div>

    <p>RULES</p>
    <div className="rulesContainer">
      <ul className="left-rules">
        <li className="rules">
          The game result should be based on user and user opponent choices
        </li>
        <li className="rules">
          When the user choice is rock and his opponent choice is rock then the
          result will be <span className="spanColor"> IT IS DRAW</span>
        </li>
        <li className="rules">
          When the user choice is paper and his opponent choice is rock then the
          result will be <span className="spanColor">YOU WON</span>
        </li>
        <li className="rules">
          When the user choice is a scissor and his opponent choice is rock then
          the result will be <span className="spanColor"> YOU LOSE</span>
        </li>
        <li className="rules">
          When the user choice is paper and his opponent choice is paper then
          the result will be <span className="spanColor">IT IS DRAW</span>
        </li>
        <li className="rules">
          When the user choice is scissors and his opponent choice is paper then
          the result will <span className="spanColor">be YOU WON</span>
        </li>
      </ul>
      <ul className="right-rules">
        <li className="rules">
          When the user choice is rock and his opponent choice is scissors then
          the result will be <span className="spanColor">YOU WON</span>
        </li>
        <li className="rules">
          When the user choice is paper and his opponent choice is scissors then
          the result will be <span className="spanColor"> YOU LOSE</span>
        </li>
        <li className="rules">
          When the user choice is scissors and his opponent choice is scissors
          then the result will be <span className="spanColor">IT IS DRAW</span>
        </li>
        <li className="rules">
          When the result is <span className="spanColor">YOU WON</span>, then
          the count of the score should be incremented by 1
        </li>
        <li className="rules">
          When the result is <span className="spanColor">IT IS DRAW</span>, then
          the count of the score should be the same
        </li>
        <li className="rules">
          When the result is <span className="spanColor">YOU LOSE</span>, then
          the count of the score should be decremented by 1.
        </li>
      </ul>
    </div>
    <Link to="/">
      <button className="button" type="button">
        StartPlaying
      </button>
    </Link>
  </div>
)

export default RPSRules
