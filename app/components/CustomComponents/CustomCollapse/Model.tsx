import { useState, useCallback } from 'react'
import View from './View';

type Props = {
  children: any,
  title: string,
  loading: boolean
}

const ViewModel: React.FC<Props> = ({
  children, 
  title,
  loading
}) => {
  const [isDeployed, setIsDeployed] = useState(false)

  const handleClickCollapse = useCallback(() => {
    setIsDeployed((prev) => !prev)
  }, [isDeployed])
  
  return (
    <View 
      children={children}
      title={title}
      isDeployed={isDeployed}
      handleClickCollapse={handleClickCollapse}
      loading={loading}
    />
  );
};

export default ViewModel;
  
  