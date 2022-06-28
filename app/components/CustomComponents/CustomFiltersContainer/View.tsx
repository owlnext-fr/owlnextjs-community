import { Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import styles from './styles.module.scss';
import { ObjectOfKeyValue } from 'utils/interfaces';
import { Trads } from 'app/types/global'
import SubmittedFilters from './SubmittedFilters';
import Filters from './Filters';

type Props = {
	filtersArray: Array<ObjectOfKeyValue>;
	setFilters: (selected: ObjectOfKeyValue, filter: ObjectOfKeyValue) => void;
	submitFilters: () => void;
	setSubmitted: () => void;
	wrapperRef: any;
	showFilters: (e: any) => void;
	trads: Trads;
	activatedFilters: Array<ObjectOfKeyValue>;
	showFiltersBox: boolean;
	setActivatedFilters: (arg: any) => void
};

const View: React.FC<Props> = ({
	wrapperRef,
	showFilters,
	trads,
	filtersArray,
	activatedFilters,
	setFilters,
	submitFilters,
	showFiltersBox,
	setSubmitted,
	setActivatedFilters
}) => {
	return (
		<div className={styles.masterContainer}>
			<div 
				className={styles.filtersContainer}
				ref={wrapperRef}
			>
				<Button
					variant='text'
					size='medium'
					onClick={(e) => {
						showFilters(e);
					}}
					className={styles.filtreButton}
				>
					<FilterListIcon />
				</Button>
				{activatedFilters.length > 0 && (
					<div className={styles.activatedContainer}>
						<SubmittedFilters
							activatedFilters={activatedFilters}
							setFilters={setFilters}
							submitFilters={submitFilters}
							setActivatedFilters={setActivatedFilters}
						/>
					</div>
				)}
				{showFiltersBox && (
					<div className={styles.filterContainer}>
						<Filters
							filtersArray={filtersArray}
							setFilters={setFilters}
							submitFilters={submitFilters}
							setSubmitted={setSubmitted}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default View;
