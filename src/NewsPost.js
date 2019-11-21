import React, {PureComponent} from 'react';

class NewsPost extends PureComponent {
  handleChange = () => {
    const {id, onChange} = this.props;
    onChange(id);
  };
  render() {
    const text = this.props;
    return (
      <div className='containerPost'>
        <input className='inputPost'></input>
        <p>{text}</p>
      </div>
    );
  }
}

export default NewsPost