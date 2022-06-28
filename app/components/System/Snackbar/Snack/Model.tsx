import { useMemo, useCallback, useEffect, useState } from 'react';

import { SnackType } from 'app/types/global'

import View from './View';

import styles from './styles.module.scss';

type Props = {
  snack: SnackType;
  removeSnack: (snackId: number) => void;
};

const ViewModel: React.FC<Props> = ({snack, removeSnack}) => {
  const [disapear, setDisapear] = useState('')
  useEffect(() => {
    setTimeout(() => {
      setDisapear(styles.disapear)
      setTimeout(() => {
        removeSnack(snack.id)
      }, 500);
    }, 3000)
  }, [snack,setDisapear, removeSnack])

  const labelValue = useMemo(() => snack.label, [snack])

  const typeClass = useMemo(() => {
    switch(snack.type) {
        case 'warning':
            return styles.warning
        case 'info':
            return styles.info
        case 'success':
            return styles.success
        case 'error' :
            return styles.error
        default :
            return ''
    }
      
  }, [snack])

  const onClickSnack = useCallback(() => {
    setDisapear(styles.disapear)
      setTimeout(() => {
        removeSnack(snack.id)
      }, 500);
  }, [snack, removeSnack])

  const color = useMemo(() => {
    switch(snack.type) {
        case 'warning':
            return '#F29F05'
        case 'info':
            return '#2097f2'
        case 'success':
            return '#81BF24'
        case 'error' :
            return '#f21a30'
        default:
            return '#81BF24'
    }
  }, [snack]) 

  return (
    <View
      labelValue={labelValue}
      onclickSnack={onClickSnack}
      typeClass={typeClass}
      disapear={disapear}
      color={color}
    />
  );
};

export default ViewModel;