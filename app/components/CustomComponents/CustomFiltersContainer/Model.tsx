import View from './View';
import useTranslation from 'hooks/useTranslation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ObjectOfKeyValue } from 'utils/interfaces';
import { useRouter } from 'next/router';

type Props = {
	filters: Array<ObjectOfKeyValue>;
	sendFilters: (filters: string) => void,
	reducerFiltersSetter: (variable: Array<any>) => void
};

const ViewModel: React.FC<Props> = ({ filters, sendFilters, reducerFiltersSetter }) => {
	const { t } = useTranslation();
	const router = useRouter();

	const [showFiltersBox, setShowFiltersBox] = useState<boolean>(false);
	const [hasQueryFilters, setHasQueryFilters] = useState<boolean>(false);
	const [filtersArray, setFiltersArray] = useState<Array<ObjectOfKeyValue>>([]);
	const [queryFilters, setQueryFilters] = useState<any>('');

	const [activatedFilters, setActivatedFilters] = useState<Array<ObjectOfKeyValue>>([]);
	const wrapperRef = useRef(null);

	const trads = useMemo(() => {
		return {
			filters: t('Filters'),
		};
	}, [t]);

	const useOutsideAlerter = (ref: any) => {
		useEffect(() => {
			const handleClickOutside = (event: any) => {
				if (ref.current && !ref.current.contains(event.target)) {
					setShowFiltersBox(false);
				}
			};

			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, [ref]);
	};

	useOutsideAlerter(wrapperRef);

	const formatFilters = () => {
		let tempArrayFilters: Array<ObjectOfKeyValue> = [];
		let i = 0;
		for (const [key, value] of Object.entries(filters)) {
			tempArrayFilters[i] = [];
			tempArrayFilters[i].originalCategory = key;
			tempArrayFilters[i].active = null;
			tempArrayFilters[i].category = key;
			tempArrayFilters[i].type = value.typeFilter;
			tempArrayFilters[i].name = value.name;
			tempArrayFilters[i].label = value.name
				.replace(/([a-z])([A-Z])/g, '$1 $2')
				.replace(/^([a-z])/, function (a: any) {
					return a.toUpperCase();
				});

			if (value.typeFilter === 'multiSelect') {
				for (const [keyFilter, valueFilter] of Object.entries(value.values)) {
					const temp2: any = valueFilter
					let temp: ObjectOfKeyValue = {};
					temp.key = temp2.id;
					temp.value = temp2.value;
					temp.type = value.type;
					temp.active = false;

					for (let [keyQuery, valueQuery] of Object.entries(
						queryFilters
					)) {
						if (keyQuery.slice(-2) == '[]') {
							keyQuery = keyQuery.slice(0, -2);
						}

						if (Array.isArray(valueQuery)) {
							for (let i = 0; i < valueQuery?.length; i++) {
								if (
									keyQuery == value.name &&
									valueQuery[i] == temp2.id
								) {
									temp.active = true;
								}
							}
						} else {
							if (
								keyQuery == value.name &&
								valueQuery == value.values[keyFilter].id
							) {
								temp.active = true;
							}
						}
					}

					tempArrayFilters[i].push(temp);
				}
			} else if (value.type === 'input') {
				for (let [keyQuery, valueQuery] of Object.entries(
					queryFilters
				)) {
					if (keyQuery.slice(-2) == '[]') {
						keyQuery = keyQuery.slice(0, -2);
					}

					if (typeof valueQuery !== 'object') {
						if (keyQuery == value.name) {
							tempArrayFilters[i].value = valueQuery;
						}
					}
				}
			}

			i++;
		}

		setFiltersArray(tempArrayFilters);
	};

	const submitFilters = () => {
		const finalFilters: Array<ObjectOfKeyValue> = [...filtersArray];
		let tempArray: Array<ObjectOfKeyValue> = [];

		for (let i = 0; i < finalFilters.length; i++) {
			const current = finalFilters[i];

			if (current.type == 'multiSelect') {
				for (let y = 0; y < current.length; y++) {
					if (current[y].active == true) {
						tempArray[current.name] === undefined
							? (tempArray[current.name] = [])
							: null;
						tempArray[current.name].push({
							type: 'multiSelect',
							value: current[y].key, //value instead of key
						});
					}
				}
			} else if (current.type == 'input') {
				if (current.value) {
					tempArray[current.name] === undefined
						? (tempArray[current.name] = [])
						: null;
					tempArray[current.name].push({
						type: 'input',
						value: current.value,
					});
				}
			}
		}

		let finalString = '';
		
		for (const [key, value] of Object.entries(tempArray)) {
			let tempString: string = '';

			if (value?.length > 1) {
				tempString += '';

				for (let x = 0; x < value?.length; x++) {
					tempString +=
						key + '[]=' + encodeURIComponent(value[x].value) + '&';
				}
			} else {
				tempString += key + '=' + value[0].value + '&';
			}

			finalString += tempString;
		}

		finalString = finalString.slice(0, -1);

		setShowFiltersBox(false);
		sendFilters(finalString);
		setSubmitted();
	};

	const setFilters = (
		selected: ObjectOfKeyValue,
		filter: ObjectOfKeyValue
	) => {
		let tempArray = [...filtersArray];

		for (let i = 0; i < tempArray.length; i++) {
			if (tempArray[i].name == filter.name) {
				if (filter.type === 'multiSelect') {
					for (let y = 0; y < tempArray[i].length; y++) {
						if (
							tempArray[i][y].value == selected.value &&
							tempArray[i][y].key == selected.key
						) {
							tempArray[i][y].active = selected.checked;
						}
					}
				} else if (filter.type == 'input') {
					tempArray[i].value =
						selected.checked === false ? '' : selected.value;
				}
			}
		}

		setFiltersArray(tempArray);
	};

	const showFilters = () => {
		showFiltersBox == false
			? setShowFiltersBox(true)
			: setShowFiltersBox(false);
	};

	const setSubmitted = () => {
		let tempArray: Array<ObjectOfKeyValue> = [];

		for (let i = 0; i < filtersArray.length; i++) {
			if (filtersArray[i].type == 'multiSelect') {
				for (let y = 0; y < filtersArray[i].length; y++) {
					if (filtersArray[i][y].active === true) {
						let tempObject = {
							key: filtersArray[i][y].key,
							value: filtersArray[i][y].value,
							type: filtersArray[i].type,
							category: filtersArray[i].category,
							name: filtersArray[i].name,
							label: filtersArray[i].label,
						};

						tempArray.push(tempObject);
					}
				}
			} else if (filtersArray[i].type == 'input') {
				if (filtersArray[i].value) {
					let tempObject = {
						type: filtersArray[i].type,
						value: filtersArray[i].value,
						category: filtersArray[i].category,
						name: filtersArray[i].name,
						label: filtersArray[i].label,
					};

					tempArray.push(tempObject);
				}
			}
		}

		setActivatedFilters(tempArray);
	};

	useEffect(() => {
		formatFilters();
	}, [queryFilters, filters]);

	useEffect(() => {
		if (hasQueryFilters) {
			setSubmitted();
		}
	}, [filtersArray]);

	useEffect(() => {
		const filtersQuery = router.asPath.split('?')[1];
		router.query ? setQueryFilters(router.query) : null;
		setHasQueryFilters(true);
	}, []);

	useEffect(() => {
		reducerFiltersSetter(activatedFilters)
	}, [activatedFilters])

	return (
		<View
			wrapperRef={wrapperRef}
			showFilters={showFilters}
			trads={trads}
			filtersArray={filtersArray}
			activatedFilters={activatedFilters}
			setFilters={setFilters}
			submitFilters={submitFilters}
			showFiltersBox={showFiltersBox}
			setSubmitted={setSubmitted}
			setActivatedFilters={setActivatedFilters}
		/>
	);
};

export default ViewModel;
