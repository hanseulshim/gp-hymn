import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as Actions from '../actions';


const styles = {
  container: {
    height: '100%',
    background: '#d5e1df',
  },
  header: {
    boxShadow: '0px 0px 10px 4px rgba(0,0,0,0.75)',
    position: 'fixed',
    width: '100%',
    height: 125,
    boxSizing: 'border-box',
    padding: 15,
    marginTop: -125,
    background: '#b5e7a0',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  title: {
    fontWeight: 500,
    fontSize: 25,
    textAlign: 'center',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  lyricsContainer: {
    marginTop: 125,
    display: 'flex',
    justifyContent: 'center',
    background: '#d5e1df',
  },
  lyrics: {
    padding: 30,
    whiteSpace: 'pre-line',
  },
};

const HymnView = (props) => {
  const { title, lyrics } = props;
  return title === '' ? (
    <Redirect
      to={{
        pathname: '/',
      }}
    />
  ) : (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.title}>
          {title}
        </div>
        <Link to="/">{'<< Back'}</Link>
      </div>
      <div style={styles.lyricsContainer}>
        <p style={styles.lyrics}>{lyrics}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  title: state.hymnReducer.title,
  lyrics: state.hymnReducer.lyrics,
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

HymnView.propTypes = {
  title: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HymnView);
