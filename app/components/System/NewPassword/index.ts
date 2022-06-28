
import { connect } from 'react-redux'

import ViewModel from './Model';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  loadingNewPassword: state.security.loadingCreateAccount
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
