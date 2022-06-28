import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	Typography,
} from '@mui/material';
import { ObjectOfKeyValue } from 'utils/interfaces';
import styles from './styles.module.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckboxFilter from '../CheckboxFilter';
import Textfilter from '../TextFilter';
import CustomButton from 'app/components/CustomComponents/CustomButton';

type Props = {
	filtersArray: Array<ObjectOfKeyValue>;
	setFilters: (selected: ObjectOfKeyValue, filter: ObjectOfKeyValue) => void;
	submitFilters: () => void;
	setSubmitted: () => void;
	t: any;
};

const View: React.FC<Props> = ({
	filtersArray,
	setFilters,
	submitFilters,
	setSubmitted,
	t,
}) => {
	return (
		<div className={styles.filtersListContainer}>
			{filtersArray.map((filter, idx) => (
				<div key={'filter_' + idx}>
					<Accordion
						className={styles.filtersContainer}
						elevation={0}
					>
						<AccordionSummary
							className={styles.filtersContainer}
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1a-content'
							id={'panel1a-header_' + idx}
						>
							<Typography>{t(filter?.label)}</Typography>
						</AccordionSummary>
						<AccordionDetails className={styles.filtersList}>
							<Typography
								className={styles.accordionDetailsContent}
							>
								{filter.type === 'multiSelect' ? (
									<CheckboxFilter
										filter={filter}
										idx={idx}
										setFilters={setFilters}
									/>
								) : (
									<Textfilter
										filter={filter}
										idx={idx}
										setFilters={setFilters}
									/>
								)}
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			))}
			<div className={styles.validateFilters}>
				<CustomButton
					content={t('Validate')}
					type='validate'
					onClick={() => {
						submitFilters();
					}}
				/>
			</div>
		</div>
	);
};

export default View;
