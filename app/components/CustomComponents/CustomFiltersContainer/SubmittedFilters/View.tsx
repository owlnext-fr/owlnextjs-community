import { Chip } from '@mui/material';
import { ObjectOfKeyValue } from 'utils/interfaces';
import CloseIcon from '@mui/icons-material/Close';
import styles from './styles.module.scss';

type Props = {
	activatedFilters: Array<ObjectOfKeyValue>;
	setFilters: (selected: ObjectOfKeyValue, filter: ObjectOfKeyValue) => void;
	submitFilters: () => void;
	t: any;
	deleteCategory: (category: any) => void
};

const View: React.FC<Props> = ({
	activatedFilters,
	setFilters,
	submitFilters,
	t,
	deleteCategory
}) => {
	
	return (
		<div className={styles.activatedFiltersContainer}>
			{ activatedFilters.map((category: any, categoryKey) => (
				<div key={'category_' + categoryKey} className={styles.categoryContainer}>
					<span className={styles.name}>
						{t(category.data[0].name)}
					</span>
					{ category.data.map((filter: any, filterKey: any) => (
						<Chip
							key={`itFilter-key-${filterKey}`}
							className={styles.chip}
							size='small'
							label={`${t(filter.value)}`}
							onDelete={() => {
								const checkedBox = {
									checked: false,
									key: filter.key,
									value: filter.value,
								}

								const simpleFilter = {
									name: filter.name,
									type: filter.type,
								}

								setFilters(checkedBox, simpleFilter)
								submitFilters()
							}}
							color='primary'
						/>
					))}
					<CloseIcon 
						className={styles.closeIcon}
						onClick={() => {
							deleteCategory(category)
						}}
					/>
				</div>
			))}
		</div>
	);
};

export default View;
