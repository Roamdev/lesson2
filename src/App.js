import React, { PureComponent } from 'react';
import './App.css';
import NewsPost from './NewsPost';
const data =
[{
  id: 0,
  value: 'lol post',
  comments: [{
      id: 0,
      value: 'lol comment',
  }]
}]
class App extends PureComponent {
  state = {
    post: [],
    newsInput: '',
    editPost: null
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({newsInput: value});
  }

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const {newsInput, post, editPost} = this.state;
      const newPost = {id : post.length, value: newsInput, comments: []};
      if(editPost) {
        const newPosts = post.map((item) => {
          // const { id, value, comments } = item
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

    console.log(post.find(p => p.id === idPost).value)
    this.setState({newsInput: post.find(p => p.id === idPost).value,editPost: idPost})
  }

  render () {
    const {newsInput, post} = this.state;
    console.log('state', post)
    return (
      <div >
        <div className="App"></div>
         New [post]
        <input
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={newsInput}
          className='new-post'
        />
        {post.map(({ id, comments, value}) => {
        console.log('lol', comments) 
          return (
          <NewsPost
            key={id}
            id={id}
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




// ReactDOM.render(<App />, document.getElementById('root'));
export default App;