
import { connect } from 'react-redux';

import { userDisconnect } from 'app/actions/security'

import ViewModel from './Model';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
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
