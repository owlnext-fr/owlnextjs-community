import { useState } from 'react'
import View from './View';

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: StyleSheet;
  value?: any;
  onChange?: any,
  error?: boolean
}

const ViewModel: React.FC<Props> = ({children, className, style, value, onChange, error = false}) => {
  const [isDeployed, setIsDeployed] = useState(false)
  
  return (
    <View
      className={className}
      style={style}
      value={value}
      onChange={onChange}
      isDeployed={isDeployed}
      setIsDeployed={setIsDeployed}
      error={error}
    >
      {children}
    </View>
  );
};

export default ViewModel;

