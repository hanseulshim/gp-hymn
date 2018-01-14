import PropTypes from 'prop-types';
import shortid from 'shortid';

const createScan = (props) => {
  const scan = props.selectedHymn.scan.slice();
  return scan.map(v => (
    <div key={shortid.generate()}>
      <h4>{v}:</h4>
      <p>{props.selectedHymn[v]}</p>
    </div>
  ));
};

const HymnView = props => (
  <div className="hymn-view">
    {
      props.selectedHymn.name === 'Select a Hymn' ?
        <h2>No hymn selected</h2> :
        <div>
          <h2>Name:</h2>
          <p>{props.selectedHymn.name}</p>
          <h2>Original Key:</h2>
          <p>{props.selectedHymn.originalKey}</p>
          <h2>Scan:</h2>
          {createScan(props)}
        </div>
    }
  </div>
);

HymnView.defaultProps = {
  selectedHymn: {
    name: 'Select a Hymn',
  },
};

HymnView.propTypes = {
  selectedHymn: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

module.exports = HymnView;
