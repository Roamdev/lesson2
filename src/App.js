import React, { PureComponent } from 'react';
import './App.css';
import NewsPost from './NewsPost';

class App extends PureComponent {
  state = {
    post: [],
    newsInput: '',
    editPost: 0
  }
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({newsInput: value});
  }

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const {newsInput, post, editPost} = this.state;
      const newPost = {id : 'post#' + post.length, value: newsInput, comments: []};
      if(editPost) {
        const newPosts = post.map((item) => {
          if (item.id === editPost) {
            return { ...item, value:  newsInput, }
          }
          return item
        })
         
        this.setState({post: newPosts, newsInput: '', editPost: null});
       } else {
        this.setState({newsInput: '', post: [...post, newPost]});
      }
    }
  }

  handleDelete = id => {
    this.setState(state => ({
      post: state.post.filter(post => id !== post.id)
    }))
  };

  handleComment = (idPost, commentValue) => {
    const { post } = this.state
    const newPosts = post.map((item) => {
      const { id, value, comments } = item
      if (id === idPost) {
        return { id, value, comments: [...comments, {id: comments.length, value: commentValue}] }
      }
      return item
    })
     
    this.setState({post: newPosts});
  }

  handlerEditPost = (idPost) => {
    const { post } = this.state

    this.setState({newsInput: post.find(p => p.id === idPost).value,editPost: idPost})
  }

  render () {
    const {newsInput, post} = this.state;
    return (
      <div className="container">
        <div className="App">New [post]</div>
         
        <input
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={newsInput}
          className='new-post'
          autofocus
          placeholder="Что у Вас нового?"
        />
        {post.map(({ id, comments, value}) => {
          return (
          <NewsPost
            key={id}
            id={id}
            onDelete={this.handleDelete}
            text={value}
            onChange={this.handleChange}
            handleComment={this.handleComment}
            comments={comments}
            handlerEditPost={() => this.handlerEditPost(id)}
          />)
        }
        )}
      </div>
    );
  }
}




export default App;