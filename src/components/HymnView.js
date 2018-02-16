import React from 'react';
import shortid from 'shortid';

const container = {
  width: '70%',
  padding: '20px',
  fontSize: '20px',
  background: '#e9ece5'
}

const chordSheet = {
  width: '500px',
  whiteSpace: 'pre-wrap',
  textAlign: 'left',
  fontSize: '16px',
  padding: '10px',
  margin: 'auto'
}

const createScan = (props) => {
  // const scan = props.selectedHymn.scan.slice();
  const scan = ['v1', 'chorus', 'v2', 'v3', 'v4', 'v5'];
  return scan.map(v => props.selectedHymn[v] === '' ? null : (
    <div key={shortid.generate()}>
      <h4>{v}:</h4>
      <p>{props.selectedHymn[v]}</p>
    </div>
  ));
};

const HymnView = props => (
<div style={container}>
    {
      props.selectedHymn.name === 'Select a Hymn' ?
        <h2>No hymn selected</h2> :
        <div style={chordSheet}>
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

export default HymnView;