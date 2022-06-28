import { useMemo } from 'react';
import View from './View';

type TypeEnum = 'general' | 'user';

type Props = {
  className: string,
  option: any,
  type?: TypeEnum,
  onClick?: (e: any, option: any) => void
}

const ViewModel: React.FC<Props> = ({
  className,
  option,
  type = 'general',
  onClick
}) => {
  
  const textLabel = useMemo(() => {
    if (option.label) {
      return option.label
    } else {
      return ''
    }
  }, [])

  const photo = useMemo(() => {
    if (option.photo) {
      return option.photo
    } else {
      return ''
    }
  }, [])

  return (
    <View
      className={className}
      textLabel={textLabel}
      type={type}
      photo={photo}
      onClick={onClick}
      option={option}
    />
  );
};

export default ViewModel;

