import React, { Component } from 'react';
class CatList extends Component {
    pics = () => { 
        return this.props.catPics.map(pic=> <img src={pic.url} alt="" />)
    }
  render() {
    return (
      <div>
        {this.pics()}
        <h1>Hello</h1>
      </div>
    );
  }
};
export default CatList;