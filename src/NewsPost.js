import React, {PureComponent} from 'react';
import NewComment from './NewComment';

class NewsPost extends PureComponent {
  state = {
    input: ''
  }

  handleDelete = () => {
    const {id, onDelete} = this.props;
    onDelete(id);
    console.log(1);
  }

  handleKeyDown = event => {
    const {handleComment} = this.props;

    if (event.keyCode === 13) {
      handleComment(this.props.id, this.state.input)
      this.setState({input: ''});
    }
  }

  render() {
    const {text, id, comments} = this.props;

    return (
      <div className='post-container'>
        <p
          className='post-text'
          id={id}
        >{text}
        </p>
        <div onClick={this.props.handlerEditPost} className='post-edit'></div>
        <div
          className='post-delete'
          onClick={this.handleDelete}
        ></div>
        <input
          className='post-input'
          placeholder='Написать комментарий...'
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