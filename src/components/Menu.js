import React, { Component } from 'react';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import ComputerIcon from '@material-ui/icons/Computer';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';

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
        <button className="menu-button">
          <div className="menu-button-title">About</div>
          <PersonIcon />
        </button>
        <button className="menu-button">
          <div className="menu-button-title">Projects</div>
          <ComputerIcon />
        </button>
        <button className="menu-button">
          <div className="menu-button-title">Games</div>
          <VideogameAssetIcon />
        </button>
        <button className="menu-button">
          <div className="menu-button-title">Contact</div>
          <EmailIcon />
        </button>
      </div>
    )
  }
}

export default Menu;
