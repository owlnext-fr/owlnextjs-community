import { connect } from 'react-redux';
import { setSecurityFields, userDisconnect } from 'app/actions/security'

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
    isLoggedIn: state.security.isLoggedIn,
    currentRoles: state.security.currentRoles,
    isReinitPassword: state.security.isReinitPassword
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
    setSecurityFields: (field: string, value: any) => {
        dispatch(setSecurityFields(field, value))
    },
    userDisconnect: () => {
        dispatch(userDisconnect())
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
);