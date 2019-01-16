import React, { Component } from 'react';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="menu-container">
        <h1 className="title noselect">Rob Farlow</h1>
        <button className="menu-button">About</button>
        <button className="menu-button">Projects</button>
        <button className="menu-button">
          <div>Games</div>
          <VideogameAssetIcon />
        </button>
        <button className="menu-button">Contact</button>
      </div>
    )
  }
}

export default Menu;
