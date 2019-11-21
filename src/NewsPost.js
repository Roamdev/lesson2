import React, {PureComponent} from 'react';
import NewComment from './NewComment';

let commentId = 0;

function getCommentId() {
  commentId += 1;
  return commentId;
}

class NewsPost extends PureComponent {
  state = {
    comment: [{
      value: ''
    }],
    commentId: 0
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({comment: value});
  }

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const {comment} = this.state;
      const newComment = {id : getCommentId(), comment: comment};

      this.setState({comment: '', comment: [...comment, newComment]});
      console.log(comment);
    }
  }

  // handleChange = () => {
  //   const {id, onChange} = this.props;
  //   onChange(id);
  // };
  render() {
    const {text, id} = this.props;
    return (
      <div className='containerPost'>
        <p 
          className='post-text'
          id={id}
        >{text}
        </p>
        <input
          className='inputPost'
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        >
        </input>

        <NewComment 
          // comment={comment}
        />
      </div>
    );
  }
}

export default NewsPost