
import { DateTime } from 'luxon';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { ReduxUniversalSetter } from 'app/types/global';
import View from './View';




type Props = {
  client: any;
  setAppFields: ReduxUniversalSetter;
  setSpecificAboveObject: (arg: any) => void;
}

const ViewModel: React.FC<Props> = ({
  client,
  setAppFields,
  setSpecificAboveObject
}) => {
  const onClickItem = useCallback(() => {
    setAppFields('isSearchScreen', false)
    setAppFields('selectedItem', 'Patient_' + client.id)
    
  }, [setAppFields, client])

  return (
    <View
      onClickItem={onClickItem}
    />
  );
};

export default ViewModel;

