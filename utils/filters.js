import httpWrapper from "./service/httpWrapper";
import { getCookie } from 'utils/cookies'

export const decodeFilters = filters => {
    return atob(filters)
}

export const useOutsideAlerter = ref => {
    useEffect(() => {
      const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowFiltersBox(false)
        }
      }
      
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [ref]);
}

export const formatFilters = async (queryFilters, filters, setFiltersArray, setActivatedFilters, filtersArray) => {
    let tempArrayFilters = []
    let decodedQuery = typeof(queryFilters) !== 'undefined' ? atob(queryFilters) : ''
    let tempQuery = []

    if (decodedQuery !== '') {
        let values = decodedQuery.split('&')

        for (let i = 0; i < values.length; i++) {
            let tempQueryObject = {}
            let value = values[i].split('=')
            let category = ''

            if (value[0].slice(-2) == '[]') {
                category = value[0].slice(0, -2)
            } else {
                category = value[0]
            }

            tempQueryObject.category = category
            tempQueryObject.value = value[1]

            tempQuery.push(tempQueryObject)
        }
    }

    if (filters !== null) {
        for (let i = 0; i < filters.length; i++) {
            tempArrayFilters[i] = []
            tempArrayFilters[i].originalCategory = filters[i].name
            tempArrayFilters[i].active = null
            tempArrayFilters[i].category = filters[i].label
            tempArrayFilters[i].options = []
            tempArrayFilters[i].inclusivity = filters[i].inclusivity
            tempArrayFilters[i].type = filters[i].type
            tempArrayFilters[i].multiple = filters[i].multiple
            tempArrayFilters[i].defaultInclusivity = filters[i].defaultInclusivity

            if (filters[i].type === 'select') {
                for (let y = 0; y < filters[i].values.length; y++) {   
                    let temp = []     
                    temp.key = filters[i].values[y].value
                    temp.value = filters[i].values[y].label
                    temp.active = false

                    if (tempQuery.length > 0) {
                        for (let x = 0; x < tempQuery.length; x++) {
                            if (tempQuery[x].category == tempArrayFilters[i].originalCategory && temp.key == tempQuery[x].value) {
                                temp.active = true
                            }

                            if (filters[i].inclusivity) {
                                let regExclusive = /Exclusive/gm
                                let regInclusive = /Inclusive/gm
                                let execExclusive = regExclusive.exec(tempQuery[x].category)
                                let execInclusive = regInclusive.exec(tempQuery[x].category)

                                if (execExclusive) {
                                    let category = execExclusive.input.slice(0, execExclusive.index)

                                    if (category == tempArrayFilters[i].originalCategory) {
                                        tempArrayFilters[i].isExclusive = true
                                    }
                                } else if(execInclusive) {
                                    let category = execInclusive.input.slice(0, execInclusive.index)

                                    if (category == tempArrayFilters[i].originalCategory) {
                                        tempArrayFilters[i].isExclusive = false
                                    }
                                }
                            }
                        }
                    }

                    tempArrayFilters[i].options.push(temp)
                }
                if (!filters[i].multiple) {
                    if (tempQuery.length > 0) {
                        for (let x = 0; x < tempQuery.length; x++) {
                            if (tempQuery[x].category == tempArrayFilters[i].originalCategory) {                                
                                if (!tempArrayFilters[i].selectedValue) {
                                    tempArrayFilters[i].selectedValue = ''
                                }
    
                                tempArrayFilters[i].selectedValue = tempQuery[x].value
                            }
                        }
                    }
                }
                
            } else if (filters[i].type === 'search') {
                tempArrayFilters[i].search = filters[i].search
                tempArrayFilters[i].multiple = filters[i].multiple

                if (filters[i].multiple) {
                    tempArrayFilters[i].selectedValues = []
                } else {
                    tempArrayFilters[i].selectedValue = ''
                }

                if (tempQuery.length > 0) {
                    for (let x = 0; x < tempQuery.length; x++) {
                        if (tempQuery[x].category == tempArrayFilters[i].originalCategory && filters[i].multiple) {
                            tempArrayFilters[i].selectedValues.push(tempQuery[x].value)
                        }

                        if (tempQuery[x].category == tempArrayFilters[i].originalCategory && !filters[i].multiple) {
                            if (!tempArrayFilters[i].selectedValues) {
                                tempArrayFilters[i].selectedValues = ''
                            }

                            tempArrayFilters[i].selectedValue = tempQuery[x].value
                        }
                    }
                }
            } else if (filters[i].type === 'date') {
                if (tempQuery.length > 0) {
                    for (let x = 0; x < tempQuery.length; x++) {
                        if (tempQuery[x].category == tempArrayFilters[i].originalCategory) {
                            if (!tempArrayFilters[i].selectedValues) {
                                tempArrayFilters[i].value = ''
                            }

                            tempArrayFilters[i].value = tempQuery[x].value
                        }
                    }
                }
            } else if (filters[i].type === 'date_range') {
                if (tempQuery.length > 0) {
                    for (let x = 0; x < tempQuery.length; x++) {
                        if (tempQuery[x].category == tempArrayFilters[i].originalCategory + 'From') {
                            tempArrayFilters[i].valueFrom = tempQuery[x].value
                        }

                        if (tempQuery[x].category == tempArrayFilters[i].originalCategory + 'To') {
                            tempArrayFilters[i].valueTo = tempQuery[x].value
                        }
                    }
                }
            }
        }
    }

    setSubmitted(setActivatedFilters, filtersArray, tempArrayFilters)
    setFiltersArray([...tempArrayFilters])
}

