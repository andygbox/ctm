import { connect } from 'react-redux';

import App from '../App';

const mapStateToProps = state => ({
  message: state.message,
});

const Ctm = connect(
  mapStateToProps,
)(App);

export default Ctm;