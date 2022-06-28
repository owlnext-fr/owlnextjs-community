import { connect } from 'react-redux';

import { setAppFields, setSpecificAboveObject } from 'app/actions/app';
import { setSecurityFields, userDisconnect } from 'app/actions/security'

import ViewModel from './view';
import { NextRouter } from 'next/router';
import { RootState } from 'app/store';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
    currentRoles: state.security.currentRoles,
    isLoggedIn: state.security.isLoggedIn,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
    setSpecificAboveObject: (object: any) => {
        dispatch(setSpecificAboveObject(object))
    },
    setSecurityFields: (field: string, value: any) => {
        dispatch(setSecurityFields(field, value))
    },
    userDisconnect: () => {
        dispatch(userDisconnect())
    },
    setAppfields: (field: string, value: any) => {
        dispatch(setAppFields(field, value))
    },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
