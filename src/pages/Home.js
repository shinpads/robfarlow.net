import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { parseQuery } from '../util/helperFunctions';
import $ from 'jquery';

import api from '../api';
import colors from '../colors';

import Tree from '../components/Tree';
import Menu from '../components/Menu';
import { Building1, Building2, Building3, Building4, Building5, Mountain, Sun, Cloud } from '../components/SVG';
import TitleSection from '../components/TitleSection';
import About from '../components/About';
import Projects from '../components/Projects';
import Spinner from '../components/Spinner';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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
    // window.addEventListener('scroll', () => {
    //   const parent =document.getElementById('parallax-container');
    //   const children = parent.querySelectorAll('#parallax-container>.parallax-layer');
    //   for(let i = 0; i < children.length; i++) {
    //     children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
    //   }
    // }, false);
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2500);
  }
  render() {
    return (
      <div className="page-container">
        {/*<div id="parallax-container">
          <div className="parallax-layer">
            <Sun style={{ top: '-5%', right: '0%' }} scale={0.4} />
            <Mountain scale={0.5} style={{ top: '30%', left:'0%' }}/>
          </div>
          <div className="parallax-layer">
            <Cloud style={{}} scale={2.3} />
            <Cloud style={{ top: '5%', right: '30%' }} top={5} scale={2.8} />
            <Cloud style={{ top: '15%', right: '10%' }} top={15} scale={2.5} />
            <Cloud style={{ top: '8%', right: '60%' }} top={8} scale={2.2} />
          </div>
          <div className="parallax-layer">
            <Building2 style={{ left: '20%' }} top={-15} scale={0.3} />
            <Building1 style={{ left: '55%' }} top={-13} scale={0.4} />
            <Building4 style={{ left: '65%' }} scale={0.7} />
            <Building1 scale={0.5} top={-20} />
            <Building2 style={{ right: '20%' }} top={-21} scale={0.42} />
            <Building1 style={{ right: '55%' }} top={-18} scale={0.46} />
            <Building4 style={{ right: '65%' }} top={10} scale={0.6} />
            <Building1 style={{ left: '100%'}} scale={0.5} top={-20} />
          </div>
          <div className="parallax-layer">
            <Building3 scale={0.65} top={-30} style={{ left: '40%'}} />
            <Building5 top={-50} left={0} scale={0.5} />
            <Building2 style={{ left: '80%' }} top={-30} scale={0.4} />
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
        <div style={{ height: '110vh' }} /> */}
        <TitleSection />
        <About />
        <Projects />
        <div className={'page-loader' + (this.state.loading ? '' : ' not-loading')}>
          <Spinner />
        </div>
      </div>
    );
  }
}

export default Home;