export const submitFilters = (setActivatedFilters, filtersArray, router, setter, setShowFiltersBox, sendFilters, currentSearch = null) => {
    const finalFilters = [...filtersArray]
    let tempArray = {}

    for (let i = 0; i < finalFilters.length; i++) {
        const current = finalFilters[i];

        if (current.type == 'select') {
            if (current.multiple) {
                for (let y = 0; y < current.options.length; y++) {
                    if (current.options[y].active == true) {
                        tempArray[current.originalCategory] === undefined
                            ? (tempArray[current.originalCategory] = [])
                            : null;
                        tempArray[current.originalCategory].push(current.options[y].key)
                    }

                    if (current.defaultInclusivity) {
                        tempArray[current.originalCategory + current.defaultInclusivity] = true
                    }

                    if(current.inclusivity) {
                        if (current.isExclusive){
                            tempArray[current.originalCategory + 'Exclusive'] = true
                        } else {
                            tempArray[current.originalCategory + 'Inclusive'] = true
                        }
                    }
                }
            } else {
                tempArray[current.originalCategory] === undefined
                ? (tempArray[current.originalCategory] = {})
                : null;

                tempArray[current.originalCategory].isSimpleValue = true
                tempArray[current.originalCategory].value = current.selectedValue
            }
            
        } else if (current.type == 'search') {
            if (current.defaultInclusivity) {
                tempArray[current.originalCategory + current.defaultInclusivity] = true
            }
            
            if (current.multiple) {
                if (current.selectedValues.length > 0) {
                    tempArray[current.originalCategory] === undefined
                        ? (tempArray[current.originalCategory] = [])
                        : null;

                    let temp = []
                    for (const item of current.selectedValues) {
                        temp.push(item.id)
                    }

                    tempArray[current.originalCategory] = temp
                } 
            } else {
                if (current.selectedValue !== '') {
                    tempArray[current.originalCategory] === undefined
                        ? (tempArray[current.originalCategory] = [])
                        : null;
                    tempArray[current.originalCategory].push(current.selectedValue)
                } 
            }
        } else if (current.type == 'date') {
            tempArray[current.originalCategory] === undefined
                ? (tempArray[current.originalCategory] = [])
                : null;

            tempArray[current.originalCategory].push(current.value)    
        } else if (current.type == 'date_range') {
            tempArray[current.originalCategory] === undefined
                ? (tempArray[current.originalCategory] = [])
                : null;

            tempArray[current.originalCategory].isDateMultiple = true
            tempArray[current.originalCategory].push(current.valueFrom)
            tempArray[current.originalCategory].push(current.valueTo)
        }
    }

    let finalString = ''

    for (const [key, value] of Object.entries(tempArray)) {
        let tempString = ''

        if (tempArray[key].isDateMultiple) {
            tempString += key + 'From=' + tempArray[key][0] + '&' + key + 'To=' + tempArray[key][1] + '&'
        } else if (tempArray[key].isSimpleValue) {
            if (tempArray[key].value) {
                tempString += key + '=' + encodeURIComponent(tempArray[key].value) + '&'
            }
        } else {
            if (tempArray[key].length > 1) {
                tempString += ''
    
                for (let x = 0; x < tempArray[key].length; x++) {
                    if (typeof(tempArray[key][x]) == 'string' ) {
                        tempString +=
                        key + '[]=' + encodeURIComponent(tempArray[key][x]) + '&'
                    } else {
                        tempString +=
                        key + '[]=' + encodeURIComponent(tempArray[key][x] ? '1' : '0') + '&'
                    }
                }
            } else {
                if (typeof(value) == 'boolean' ) {
                    tempString += key + '=' + (value ? '1' : '0') + '&'
                } else {
                    tempString += key + '=' + value + '&'
                }
            }
        }

        finalString += tempString
    }

    finalString = finalString.slice(0, -1)

    let encodedFinalString = btoa(finalString)

    let currentQuery = router.query
    currentQuery.filters = encodedFinalString
    
    router.push({
        query: currentQuery
    })

    setter('currentPage', 1)
    setShowFiltersBox(false)
    sendFilters(finalString, currentSearch)
    setSubmitted(setActivatedFilters, filtersArray)
};

