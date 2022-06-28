import { useMemo } from 'react';
import { AutoCompleteOption } from 'app/types/global';
import View from './View';

type Props = {
  option: AutoCompleteOption,
  onClickOption: (arg: any) => void
}

const ViewModel: React.FC<Props> = ({
  option,
  onClickOption
}) => {
  const label = useMemo(() => {
    return option.label
  }, [option])

  const isPlaceholder = useMemo(() => {
    let success = false
    if (option.id == null) {
      success = true
    }
    return success
  }, [option])

  return (
    <View 
      label={label}
      onClickOption={onClickOption}
      option={option}
      isPlaceholder={isPlaceholder}
    />
  );
};

export default ViewModel;

