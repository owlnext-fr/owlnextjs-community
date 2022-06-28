import { connect } from 'react-redux';
import { userDisconnect } from 'app/actions/security';

import ViewModel from './Model';
import { NextRouter } from 'next/router';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  isLoggedIn: state.security.isLoggedIn
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  userDisconnect: () => {
    dispatch(userDisconnect())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
