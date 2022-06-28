import { useMemo } from 'react';
import { TextfieldSetter } from 'app/types/global';
import View from './View';

type TypeEnum = 'text' | 'password' | 'email' | 'number';
type ArrowTypes = 'up' | 'down'


type Props = {
  type?: TypeEnum;
  placeholder?: string;
  value?: string;
  onChange?: TextfieldSetter;
  className?: string;
  style?: React.CSSProperties;
  onFocus?: any,
  onBlur?: any,
  label?: string,
  arrow?: ArrowTypes,
  onClickArrow?: () => void,
  error?: boolean,
  disabled?: boolean,
  password?: boolean,
  onKeyDown?: (e?: any) => void,
  name?: string;
}

const ViewModel: React.FC<Props> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  style,
  onFocus,
  onBlur,
  label = '',
  arrow,
  onClickArrow,
  error = false,
  disabled = false,
  password = false,
  onKeyDown = () => {},
  name = '',
}) => {
  
  const inputType = useMemo(() => type || 'text', [type])

  const placeholderValue = useMemo(() => placeholder || '', [placeholder])

  const valueString = useMemo(() => value || '', [value])

  const onChangeValue = useMemo(() => onChange || (() => {}) , [onChange])

  const classname = useMemo(() => className || '', [className])

  const customStyle = useMemo(() => style || {}, [style])


  return (
    <View
      type={inputType}
      placeholder={placeholderValue}
      value={valueString}
      onChange={onChangeValue}
      className={classname}
      style={customStyle}
      onFocus={onFocus}
      onBlur={onBlur}
      label={label}
      arrow={arrow}
      onClickArrow={onClickArrow}
      error={error}
      disabled={disabled}
      onKeyDown={onKeyDown}
      name={name}
    />
  );
};

export default ViewModel;