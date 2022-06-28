import { ObjectOfKeyValue } from 'utils/interfaces';
import styles from './styles.module.scss';
import useTranslation from 'hooks/useTranslation';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

type Props = {
	setFilters: (selected: ObjectOfKeyValue, filter: ObjectOfKeyValue) => void;
	setFilterText: (value: string) => void;
	idx: string | number;
	filterText: string;
	simpleFilter: ObjectOfKeyValue;
	t: any;
};

const View: React.FC<Props> = ({
	setFilterText,
	idx,
	filterText,
	setFilters,
	simpleFilter,
	t,
}) => {
	return (
		<div className={styles.textFilter}>
			<TextField
				id={`textfilter-${idx}`}
				value={filterText}
				placeholder={t('Filter_PostalCodePlaceholder')}
				variant='outlined'
				onChange={(e) => {
					setFilterText(e.target.value);
					setFilters({ value: e.target.value }, simpleFilter);
				}}
			/>
		</div>
	);
};

export default View;
