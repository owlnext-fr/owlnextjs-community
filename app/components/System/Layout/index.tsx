import { connect } from 'react-redux';

import { setSpecificAboveObject, clearAboveSideblock, clearSelectedItem, setAppFields } from 'app/actions/app';

import Layout from './Model';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
    selectedItem: state.app.selectedItem,
    isSearchScreen: state.app.isSearchScreen,
    triggerClearAboveSideblock: state.app.triggerClearAboveSideblock,
    historyUrl: state.app.historyUrl,
    triggerSpecificAboveObject: state.app.triggerSpecificAboveObject,
    currentDetailsAboveObject: state.app.currentDetailsAboveObject
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
    setSpecificAboveObject: (object: any) => {
        dispatch(setSpecificAboveObject(object))
    },
    clearAboveSideblock: () => {
        dispatch(clearAboveSideblock())
    },
    clearSelectedItem: () => {
        dispatch(clearSelectedItem())
    },
    setAppFields: (field: string, value: object) => {
        dispatch(setAppFields(field, value))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Layout);