import React, {PureComponent} from 'react';

class NewComment extends PureComponent {
  render() {
    const {commentText, id} = this.props;
    return (
      <div className='comment-container'>
        <p id={id} className='comment-text'>{commentText}</p>
        <div className='upper-line'/>
      </div>
    )
  }
}

export default NewComment