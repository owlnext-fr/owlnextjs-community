
import View from './View';

type TypeEnum = 'classic' | 'special'

type Props = {
  isChecked: boolean
  onClickFunction: () => void,
  type?: TypeEnum
}

const ViewModel: React.FC<Props> = ({
  isChecked,
  onClickFunction,
  type = 'special'
}) => {
  
  return (
    <View
      isChecked={isChecked}
      onClickFunction={onClickFunction}
      type={type}
    />
  );
};

export default ViewModel;

