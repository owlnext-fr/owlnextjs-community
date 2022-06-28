
import { useEffect, useState } from 'react';
import View from './View';

type Option = {
  id: number,
  label: string,
  checked: boolean,
}

type Props = {
  options: Array<Option>,
}

const ViewModel: React.FC<Props> = ({
  options = [],
}) => {
  const [currentOptions, setCurrentOptions] = useState<Array<Option>>([])
  
  const handleClick = (id: number) => {
    let temp = options

    for (let i = 0; i < temp.length; i ++) {
      if (temp[i].checked) {
        temp[i].checked = false
      }
      if (temp[i].id == id) {
        temp[i].checked = true
      }
    }

    setCurrentOptions([...temp])
  }

  useEffect(() => {
    setCurrentOptions([...options])
  }, [options])

  return (
    <View 
      options={currentOptions}
      handleClick={handleClick}
    />
  );
};

export default ViewModel;

