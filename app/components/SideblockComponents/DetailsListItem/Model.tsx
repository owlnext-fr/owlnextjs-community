
import { ReactElement } from 'react';
import View from './View';

type Props = {
  title: string,
  value: string | ReactElement,
  onClick?: () => void,
  endButton?: ReactElement
}

const ViewModel: React.FC<Props> = ({
  title,
  value,
  onClick,
  endButton
}) => {
  
  return (
    <View
      title={title}
      value={value}
      onClick={onClick}
      endButton={endButton}
    />
  );
};

export default ViewModel;

