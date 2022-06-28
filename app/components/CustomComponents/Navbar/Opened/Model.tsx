import { useCallback, useMemo, useState } from 'react';
import useTranslation from 'hooks/useTranslation';
import { useRouter } from 'next/router'

import View from './View';

type Props = {
  pathname: string;
}

const ViewModel: React.FC<Props> = ({
  pathname,
}) => {
  const router = useRouter()
  const { t } = useTranslation()

  const trads = useMemo(() => {
    return {
      home: t('Accueil')
    }
  }, [t])

  const handleClickLogo = useCallback(() => {
    router.push('/home',undefined, { shallow: true })
  }, [router])
  
  return (
    <View 
      pathname={pathname}
      trads={trads}
      handleClickLogo={handleClickLogo}
    />
  );
};

export default ViewModel;

