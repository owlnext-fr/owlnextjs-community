import View from './View';
import {
  useCallback,
  useState,
  useRef,
  useEffect,
} from 'react';

type TypeEnum = 'general' | 'user';

type Props = {
  className?: string;
  style?: StyleSheet;
  value?: any;
  onChange?: (e: any, option: any) => void
  options?: Array<any>,
  type?: TypeEnum,
  children: any
}

const ViewModel: React.FC<Props> = ({
  className, 
  style, 
  value, 
  onChange,
  options = [],
  type,
  children
}) => {
  const wrapperRef = useRef<HTMLDivElement | undefined>(null)
  const [isDeployed, setIsDeployed] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsDeployed(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [wrapperRef]);

  const handleClick = useCallback((e) => {
    e.stopPropagation()
    setIsDeployed(!isDeployed)
  }, [isDeployed])

  return (
    <View
      className={className}
      style={style}
      value={value}
      onChange={onChange}
      options={options}
      isDeployed={isDeployed}
      handleClick={handleClick}
      type={type}
      setIsDeployed={setIsDeployed}
      wrapperRef={wrapperRef}
    >
      {children}
    </View>
  );
};

export default ViewModel;