import PropTypes from 'prop-types';

const HymnView = props => <div>{props.name}</div>;

HymnView.propTypes = {
  name: PropTypes.string.isRequired,
};

module.exports = HymnView;
