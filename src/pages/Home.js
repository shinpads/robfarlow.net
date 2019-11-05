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
import Games from '../components/Games';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import CloudSvg from '../../public/cloud2.svg';

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
    window.addEventListener('scroll', () => {
      const parent =document.getElementById('parallax-container');
      const children = parent.querySelectorAll('#parallax-container>.parallax-layer');
      for(let i = 0; i < children.length; i++) {
        children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
      }
    }, false);
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2500);
  }
  render() {
    return (
      <div className="page-container">
        <div id="parallax-container">
          <div className="parallax-layer">
            {/*<Sun style={{ top: '-5%', right: '0%' }} scale={0.4} /> */}
          </div>
          <div className="parallax-layer">
            <Mountain scale={0.75} style={{ top: '30%', left:'20%', opacity: '0.5' }}/>
          </div>
          <div className="parallax-layer">
            <Cloud style={{}} scale={3.3} />
            <Cloud style={{ top: '5%', right: '30%' }} top={5} scale={3.8} />
            <Cloud style={{ top: '15%', right: '10%' }} top={15} scale={3.5} />
            <Cloud style={{ top: '8%', right: '60%' }} top={8} scale={3.2} />
          </div>
          <div className="parallax-layer">
            <Mountain scale={1.2} style={{ top: '30%', left:'0%' }}/>
          </div>
          <div className="parallax-layer">

          </div>
        </div>
        <div style={{ minHeight: '170vh' }} />
        <div>
          <object style={{ width: '100%', height: '100%' }} data={CloudSvg} type="image/svg+xml">
            <img src={CloudSvg} />
          </object>
        </div>
        {/*<TitleSection />
        <About />
        <Projects />
        <Games />
        <Footer />*/}
        <div className={'page-loader' + (this.state.loading ? '' : ' not-loading')}>
          <Spinner />
        </div>
      </div>
    );
  }
}

export default Home;
