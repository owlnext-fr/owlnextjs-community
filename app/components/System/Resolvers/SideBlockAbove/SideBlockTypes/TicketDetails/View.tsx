import CustomButton from 'app/components/CustomComponents/CustomButton';
import CustomLoading from 'app/components/CustomComponents/CustomLoading';
import CustomTextarea from 'app/components/CustomComponents/CustomTextarea';
import DetailsListItem from 'app/components/SideblockComponents/DetailsListItem';
import SideBlockRoot from 'app/components/SideblockComponents/SideBlockRoot';
import { Trads } from 'app/types/global';
import PerfectScrollbar from 'react-perfect-scrollbar';
import DialogPopup from 'app/components/CustomComponents/DialogPopup';
import moment from 'moment';
import styles from './styles.module.scss';
import useTranslation from 'hooks/useTranslation'

type Props = {
	trads: Trads;
	ticketDetails: any;
	ticketDetailsLoading: boolean;
	newMessage: string;
	onCloseTicket: () => void;
	onNewMessageChange: (e: any) => void;
	onSendNewMessage: (newStatus: string) => void;
	handleTicketEdit: (field: string, value: any) => void;
	handleCancel: () => void;
	isPopupOpen: boolean;
	parentElement: any,
};

const View: React.FC<Props> = ({ 
	trads,
	ticketDetails,
	ticketDetailsLoading,
	newMessage,
	onNewMessageChange,
	onSendNewMessage,
	handleTicketEdit,
	handleCancel,
	isPopupOpen,
	onCloseTicket,
	parentElement,
}) => {
	const { t } = useTranslation()

	return (
		<SideBlockRoot
			showDismiss
			dismissText={'Fermer le ticket'}
			dismissAction={onCloseTicket}
		>
			<div ref={parentElement} className={styles.ticketDetailsContainer}>
				<DialogPopup
					isOpen={isPopupOpen}
					cancelFunction={handleCancel}
					content={trads.cancelPopupContent}
					validateFunction={handleTicketEdit}
					parentElement={parentElement}
				>
					{ticketDetailsLoading && <CustomLoading />}
					<DetailsListItem
						title={trads.ticketObject}
						value={ticketDetails.Subject}
					/>
					<DetailsListItem
						title={trads.ticketStatus}
						value={t(ticketDetails.Status)}
					/>
					<div className={styles.ticketInprogress}>
						<div className={styles.responseContanier}>
							<PerfectScrollbar style={{ height: '100%' }} id='ticketMessageScroll'>
								<div className={styles.ticketTchat}>
									<div className={[styles.messageRow, styles.myMessage].join(' ')}>
										<div className={styles.messageContent}>
											<div className={styles.messageText}>
												Ceci est un message
											</div>
											<div className={styles.messageTime}>
												{moment().format('DD-MM-yyyy HH:mm')}
											</div>
										</div>
									</div>
									<div className={[styles.messageRow, styles.otherMessage].join(' ')}>
										<div className={styles.messageContent}>
											<div className={styles.messageText}>
												Je réponds au message
											</div>
											<div className={styles.messageTime}>
												{moment().format('DD-MM-yyyy HH:mm')}
											</div>
										</div>
									</div>
								</div>
							</PerfectScrollbar>
						</div>
					</div>
					<div className={styles.footer}>
						<div className={styles.tchatField}>
							<form
								className={styles.wrapForm}
								noValidate
								autoComplete='off'
								onSubmit={(e) => {
									e.preventDefault();
								}}
							>
								<CustomTextarea
									value={newMessage}
									setter={onNewMessageChange}
									className={styles.wrapText}
									placeholder={trads.writeMessageHere}
								/>
								{/* <TextField
									id='standard-text'
									label='message'
									className={styles.wrapText}
									value={newMessage}
									onChange={onNewMessageChange}
								/> */}
							</form>
							<div className={styles.sendMessageButton}>
								<CustomButton
									content={trads.ticketMessageSendWaiting}
									type='validate'
									onClick={() => onSendNewMessage('waiting')}
								/>
								<CustomButton
									content={trads.ticketMessageSendTreated}
									type='validate'
									onClick={() => onSendNewMessage('treated')}
								/>
							</div>
						</div>
					</div>
				</DialogPopup>
			</div>	
		</SideBlockRoot>
	);
};

export default View;
