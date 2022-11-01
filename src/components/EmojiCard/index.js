import './index.css'

const EmojiCard = props => {
  const {details, onClickingEmoji} = props
  const {id, emojiName, emojiUrl} = details

  const onEmoji = () => {
    onClickingEmoji(id)
  }

  return (
    <li className="emoji-container">
      <button type="button" onClick={onEmoji} className="button">
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
