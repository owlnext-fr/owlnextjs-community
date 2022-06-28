import { useMemo, useCallback } from 'react';
import { useRouter } from 'next/router'
import useTranslation from 'hooks/useTranslation';
import View from './View';

type Props = {

}

const ViewModel: React.FC<Props> = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const handleDisconnect = useCallback(() => {
    router.push('/logout')  
  }, [router])

  const trads = useMemo(() => {
    return {
      disconnect: t('Parameters_Disconnect')
    }
  }, [t])
  
  return (
    <View 
      handleDisconnect={handleDisconnect}
      trads={trads}
    />
  );
};

export default ViewModel;

