import { setSpecificAboveObject } from 'app/actions/app';
import { connect } from 'react-redux';
import { setSideblockFields } from 'app/actions/sideblock'

import ViewModel from './Model';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
	currentDetailsAboveObject: state.app.currentDetailsAboveObject,
	ticketDetails: state.tickets.ticketDetails,
	ticketDetailsLoading: state.tickets.ticketDetailsLoading,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
	setSpecificAboveObject: (object: any) => {
		dispatch(setSpecificAboveObject(object));
	},
	setSideblockFields: (field: string, value: any) => {
		dispatch(setSideblockFields(field, value))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
