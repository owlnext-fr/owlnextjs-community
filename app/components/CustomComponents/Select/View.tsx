import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import styles from './styles.module.scss';

import chevron from './assets/chevron.svg'
type Props = {
  children: React.ReactNode;
  className?: string;
  style?: StyleSheet;
  value?: any;
  onChange?: any,
  isDeployed: boolean,
  setIsDeployed: any,
  error: boolean
}
  
const View: React.FC<Props> = ({children, className, style, value, onChange, isDeployed, setIsDeployed, error}) => {
  
  return (
    <div className={[styles.selectContainer , className || ''].join(' ')}>
      <div className={styles.icon}>
        <KeyboardArrowDownIcon style={{ fontSize: 24 }}/>
      </div>
      <select
        className={[styles.select, error ? styles.error : undefined].join(' ')}
        style={{...style, backgroundImage: `url('${chevron.src}')`}}
        value={value}
        onChange={onChange}
        onFocus={() => {
          setIsDeployed(true)
        }}
        onBlur={() => {
          setIsDeployed(false)
        }}
      >
        {children}
      </select>
      {/* { isDeployed ?
        <ArrowDropUpIcon className={styles.icon} />
      :
        <KeyboardArrowDownIcon className={styles.icon} />
      } */}
    </div>
  );
};

export default View;
  
  