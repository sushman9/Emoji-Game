import './index.css'

const WinOrLoseCard = props => {
  const {score, onClickingPlayAgain} = props
  const result = score === 12 ? 'Won' : 'Lose'
  const imgUrl =
    result === 'Won'
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const paragraph = result === 'Won' ? 'Best Score' : 'Score'

  const onPlayAgain = () => {
    onClickingPlayAgain(score)
  }

  return (
    <div className="card-container">
      <img src={imgUrl} className="ballons-image" alt="win" />
      <h1 className="heading">You {result}</h1>
      <p className="paragraph">{paragraph}</p>
      <p className="score">{score}/12</p>
      <button type="button" className="play-button" onClick={onPlayAgain}>
        Play Again
      </button>
    </div>
  )
}
export default WinOrLoseCard
