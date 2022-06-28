
import { connect } from 'react-redux';

import ViewModel from './Model';

import { sendResetPasswordLogin, postResetPasswordValidate } from 'app/actions/security'

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  errorLoginResetPassword: state.security.errorLoginResetPassword,
  errorWrongCode: state.security.errorWrongCode,
  login: state.security.login
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  sendResetPasswordLogin: (login: string) => {
    dispatch(sendResetPasswordLogin(login))
  },
  postResetPasswordValidate: (data: any) => {
    dispatch(postResetPasswordValidate(data))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
