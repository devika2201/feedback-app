import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderFeedbackQues = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="bg-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button
                type="button"
                className="emoji-btn"
                onClick={this.onClickEmoji}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                />
                <br />
                <span>{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="app-container">
        <div className="bg-container">
          {isFeedbackSelected
            ? this.renderThankyou()
            : this.renderFeedbackQues()}
        </div>
      </div>
    )
  }
}

export default Feedback
