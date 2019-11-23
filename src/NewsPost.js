import React, {PureComponent} from 'react';
import NewComment from './NewComment';

class NewsPost extends PureComponent {
  state = {
    input: ''
  }
  handleKeyDown = event => {
    const {handleComment} = this.props;

    if (event.keyCode === 13) {
      // const {inputValue, comment} = this.state;
      console.log(this.props)
      handleComment(this.props.id, this.state.input)

      // const newComment = {id : getCommentId(), value: inputValue};

      this.setState({input: ''});
    }
  }

  render() {
    const {text, id, comments} = this.props;
    console.log('a',this.props)

    return (
      <div className='containerPost' style={{ border: '1px solid black'}}>
        <p>
        <strong
          className='post-text'
          id={id}
        >{text}
        </strong>
        </p>
        <button onClick={this.props.handlerEditPost}>edit</button>
        new comment
        <input
          className='inputPost'
          onKeyDown={this.handleKeyDown}
          onChange={(e) => {
            this.setState({ input: e.target.value })
          }}
          value={this.state.input}
        />
        
        {comments.map(({ id, value }) =>(
          <NewComment
            key={id}
            Id={id}
            commentText={value}
          />
        ))}
      </div>
    );
  }
}

export default NewsPost