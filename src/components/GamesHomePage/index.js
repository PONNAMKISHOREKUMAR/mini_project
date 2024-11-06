import {Link} from 'react-router-dom'
import './index.css'

const GamesHomePage = () => (
  <ul className="bg-container">
    <h1 className="title">Games</h1>
    <ul className="first-container">
      <Link to="/emoji-game" className="link">
        <li className="emoji-container">
          <img
            src="https://res.cloudinary.com/da3mrj5uf/image/upload/v1724046344/Asset_1_4x_1_1_z83i4s.png"
            alt="emoji game"
          />
          <p className="titles">Emoji Game</p>
        </li>
      </Link>
      <Link to="/memory-matrix" className="link">
        <li className="memory-container">
          <p className="titles">Memory Matrix</p>
          <img
            src="https://res.cloudinary.com/da3mrj5uf/image/upload/v1727680224/memory_hunuv3.png"
            alt="memory matrix"
          />
        </li>
      </Link>
    </ul>
    <ul className="second-container">
      <Link to="/rock-paper-scissor" className="link">
        <li className="rps-container">
          <p className="titles">Rock Paper Scissor</p>
          <img
            src="https://res.cloudinary.com/da3mrj5uf/image/upload/v1724048856/Group_7469_osjzxn.png"
            alt="rock paper scissor"
          />
        </li>
      </Link>
      <Link to="/card-flip-memory-game">
        <li className="cardFlip-container">
          <img
            src="https://res.cloudinary.com/da3mrj5uf/image/upload/v1724048846/animals_axjdqn.png"
            alt="card flip memory game"
          />
        </li>
      </Link>
    </ul>
  </ul>
)

export default GamesHomePage
