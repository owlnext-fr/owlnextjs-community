import { useRouter } from 'next/router';
import { useMemo } from 'react';
import View from './View';

import { SnackType } from 'app/types/global'

type Props = {
  snacks: SnackType[]
}

const ViewModel: React.FC<Props> = ({snacks}) => {
  return (
    <View
      snacks={snacks}
      isInOpen={true}
    />
  );
};

export default ViewModel;