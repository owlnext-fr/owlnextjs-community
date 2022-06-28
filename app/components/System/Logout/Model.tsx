import { cp } from 'fs/promises';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import View from './View';

type Props = {
  userDisconnect: () => void,
  isLoggedIn: boolean,
  authenticated: boolean
}

const ViewModel: React.FC<Props> = ({
  userDisconnect,
  isLoggedIn,
  authenticated
}) => {
  const router = useRouter()

  useEffect(() => {
    userDisconnect()
    router.push('/login')
  }, [router, userDisconnect])

  return (
    <View />
  );
};

export default ViewModel;

