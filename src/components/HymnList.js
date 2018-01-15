import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';

const style = {
  width: '30%',
  background: '#b3c2bf',
};

export default class HymnList extends Component {
  updateSelected = name => {
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
      <div style={style}>
        <h2 className="center underline">Hymn List</h2>
        <List>{hymnList.map(this.generateList)}</List>
      </div>
    );
  }
}
