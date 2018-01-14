import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import PropTypes from 'prop-types';

export default class HymnList extends Component {
  updateSelected = (name) => {
    this.props.updateSelected(name);
  };

  generateList = (hymn, index) => (
    <ListItem key={index} onClick={() => this.updateSelected(hymn.name)} button>
      <ListItemText primary={hymn.name} />
    </ListItem>
  );

  render() {
    const { hymnList } = this.props;
    return (
      <div className="hymn-list">
        <h2 className="center underline">Hymn List</h2>
        <List>{hymnList.map(this.generateList)}</List>
      </div>
    );
  }
}

HymnList.propTypes = {
  hymnList: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateSelected: PropTypes.func.isRequired,
};

