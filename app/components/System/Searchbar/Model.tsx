import React, { useCallback, useEffect, useState } from 'react'
import useTranslation from 'hooks/useTranslation';
import { useRouter } from 'next/router';

import View from './View';
import { ReduxUniversalSetter } from 'app/types/global';

type Props = {
  isSearchScreen: boolean;
  setAppFields: ReduxUniversalSetter;
}

const ViewModel: React.FC<Props> = ({
  isSearchScreen,
  setAppFields,
}) => {
  const [value, setValue] = useState<any>('');
  const router = useRouter()
  const { t } = useTranslation();

  const trads = {
    searchPlaceholder: t('Search_Placeholder')
  }

  const submitSearch = useCallback((e: any) => {
    e.preventDefault()
    
    /**
     * INSERT SUBMIT SEARCH FUNCTION
     */
  }, [router, value])

  const onChangeValue = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  useEffect(() => {
		if (value !== '') {
			const timeOutId = setTimeout(() => {
				setAppFields('isSearchScreen', true)
        /**
         * INSERT REDUX FUNCTION FOR SEARCH OVERLAY
         */
			}, 200);
			return () => clearTimeout(timeOutId);
		} else {
      setAppFields('isSearchScreen', false)
    }
	}, [value, setAppFields]);

  useEffect(() => {
    if (typeof(router.query.searchContent) !== 'undefined') {
      setValue(router.query.searchContent)
    }
  }, [router])

  useEffect(() => {
    if (!isSearchScreen) {
      setValue('')
    }
  }, [isSearchScreen])

  return (
    <View 
      trads={trads}
      value={value}
      setValue={setValue}
      submitSearch={submitSearch}
      isSearchScreen={isSearchScreen}
      onChangeValue={onChangeValue}
    />
  );
};

export default ViewModel;

