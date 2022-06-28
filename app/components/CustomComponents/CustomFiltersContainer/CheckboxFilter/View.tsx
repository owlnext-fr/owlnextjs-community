import { ObjectOfKeyValue } from 'utils/interfaces';
import { Trads } from 'app/types/global'
import styles from './styles.module.scss';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Checkbox, FormControlLabel } from '@mui/material';

type Props = {
	setFilters: (selected: ObjectOfKeyValue, filter: ObjectOfKeyValue) => void;
	idx: number | string;
	filter: ObjectOfKeyValue;
	simpleFilter: ObjectOfKeyValue;
	t: any;
	trads: Trads;
};

const View: React.FC<Props> = ({
	setFilters,
	idx,
	filter,
	simpleFilter,
	t,
}) => {
	return (
		<div className={styles.checkboxFilter}>
			<PerfectScrollbar>
				{filter.map((checkbox: any, idx2: string) => (
					<div
						key={'checkbox_' + idx + '_' + idx2}
						className={styles.filterOption}
					>
						<FormControlLabel
							control={
								<Checkbox
									checked={checkbox.active}
									className={styles.checkbox}
									onChange={(e) => {
										const checkedBox = {
											checked: e.target.checked,
											key: checkbox.key,
											value: checkbox.value,
										};

										setFilters(checkedBox, simpleFilter);
									}}
									name='checkedB'
									color='primary'
								/>
							}
							label={`${t(checkbox.value)}`}
						/>
					</div>
				))}
			</PerfectScrollbar>
		</div>
	);
};

export default View;
