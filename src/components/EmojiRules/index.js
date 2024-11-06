import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import './index.css'

const EmojiRules = () => (
  <div className="container">
    <Link to="/">
      <div className="backArrow">
        <BiArrowBack className="arrow" />
        <p className="back">Back</p>
      </div>
    </Link>
    <div className="rules-container">
      <div className="left-container">
        <img
          src="https://res.cloudinary.com/da3mrj5uf/image/upload/v1729344398/Asset_1_4x_1_re2gsy.png"
          alt="emojii"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="right-container">
        <h1>Rules</h1>
        <ul>
          <li>User should be able to see the list of Emojis</li>
          <li>
            When the user clicks any one of the Emoji for the first time, then
            the count of the score should be incremented by 1 and the List of
            emoji cards should be shuffled.
          </li>
          <li>
            This process should be repeated every time the user clicks on an
            emoji card
          </li>
          <li>
            When the user clicks on all Emoji cards without clicking any of it
            twice, then the user will win the game
          </li>
          <li>
            When the user clicks on the same Emoji for the second time, then the
            user will lose the game.
          </li>
          <li>
            Once the game is over, the user will be redirected to the results
            page.
          </li>
        </ul>
        <div className="btn-container">
          <Link to="/emojigame">
            <button className="button" type="button">
              Start Playing
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default EmojiRules
