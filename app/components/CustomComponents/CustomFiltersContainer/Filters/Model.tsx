import { ObjectOfKeyValue } from 'utils/interfaces';
import View from './View';
import useTranslation from 'hooks/useTranslation';
import { useMemo } from 'react';

type Props = {
	filtersArray: Array<ObjectOfKeyValue>;
	setFilters: (selected: ObjectOfKeyValue, filter: ObjectOfKeyValue) => void;
	submitFilters: () => void;
	setSubmitted: () => void;
};

const ViewModel: React.FC<Props> = ({
	filtersArray,
	setFilters,
	submitFilters,
	setSubmitted,
}) => {
	const { t } = useTranslation();
	const trads = useMemo(() => {
		return {
			filtersValidate: t('Filter_Validate'),
		};
	}, [t]);

	return (
		<View
			filtersArray={filtersArray}
			setFilters={setFilters}
			submitFilters={submitFilters}
			setSubmitted={setSubmitted}
			t={t}
		/>
	);
};

export default ViewModel;
