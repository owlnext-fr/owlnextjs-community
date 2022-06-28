
import { useEffect, useRef, useState } from 'react';
import View from './View';

type Props = {
  value: string,
  setter: (arg: any) => void,
  className: string,
  placeholder?: string,
  cols?: number,
  rows?: number,
  disabled?: boolean,
  error?: boolean;
  focusOnMount?: boolean;
}

const ViewModel: React.FC<Props> = ({
  value,
  setter,
  className,
  placeholder = '',
  cols = 30,
  rows = 5,
  disabled = false,
  error = false,
  focusOnMount = false
}) => {
  const inputEl = useRef<any>()
  const [startLength, setStartLength] = useState<number>(0)

  useEffect(() => {
    setStartLength(value?.length || 0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (inputEl.current && focusOnMount) {
      inputEl.current.focus()
      inputEl.current.selectionStart = startLength
    }
  }, [inputEl, focusOnMount,startLength])
  return (
    <View 
      value={value}
      setter={setter}
      className={className}
      placeholder={placeholder}
      cols={cols}
      rows={rows}
      disabled={disabled}
      error={error}
      inputEl={inputEl}
    />
  );
};

export default ViewModel;

