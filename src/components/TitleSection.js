import React, { Component } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import LinkedInIcon from '../../public/linkedin.svg'
import GithubIcon from '../../public/github.svg'

const styles = {
  button: {
    color: '#19b5ff',
    backgroundColor: 'white',
  }
};

class TitleSection extends Component {
  render() {
    const { classes } = this.props;
    return(
      <div id="title-section">
        <div
          onClick={() => window.open('https://www.linkedin.com/in/robfarlow/')}
        >
          <img
            className="top-icon"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '4rem',
            }}
            src={LinkedInIcon}
            width={24}
            height={24}
          />
        </div>
          <div
            onClick={() => window.open('https://github.com/marshmelllo')}
          >
          <img
            className="top-icon"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
            }}
            src={GithubIcon}
            width={24}
            height={24}
          />
        </div>
          <div style={{
            textTransform: 'uppercase',
            fontWeight: '600',
            fontSize: '42px',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
          }}>
            Rob Farlow
          </div>
          <div className="hr" style={{ backgroundColor: 'white' }}/>
          <div style={{
            color: '#fff',
            textAlign: 'center',
          }}>
            UWaterloo Computer Engineering class of 2022 <br /> <br />
            xxxx &nbsp; &#9679; &nbsp; yyyyy &nbsp; &#9679; &nbsp; zzzz &#9679; &nbsp; fffff
          </div>
          <div style={{ marginTop: '4rem' }}>
            <Button
              className={classes.button}
              disableRipple
              variant="contained"
              onClick={() => {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#about-section").offset().top
                }, 1000);
              }}
            >
              Learn more
            </Button>
          </div>
      </div>
    )
  }
}

export default withStyles(styles)(TitleSection);
