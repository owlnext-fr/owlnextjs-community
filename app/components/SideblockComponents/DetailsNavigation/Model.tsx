import { ReduxUniversalSetter } from 'app/types/global';
import { useCallback } from 'react';
import View from './View';

type Props = {
  selectedDetailsSubTab: string,
  setAppFields: ReduxUniversalSetter,
  sideblockTitle: string
}

const ViewModel: React.FC<Props> = ({
  selectedDetailsSubTab,
  setAppFields,
  sideblockTitle
}) => {
  const handleClick = useCallback((section) => {
    setAppFields('selectedDetailsSubTab', section)
  }, [setAppFields])
  
  return (
    <View 
      selectedDetailsSubTab={selectedDetailsSubTab}
      handleClick={handleClick}
      sideblockTitle={sideblockTitle}
    />
  );
};

export default ViewModel;

