import { ObjectOfKeyValue } from 'utils/interfaces';
import View from './View';
import useTranslation from 'hooks/useTranslation';
import { useMemo, useCallback } from 'react';
type Props = {
	activatedFilters: Array<ObjectOfKeyValue>;
	setFilters: (selected: ObjectOfKeyValue, filter: ObjectOfKeyValue) => void;
	submitFilters: () => void;
	setActivatedFilters: (arg: any) => void
};

const ViewModel: React.FC<Props> = ({
	activatedFilters,
	setFilters,
	submitFilters,
	setActivatedFilters
}) => {
	const { t } = useTranslation();

	const formattedFilters = useMemo(() => {
		let final: Array<any> = []

		for (const element of activatedFilters) {
			let found = -1
			for (let i = 0; i < final.length; i ++) {
				if (final[i].category == element.category) {
					found = i
				}
			}

			if (found !== -1) {
				if (typeof(final[found].data) == 'undefined') {
					final.push({
						data: [],
						category: element.category
					})
				} else {
					final[found].data.push(element)
				}
			} else {
				final.push({
					category: element.category,
					data: [element]
				})
			}
		}
	
		return final
	}, [activatedFilters])

	const deleteCategory = useCallback((category: any) => {
		let temp = [...activatedFilters]

		for (let i = 0; i < activatedFilters.length; i ++) {
			if (activatedFilters[i].category == category.category) {
				temp.splice(i, 1)

				const checkedBox = {
					checked: false,
					key: activatedFilters[i].key,
					value: activatedFilters[i].value,
				}
		
				const simpleFilter = {
					name: activatedFilters[i].name,
					type: activatedFilters[i].type,
				}

				setFilters(checkedBox, simpleFilter)
			}
		}

		setActivatedFilters([...temp])
		submitFilters()
	}, [activatedFilters, setActivatedFilters, setFilters, submitFilters])

	const trads = useMemo(() => {
		return {
			filters: 'Filters_Filters',
		};
	}, []);

	return (
		<View
			activatedFilters={formattedFilters}
			setFilters={setFilters}
			submitFilters={submitFilters}
			t={t}
			deleteCategory={deleteCategory}
		/>
	);
};

export default ViewModel;
