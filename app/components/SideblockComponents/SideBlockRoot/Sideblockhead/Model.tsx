
  import { ReactChild } from 'react';
import View from './View';

  type Props = {
    children: ReactChild
  }
  
  const ViewModel: React.FC<Props> = ({
    children
  }) => {
    
    return (
      <View>
        {children}
      </View>
    );
  };
  
  export default ViewModel;
  
  