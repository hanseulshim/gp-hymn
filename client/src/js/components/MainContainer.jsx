import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HymnView from './HymnView';
import HymnList from './HymnList';

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Select a hymn',
    };
  }

  updateSelected = (name) => {
    this.setState({ name });
  }

  render() {
    const { hymnList } = this.props;
    const { name } = this.state;
    const selectedHymn = hymnList.filter(hymn => hymn.name === name)[0];
    return (
      <div className="main-container">
        <HymnView selectedHymn={selectedHymn} />
        <HymnList hymnList={hymnList} updateSelected={this.updateSelected} />
      </div>
    );
  }
}

MainContainer.propTypes = {
  hymnList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

