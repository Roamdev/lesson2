import React, { PureComponent } from 'react';
import './App.css';
import NewsPost from './NewsPost';

let id = 0;

function getCommentId() {
  id += 1;
  return id;
}
class App extends PureComponent {
  state = {
    post: [
      {
        id: 0,
        value: ''
      }
    ],
    newsInput: ''
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({newsInput: value});
  }

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const {newsInput, post} = this.state;
      const newPost = {id : getCommentId(), value: newsInput};

      this.setState({newsInput: '', post: [...post, newPost]});
      console.log(newsInput);
    }
  }



  render () {
    const {newsInput, post} = this.state;
    return (
      <div>
        <div className="App"></div>
        <input
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={newsInput}
          className='new-post'
        />
        {post.map(newPost => (
          <NewsPost
            key={newPost.id}
            id={newPost.id}
            text={newPost.value}
          />
        ))}
      </div>
    );
  }
}




// ReactDOM.render(<App />, document.getElementById('root'));
export default App;