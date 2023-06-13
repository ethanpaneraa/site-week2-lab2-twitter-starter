import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {

  const MAX_NUM_OF_CHARACTERS = 140; 

  const isTweetValid = ((props.tweetText.length > 0) && (props.tweetText.length <= MAX_NUM_OF_CHARACTERS)); 

  const handleOnTweetTextChange = (event) => {
    props.setTweetText(event.target.value); 
  }

  const handleOnSubmit = () => {
    const newTweet = {
      name: props.userProfile.name, 
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0, 
      retweets: 0, 
      likes: 0
    };

    props.setTweets((element) => [...element, newTweet]);
    props.setTweetText(""); 

  };

  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount totalCharacters={props.tweetText.length} />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} canSubmitTweet={isTweetValid}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  const MAX_CHARACTERS = 140;

  let charsLeft = MAX_CHARACTERS - props.totalCharacters;

  return charsLeft >= MAX_CHARACTERS ? <span></span> : <span>{charsLeft}</span>
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={props.handleOnSubmit} disabled={props.canSubmitTweet}>Tweet</button>
    </div>
  )
}
