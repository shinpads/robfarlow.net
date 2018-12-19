import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { parseQuery } from '../util/helperFunctions';
import $ from 'jquery';

import api from '../api';
import colors from '../colors';

import Tree from '../components/Tree';
import Building1 from '../components/Building1';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    window.scrollTo(0, 0);
  }

  async componentDidMount () {
    const isMobile = window.innerWidth < 800;
    window.isMobile = isMobile;
    this.setState({ isMobile });
    $(window).resize(() => {
      const isMobile = window.innerWidth < 800;
      window.isMobile = isMobile;
      this.setState({ isMobile });
    });
    window.addEventListener('scroll', () => {
      const parent =document.getElementById('parallax-container');
      const children = parent.querySelectorAll('#parallax-container>div');
      console.log(children);
      for(let i = 0; i < children.length; i++) {
        children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
      }
    }, false);
  }

  render() {
    if (this.state.loading) {
      return (
        <Spinner />
      )
    }
    return (
      <div className="page-container">
        TOP
        <div id="parallax-container">
          <div></div>
          <div style={{ left: '30%' }}><Building1 scale={0.8}/></div>
          <div><Building1 /></div>
        </div>
        <div style={{ height: '2000px' }} />
      </div>
    );
  }
}

export default Home;
