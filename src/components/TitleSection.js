import React, { Component } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

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
            Computer Engineering student <br />
            studying at the University of Waterloo. <br />
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
