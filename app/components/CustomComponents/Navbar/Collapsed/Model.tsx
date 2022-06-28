
import { getCurrentRole } from 'utils/security';
import View from './View';

type Props = {
  pathname: string
}

const ViewModel: React.FC<Props> = ({
  pathname
}) => {
  const currentRole = getCurrentRole()
  return (
    <View 
      pathname={pathname}
      currentRole={currentRole}
    />
  );
};

export default ViewModel;

