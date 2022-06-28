import useTranslation from 'hooks/useTranslation'
import { useCallback, useMemo } from 'react'
import View from './View';

type Props = {
  userDisconnect: () => void
}

const ViewModel: React.FC<Props> = ({
  userDisconnect
}) => {
  const { t } = useTranslation()

  const handleDisconnect = useCallback(() => {
    userDisconnect()
  }, [userDisconnect])

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

