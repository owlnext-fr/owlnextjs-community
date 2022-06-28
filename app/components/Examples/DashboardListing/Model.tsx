
import { DateTime } from 'luxon';
import { useCallback, useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TitleIcon from '@mui/icons-material/Title';
import SubjectIcon from '@mui/icons-material/Subject';
import styles from './styles.module.scss'
import View from './View';
import { ReduxUniversalSetter } from 'app/types/global';

type Props = {
	setSpecificAboveObject: (object: any) => void,
	setSideblockFields: ReduxUniversalSetter,
	setSpecificObject: (object: any) => void
}

const ticketsList = [
  {
    Status: 'In progress',
    CreatedBy: 'Arnaud Francois',
    Subject: 'Ceci est un sujet de test',
    CreatedDate: DateTime.fromJSDate(new Date(Date.now())),
	id: 1
  },
  {
    Status: 'Finished',
    CreatedBy: 'Adrien Gras',
    Subject: 'Un autre sujet de test',
    CreatedDate: DateTime.fromJSDate(new Date(Date.now())).minus({ day: 4 }),
	id: 2
  },
  {
    Status: 'Canceled',
    CreatedBy: 'John Doe',
    Subject: 'Ce sujet a été annulé',
    CreatedDate: DateTime.fromJSDate(new Date(Date.now())).minus({ day: 7 }),
	id: 3
  },
  {
    Status: 'In progress',
    CreatedBy: 'Arnaud Francois',
    Subject: 'Ceci est un sujet de test',
    CreatedDate: DateTime.fromJSDate(new Date(Date.now())),
	id: 4
  }
]

const ViewModel: React.FC<Props> = ({
	setSpecificAboveObject,
	setSideblockFields,
	setSpecificObject
}) => {
	const [data, setData] = useState<any[]>([]);

	useEffect(() => {
		/**
		 * initializing the normal sideblock width stats data
		 */
		setSpecificObject({
			type: 'Stats',
		})
	}, [setSpecificObject])
  
  	useEffect(() => {
		let list: Array<any> = ticketsList
		let datas: Array<any> = [];

		for (let i = 0; i < list.length; i++) {
			let statusColor = '#0d353d33'

			if (list[i].Status == 'Finished') {
				statusColor = '#68A672'
			} else if (list[i].Status == 'In progress') {
				statusColor = '#d69949fb'
			}

			let temp: { options: any; data: Array<any>; originalData: any } = {
				options: {
					isDisabled: false,
				},
				originalData: list[i],
				data: [
					{
						cellType: 'text',
						width: 'sixth',
						type: 'Tickets',
						value: <div style={{ height: '25px', width: '100px', display:'flex', alignItems: 'center', borderRadius: '10px', justifyContent: 'center', color: 'white', background: statusColor, fontSize: '10pt'}}>
							{list[i].Status}
						</div>
					},
					{
						value: <div className={styles.ticketName}>
							<AccountCircleIcon />
							<>
								{list[i].CreatedBy}<br />{DateTime.fromISO(list[i].CreatedDate).toFormat('dd-MM-yyyy HH:mm')}
							</>
						</div>
						,
						cellType: 'jsx',
						width: 'fifth',
						icon: <AccountCircleIcon />
					},
					{
						value: list[i].Subject,
						cellType: 'text',
						width: 'fifth',
						icon: <TitleIcon />,
						type: 'Tickets'
					},
					{
						value: <div className={styles.ticketName}>
							<SubjectIcon />
							<>
				{DateTime.fromISO(list[i].CreatedDate).toFormat('dd-MM-yyyy HH:mm')}
							</>
						</div>,
						cellType: 'jsx',
						width: 'twofifth'
					},
				],
			};

			datas.push(temp);
		}

		setData(datas);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ticketsList]);

  const onClickRow = useCallback((e: any, ticket: any) => {
    e.stopPropagation();
	/**
	 * Setting up the sideblock above title
	 */

	setSideblockFields('sideblockTitle', ticket.Subject)
	
	/**
	 * Here we're setting up an above sideblock
	 * width the template and content we want
	 */

	setSpecificAboveObject({
		type: 'TicketDetails',
		parent: {
			...ticket
		}
	})
  }, [setSpecificAboveObject])
  
  return (
    <View
      data={data}
      onClickRow={onClickRow}
    />
  );
};

export default ViewModel;

