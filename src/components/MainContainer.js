import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import * as Actions from '../actions';

import HymnView from './HymnView';
import HymnList from './HymnList';

const styles = {
  container: {
    height: '100%',
  },
};

class MainContainer extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { loading } = this.props;
    return loading ? (
      <h1>Loading</h1>
    ) : (
      <Router>
        <div style={styles.container}>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={HymnList} />
          <Route exact path={`${process.env.PUBLIC_URL}/hymnView`} component={HymnView} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.dataReducer.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

MainContainer.propTypes = {
  getData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
