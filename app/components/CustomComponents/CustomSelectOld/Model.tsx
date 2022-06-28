
import View from './View';

import { SelectSetter } from 'app/types/global'

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  value?: any;
  onChange?: SelectSetter

}

const ViewModel: React.FC<Props> = ({children, className, style, value, onChange}) => {
  
  return (
    <View
      className={className}
      style={style}
      value={value}
      onChange={onChange}
    >
      {children}
    </View>
  );
};

export default ViewModel;