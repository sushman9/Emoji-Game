/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {idsList: [], isGameOn: true, score: 0, topScore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickingEmoji = emojiId => {
    this.setState(prevState => {
      if (prevState.idsList.includes(emojiId)) {
        return {isGameOn: false}
      }
      return {
        idsList: [...prevState.idsList, emojiId],
        score: prevState.score + 1,
      }
    })
  }

  onClickingPlayAgain = CurrentScore => {
    this.setState(prevState => {
      if (prevState.topScore < CurrentScore) {
        return {idsList: [], isGameOn: true, score: 0, topScore: CurrentScore}
      }
      return {idsList: [], isGameOn: true, score: 0}
    })
  }

  renderGameCardsContainer = () => {
    const shuffledEmojiList = this.shuffledEmojisList()

    return (
      <ul className="cards-container">
        {shuffledEmojiList.map(each => (
          <EmojiCard
            details={each}
            key={each.id}
            onClickingEmoji={this.onClickingEmoji}
          />
        ))}
      </ul>
    )
  }

  renderWinOrLoseCard = () => {
    const {score} = this.state

    return (
      <WinOrLoseCard
        score={score}
        onClickingPlayAgain={this.onClickingPlayAgain}
      />
    )
  }

  render() {
    const {isGameOn, score, topScore} = this.state

    return (
      <div className="bg-container">
        <NavBar isGameOn={isGameOn} score={score} topScore={topScore} />
        <div className="game-container">
          {isGameOn
            ? this.renderGameCardsContainer()
            : this.renderWinOrLoseCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
