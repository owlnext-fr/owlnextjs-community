import Image from 'next/image';
import styles from './styles.module.scss';
import { SelectSetter } from 'app/types/global'

import chevron from './assets/chevron.svg'
type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  value?: any;
  onChange?: SelectSetter
}
  
const View: React.FC<Props> = ({children, className, style, value, onChange}) => {
  
  return (
    <select
      className={[styles.select, className || ''].join(' ')}
      style={{...style, backgroundImage: `url('${chevron.src}')`}}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

export default View;