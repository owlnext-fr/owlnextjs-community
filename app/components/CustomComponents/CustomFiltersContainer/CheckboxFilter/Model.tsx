import { ObjectOfKeyValue } from 'utils/interfaces';
import View from './View';
import useTranslation from 'hooks/useTranslation';
import { useMemo } from 'react';

type Props = {
	setFilters: (selected: ObjectOfKeyValue, filter: ObjectOfKeyValue) => void;
	idx: number;
	filter: ObjectOfKeyValue;
};

const ViewModel: React.FC<Props> = ({ setFilters, idx, filter }) => {
	const { t } = useTranslation();
	const simpleFilter = {
		name: filter.name,
		type: filter.type,
	};

	const trads = useMemo(() => {
		return {
			filters: 'Filters_Filters',
		};
	}, []);

	return (
		<View
			filter={filter}
			idx={idx}
			setFilters={setFilters}
			trads={trads}
			t={t}
			simpleFilter={simpleFilter}
		/>
	);
};

export default ViewModel;
