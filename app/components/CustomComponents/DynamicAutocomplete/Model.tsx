
import { useEffect, useState } from 'react';
import View from './View';

type Props = {
  options: Array<any>,
  setter: (arg: any) => void,
  value: any,
  className: any,
  title?: string,
  placeholder?: string,
  error?: boolean,
  forceVisible?: boolean
}

const ViewModel: React.FC<Props> = ({
  options,
  setter,
  value,
  className,
  title = '',
  placeholder= '',
  error=false,
  forceVisible=false
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (options.length == 1 && !forceVisible) {
      setIsVisible(false)
      setter(options[0].id)
    } else {
      setIsVisible(true)
    }
  }, [forceVisible, options, setter])
  
  return (
    <View 
      options={options}
      setter={setter}
      value={value}
      isVisible={isVisible}
      className={className}
      title={title}
      placeholder={placeholder}
      error={error}
    />
  );
};

export default ViewModel;

