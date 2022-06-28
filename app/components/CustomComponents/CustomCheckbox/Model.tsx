import { useState } from 'react'
import View from './View';

type Props = {
  label: string | React.ReactNode,
  isChecked: boolean,
  setIsChecked?: (arg: boolean) => void,
  className?: string,
  error?: boolean,
  customHandle?: any,
  direction?: 'row' | 'column'
}

const ViewModel: React.FC<Props> = ({
  label,
  isChecked,
  setIsChecked = () => {},
  className = '',
  error = false,
  customHandle,
  direction = 'row'
}) => {
  
  return (
    <View 
      isChecked={isChecked}
      setIsChecked={setIsChecked}
      label={label}
      className={className}
      error={error}
      customHandle={customHandle}
      direction={direction}
    />
  );
};

export default ViewModel;

