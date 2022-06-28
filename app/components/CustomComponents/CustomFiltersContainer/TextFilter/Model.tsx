import useTranslation from 'hooks/useTranslation';
import { useEffect, useState } from 'react';
import { ObjectOfKeyValue } from 'utils/interfaces';
import View from './View';

type Props = {
	setFilters: (selected: ObjectOfKeyValue, filter: ObjectOfKeyValue) => void;
	idx: number;
	filter: ObjectOfKeyValue;
};

const ViewModel: React.FC<Props> = ({ setFilters, idx, filter }) => {
	const { t } = useTranslation();
	const [filterText, setFilterText] = useState<string>('');

	const simpleFilter = {
		name: filter.name,
		type: filter.type,
	};

	useEffect(() => {
		setFilterText(filter.value);
	}, [filter.value]);

	return (
		<View
			setFilterText={setFilterText}
			idx={idx}
			filterText={filterText}
			setFilters={setFilters}
			simpleFilter={simpleFilter}
			t={t}
		/>
	);
};

export default ViewModel;
