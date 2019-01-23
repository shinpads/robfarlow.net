import React, { Component } from 'react';
import ComputerIcon from '@material-ui/icons/Computer';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';

import DotsPattern from '../../public/dotspattern.jpg';
import MasonLogo from '../../public/masonlogo.png';
import ResonateLogo from '../../public/resonate.png';
import ReactIcon from '../../public/react.png';
import ElectronIcon from '../../public/electron.png';
import NodeIcon from '../../public/node.png';
import MongoIcon from '../../public/mongodb.png';
import SqlIcon from '../../public/sql.png';
import GoogleMapsIcon from '../../public/googlemaps.png';
import AndroidStudioIcon from '../../public/android.png';

class Projects extends Component {
  render() {
    return(
      <div id="projects-section">
        <Fade>
          <div style={{
            textTransform: 'uppercase',
            fontWeight: '600',
            fontSize: '22px',
            color: '#404040',
            display: 'flex',
            alignItems: 'center',
          }}>
          <div style={{
            transform: 'scale(1.5)',
            color: '#232323',
            marginRight: '1rem',
          }}>
          <ComputerIcon />
          </div>
            Projects
          </div>
          <div className="hr" />
          <div style={{
            color: '#808080',
            textAlign: 'center',
            marginBottom: '1rem',
          }}>
            Some of the projects I have made <br />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
            <Fade bottom>
              <Paper className="project-card">
                <div style={{ marginBottom: '1rem' }}>
                  <img src={MasonLogo} width={100} height={100} />
                </div>
                <div style={{
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  fontSize: '18px',
                  color: '#404040',
                  marginBottom: '1rem',
                }}>
                  Mason-Jar Launcher
                </div>
                <div className="flexbox">
                  <div className="devtool-icon">
                    <img width={24} height={24} src={ReactIcon}/>
                  </div>
                  <div className="devtool-icon">
                    <img width={20} height={20} src={ElectronIcon}/>
                  </div>
                  <div className="devtool-icon">
                    <img width={32} height={32} src={NodeIcon}/>
                  </div>
                  <div className="devtool-icon">
                    <img width={24} height={24} src={MongoIcon}/>
                  </div>
                </div>
                <div className="fullhr" />
                This is asdklalsdkjalskdj
                <div className="fullhr" />
                <div style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                  <Button style={{ marginRight: '0.5rem' }}>github</Button>
                  <Button variant="outlined">Try it</Button>
                </div>
              </Paper>
              <Paper className="project-card">
              <div style={{ marginBottom: '1rem' }}>
              <img src={ResonateLogo} width={100} height={100} />
              </div>
              <div style={{
                textTransform: 'uppercase',
                fontWeight: '600',
                fontSize: '18px',
                color: '#404040',
                marginBottom: '1rem',
              }}>
              Resonate
              </div>
              <div className="flexbox">
                <div className="devtool-icon">
                  <img width={24} height={24} src={AndroidStudioIcon}/>
                </div>
                <div className="devtool-icon">
                  <img width={24} height={24} src={SqlIcon}/>
                </div>
                <div className="devtool-icon">
                  <img width={22} height={22} src={GoogleMapsIcon}/>
                </div>
              </div>
              <div className="fullhr" />
              This is asdklalsdkjalskdj
              <div className="fullhr" />
              <div style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Button style={{ marginRight: '0.5rem' }}>github</Button>
              <Button disabled variant="outlined">Try it</Button>
              </div>
              </Paper>
              <Paper className="project-card">
                <div style={{ marginBottom: '1rem' }}>
                  <img src={MasonLogo} width={100} height={100} />
                </div>
                <div style={{
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  fontSize: '18px',
                  color: '#404040',
                  marginBottom: '1rem',
                }}>
                  robfarlow.net
                </div>
                <div className="flexbox">
                  <div className="devtool-icon">
                    <img width={24} height={24} src={ReactIcon}/>
                  </div>
                  <div className="devtool-icon">
                    <img width={32} height={32} src={NodeIcon}/>
                  </div>
                </div>
                <div className="fullhr" />
                This is asdklalsdkjalskdj
                <div className="fullhr" />
                <div style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                  <Button style={{ marginRight: '0.5rem' }}>github</Button>
                  <Button variant="outlined">Try it</Button>
                </div>
              </Paper>
            </Fade>
          </div>
        </Fade>
      </div>
    )
  }
}

export default Projects;
