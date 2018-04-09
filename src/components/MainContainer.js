import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as Actions from '../actions';

import HymnView from './HymnView';
import HymnList from './HymnList';

class MainContainer extends Component {
  componentDidMount() {
    this.props.getData();
  }

  selectView = () => (this.props.title === '' ? <HymnList /> : <HymnView />);

  render() {
    const { loading } = this.props;
    return loading ? (
      <h1>Loading</h1>
    ) : this.selectView();
  }
}

const mapStateToProps = state => ({
  loading: state.dataReducer.loading,
  title: state.hymnReducer.title,
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

MainContainer.propTypes = {
  getData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
