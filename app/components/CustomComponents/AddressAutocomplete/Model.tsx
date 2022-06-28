import { useEffect, useState, useMemo, useCallback } from 'react'
import useTranslation from 'hooks/useTranslation'
import View from './View';

type Props = {
  getAddressApi: (address: string) => void,
  addressesList: Array<any>,
  valueInput: string,
  placeholder?: string,
  setter: (e: any) => void,
  errorAddress?: boolean
}

const ViewModel: React.FC<Props> = ({
  getAddressApi,
  addressesList,
  valueInput = '',
  placeholder = '',
  setter,
  errorAddress = false
}) => {
  const [inputAddress, setInputAddress] = useState(valueInput)
  const [errorInputAddress, setErrorInputAddress] = useState(false)
  const [selectedAddress, setSelectedAddress] = useState<string>('')
  const [selectedAddressObject, setSelectedAddressObject] = useState<any>({})
  const [addressesListOptions, setAddressesListOptions] = useState<Array<any>>([])
  const [emptyOptions, setEmptyOptions] = useState(false)
  const { t } = useTranslation()
  
  useEffect(() => {
    let temp = []

    if (addressesList.length > 0) {
      setEmptyOptions(false)

      for (let i = 0; i < addressesList.length; i ++) {
        temp.push({
          id: addressesList[i].properties.id,
          label: addressesList[i].properties.label,
          value: addressesList[i].properties.id
        })
      }
    } else {
      setEmptyOptions(true)
    }

    setAddressesListOptions(temp)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressesList])

  useEffect(() => {
    if (selectedAddress) {
      for (const address of addressesList) {
        if (address.properties.id == selectedAddress) {
          setSelectedAddressObject(address)
          setter(address)
          setInputAddress(address.properties.label)
        }
      }
    }
  }, [addressesList, selectedAddress, setter])

  useEffect(() => {
		if (inputAddress !== '') {
			const timeOutId = setTimeout(() => {
				getAddressApi(inputAddress);
			}, 200);
			return () => clearTimeout(timeOutId);
		} else {
      setAddressesListOptions([])
      setSelectedAddress('')
      setSelectedAddressObject({})
    }
	}, [getAddressApi, inputAddress]);

  const handleClickAddressCard = useCallback((e: any) => {
    for (const address of addressesList) {
      if (address.properties.id == e.target.value) {
        setSelectedAddressObject(address)
        setter(address)
      }
    }
  }, [addressesList, setter])

  const trads = useMemo(() => {
    return {
      placeholder: t('AddressAutocomplete_PlaceholderNoAddress'),
    }
  }, [t])
  
  return (
    <View 
      inputAddress={inputAddress}
      setInputAddress={setInputAddress}
      selectedAddress={selectedAddress}
      setSelectedAddress={setSelectedAddress}
      addressesList={addressesListOptions}
      placeholder={placeholder}
      errorAddress={errorAddress}
      handleClickAddressCard={handleClickAddressCard}
    />
  );
};

export default ViewModel;

