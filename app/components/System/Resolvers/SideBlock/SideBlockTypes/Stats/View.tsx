import PerfectScrollbar from 'react-perfect-scrollbar';
import styles from './styles.module.scss';

import Subscriptionsgraph from 'app/components/Examples/Graphs/Subscriptionsgraph';

type Props = {
};

const View: React.FC<Props> = ({ 
	
}) => {
	return (
		<div className={`${styles.sideblockdashboard} sidePadding`}>
			<PerfectScrollbar>
				<Subscriptionsgraph />
			</PerfectScrollbar>
		</div>
	);
};

export default View;