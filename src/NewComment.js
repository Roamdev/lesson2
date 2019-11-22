import React, {PureComponent} from 'react';

class NewComment extends PureComponent {
  const {commentText} = this.props;
  render() {
    return (
      <div>
        <p id={commentId}>{commentText}</p>
      </div>
    )
  }
}

export default NewComment