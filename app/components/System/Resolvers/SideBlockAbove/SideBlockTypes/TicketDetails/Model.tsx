import View from './View';
import useTranslation from 'hooks/useTranslation';
import { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import { ReduxUniversalSetter } from 'app/types/global';

type Props = {
	currentDetailsAboveObject: any;
	ticketDetails: any;
	ticketDetailsLoading: boolean;
	setSideblockFields: ReduxUniversalSetter
};

const ViewModel: React.FC<Props> = ({
	currentDetailsAboveObject,
	ticketDetails,
	ticketDetailsLoading,
	setSideblockFields
}) => {
	const { t } = useTranslation();
	const [newStatus, setNewStatus] = useState<{value?: string;label?: string;}>({});
	const parentElement = useRef()
	
	const [currentTicket, setCurrentTicket] = useState<any>({});
	const [newMessage, setNewMessage] = useState('');
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const trads = useMemo(() => {
		return {
			title: t('Ticket_SideblockTitle'),
			ticketDescription: t('Ticket_Description'),
			ticketNumber: t('Ticket_Number'),
			ticketUser: t('Ticket_User'),
			ticketObject: t('Ticket_Object'),
			ticketMessage: t('Ticket_Message'),
			ticketResponse: t('Ticket_Response'),
			ticketEdit: t('Ticket_Edit'),
			ticketEditPopupContent: t('Ticket_EditPopupContent'),
			ticketDelete: t('Ticket_Delete'),
			ticketStatus: t('Ticket_Status'),
			ticketClosee: t('Ticket_Close'),
			ticketMessageSend: t('Ticket_MessageSend'),
			writeMessageHere: t('Ticket_WriteMessageHere'),
			cancelPopupContent: t('Ticket_ConfirmCloseTicket'),
			ticketMessageSendWaiting: t('Ticket_MessageSendWaiting'),
			ticketMessageSendTreated: t('Ticket_MessageSendTreated'),
		};
	}, [t]);

	const onNewMessageChange = useCallback((e: any) => {
		e.preventDefault();
		setNewMessage(e.target.value);
	}, []);

	const onSendNewMessage = (newStatus: string) => {
		if (newMessage) {
			setNewMessage('');
		}
	};

	const handleTicketEdit = (field: string, value: any) => {
		setIsPopupOpen(false);
	};

	const handleCancel = () => {
		setIsPopupOpen(false);
		setNewStatus(statusOptions[0]);
	};

	const onCloseTicket = () => {
		setNewStatus({
			value: 'closed',
			label: t('Ticket_StatusClosed'),
		});

		setIsPopupOpen(true);
	};

	const statusOptions = useMemo(() => {
		return [
			{
				value: 'created',
				label: t('Ticket_StatusCreated'),
			},
			{
				value: 'treated',
				label: t('Ticket_StatusTreated'),
			},
			{
				value: 'canceled',
				label: t('Ticket_StatusCanceled'),
			},
		];
	}, [t]);

	useEffect(() => {
		setCurrentTicket(ticketDetails);
	}, [currentDetailsAboveObject.parent, setSideblockFields, ticketDetails]);

	return (
		<View
			trads={trads}
			ticketDetails={currentDetailsAboveObject.parent ? currentDetailsAboveObject.parent : {}}
			ticketDetailsLoading={ticketDetailsLoading}
			newMessage={newMessage}
			onCloseTicket={onCloseTicket}
			onNewMessageChange={onNewMessageChange}
			onSendNewMessage={onSendNewMessage}
			handleTicketEdit={handleTicketEdit}
			handleCancel={handleCancel}
			isPopupOpen={isPopupOpen}
			parentElement={parentElement}
		/>
	);
};

export default ViewModel;