export const setFilters = (filtersArray, setFiltersArray, checked, key, value, category) => {
    let tempArray = [...filtersArray]

    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i].originalCategory == category) {
            for (let y = 0; y < tempArray[i].options.length; y++) {
                if (tempArray[i].options[y].value == value && tempArray[i].options[y].key == key) {
                    tempArray[i].options[y].active = checked
                }
            }
        }
    }

    setFiltersArray(tempArray);
};

export const setFiltersSearch = (filtersArray, setFiltersArray, selectedItem, category) => {
    let tempArray = [...filtersArray]

    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i].originalCategory == category) {
            tempArray[i].selectedValue = selectedItem
        }
    }    

    setFiltersArray([...tempArray])
}

export const setFiltersSelectSimple = (filtersArray, setFiltersArray, selectedItem, category) => {
    let tempArray = [...filtersArray]

    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i].originalCategory == category) {
            tempArray[i].selectedValue = selectedItem
        }
    }    

    setFiltersArray([...tempArray])
}

export const setFiltersSearchMultiple = (filtersArray, setFiltersArray, selectedItems, category) => {
    let tempArray = [...filtersArray]

    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i].originalCategory == category) {
            tempArray[i].selectedValues = selectedItems
        }
    }    

    setFiltersArray([...tempArray])
}

export const setFiltersDate = (filtersArray, setFiltersArray, date, category) => {
    let tempArray = [...filtersArray]

    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i].originalCategory == category) {
            tempArray[i].value = date
        }
    }    

    setFiltersArray([...tempArray])
}

export const setFiltersDateMultiple = (filtersArray, setFiltersArray, date, category, order) => {
    let tempArray = [...filtersArray]

    if (order == 'from') {
        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i].originalCategory == category) {
                tempArray[i].valueFrom = date
            }
        }    
    } else if (order == 'to') {
        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i].originalCategory == category) {
                tempArray[i].valueTo = date
            }
        }    
    }
    
    setFiltersArray([...tempArray])
}

export const setInclusivity = (originalCategory, isExclusive, filtersArray, setFiltersArray) => {
    let temp = [...filtersArray]

    for (let i = 0; i < temp.length; i ++) {
        if (temp[i].originalCategory === originalCategory) {
            temp[i].isExclusive = isExclusive
        }
    }

    setFiltersArray(temp)
}

export const showFilters = (showFiltersBox, setShowFiltersBox) => {
    showFiltersBox == false ? setShowFiltersBox(true) : setShowFiltersBox(false)
}

export const setSubmitted = (setActivatedFilters, filtersArray, possibleArray) => {
    let tempArray = []
    let originalArray = []
    typeof(possibleArray) !== 'undefined' ? originalArray = possibleArray : originalArray = filtersArray

    for (let i = 0; i < originalArray.length; i++){
        if (originalArray[i].type == 'select') {
            for (let y = 0; y < originalArray[i].options.length; y++){
                if (originalArray[i].options[y].active === true){
                    let tempObject = {
                        key : originalArray[i].options[y].key,
                        category : originalArray[i].category,
                        value : originalArray[i].options[y].value,
                        originalCategory : originalArray[i].originalCategory,
                        isExclusive: originalArray[i].isExclusive,
                        type: originalArray[i].type
                    }
    
                    tempArray.push(tempObject)
                }
            }
        } else if (originalArray[i].type == 'search') {
            if (originalArray[i].multiple) {

            } else {
                if (originalArray[i].selectedValue !== ''){
                    let tempObject = {
                        key : 'clé',
                        category : originalArray[i].category,
                        value : originalArray[i].selectedValue,
                        originalCategory : originalArray[i].originalCategory,
                        isExclusive: originalArray[i].isExclusive,
                        type: originalArray[i].type
                    }
    
                    tempArray.push(tempObject)
                }
            }
        }
    }

    setActivatedFilters([...tempArray])
}