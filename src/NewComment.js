import React, {PureComponent} from 'react';

class NewComment extends PureComponent {
  render() {
    const {commentText, id} = this.props;
    return (
      <div>
      <hr />
        <p id={id}>{commentText}</p>
        
      </div>
    )
  }
}

export default NewComment