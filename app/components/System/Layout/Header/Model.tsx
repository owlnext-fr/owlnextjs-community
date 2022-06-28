
import { useCallback, useMemo } from 'react';
import { ReduxUniversalSetter } from 'app/types/global';
import { getCurrentRole } from 'utils/security'
import useTranslation from 'hooks/useTranslation';
import View from './View';

type Props = {
  isSearchScreen: boolean;
  setAppFields: ReduxUniversalSetter;
  setSpecificAboveObject: (object: any) => void,
  setSideblockFields: (field: string, value: any) => void
}

const ViewModel: React.FC<Props> = ({
  isSearchScreen,
  setAppFields,
  setSpecificAboveObject,
  setSideblockFields
}) => {
  const { t } = useTranslation()

  const onClickClose = useCallback(() => {
    setAppFields('isSearchScreen', false)
  }, [setAppFields])

  const trads = useMemo(() => {
    return {
      
    }
  }, [t])

  const currentRole = getCurrentRole()

  const isKyc = useMemo(() => {
    const apiRoles = JSON.parse(sessionStorage.getItem(`${process.env.NEXT_PUBLIC_APPNAME}_roles`) || '[]')
    return apiRoles.includes('ROLE_KYCTOCHECK')
  }, [])

  const handleClickUpsell = useCallback(() => {
    setSideblockFields('sideblockTitle', t('Modules_paymentSideBlock_title'))
    setSpecificAboveObject({
      type: 'NewModulePayment',
      parent: {
        id: 1,
        activated: false,
      }
    })
  }, [setSideblockFields, setSpecificAboveObject, t])
  
  return (
    <View
      isSearchScreen={isSearchScreen}
      onClickClose={onClickClose}
      currentRole={currentRole}
      trads={trads}
      handleClickUpsell={handleClickUpsell}
      isKyc={isKyc}
    />
  );
};
  
  export default ViewModel;
  
  