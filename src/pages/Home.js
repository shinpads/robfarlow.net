import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { parseQuery } from '../util/helperFunctions';
import $ from 'jquery';

import api from '../api';
import colors from '../colors';

import Tree from '../components/Tree';
import Menu from '../components/Menu';
import { Building1, Building2, Sun, Cloud } from '../components/SVG';

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
      const children = parent.querySelectorAll('#parallax-container>.parallax-layer');
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
        <div id="parallax-container">
          <div className="parallax-layer">
            <Sun style={{ top: '-5%', right: '0%' }} scale={0.4} />
          </div>
          <div className="parallax-layer">
            <Cloud style={{}} scale={2.0} />
            <Cloud style={{ top: '5%', right: '30%' }} scale={2.4} />
            <Cloud style={{ top: '15%', right: '10%' }} scale={2.1} />
            <Cloud style={{ top: '8%', right: '60%' }} scale={1.7} />
          </div>
          <div className="parallax-layer">
            <Building2 style={{ left: '30%', top: '5%' }} scale={0.3} />
            <Building1 style={{ left: '50%', top: '5%' }} scale={0.4} />
          </div>
          <div className="parallax-layer">
            <Building1 scale={0.5} />
          </div>
          <div className="parallax-layer">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}>
              <Menu />
            </div>
          </div>
        </div>
        <div style={{ height: '2000px' }} />
      </div>
    );
  }
}

export default Home;
