import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemText } from 'material-ui/List';
import TextField from 'material-ui/TextField';
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
    padding: 20,
    marginTop: -125,
    background: '#b5e7a0',
    zIndex: 1,
  },
  title: {
    fontWeight: 500,
    fontSize: 25,
  },
  list: {
    marginTop: 125,
    background: '#d5e1df',
  },
};

class HymnList extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  selectHymn = (hymn) => {
    this.props.selectHymn(hymn);
  }

  filterData = hymn => hymn.title.toLowerCase().includes(this.state.searchText.toLowerCase());

  generateList = hymn => (
    <ListItem button divider onClick={() => this.selectHymn(hymn)} key={hymn.title}>
      <ListItemText primary={hymn.title} />
    </ListItem>
  );

  searchHymn = (evt) => {
    this.setState({ searchText: evt.target.value });
  }

  render() {
    const { data } = this.props;
    const hymnList = data.filter(this.filterData).map(this.generateList);
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.title}>
            Title
          </div>
          <TextField
            placeholder="Search for a hymn..."
            margin="normal"
            onChange={this.searchHymn}
          />
        </div>
        <List style={styles.list}>
          {hymnList}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.dataReducer.loading,
  data: state.dataReducer.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

HymnList.propTypes = {
  selectHymn: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HymnList);
