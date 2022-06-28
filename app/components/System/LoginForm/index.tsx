import { connect } from 'react-redux';

import { submitForm, setSecurityFields } from 'app/actions/security'

import LoginForm from './Model';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
    loginBeingProcessed: state.security.loginBeingProcessed,
    errorLogin: state.security.errorLogin
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
    submitForm: (login: string, password: string) => {
        dispatch(submitForm(login, password))
    },
    setSecurityFields: (field: string, value: any) => {
        dispatch(setSecurityFields(field, value))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginForm);