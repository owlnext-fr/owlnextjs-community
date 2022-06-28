import { TextfieldSetter } from 'app/types/global';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styles from './styles.module.scss';

type TypeEnum = 'text' | 'password' | 'email' | 'number';

type Props = {
  type: TypeEnum,
  placeholder: string,
  value: string,
  onChange: TextfieldSetter,
  className: string,
  style: React.CSSProperties | {},
  onFocus?: any,
  onBlur?: any,
  label?: string,
  arrow?: string,
  onClickArrow?: () => void,
  error: boolean,
  disabled?: boolean,
  onKeyDown: (e?: any) => void,
  name: string
}
  
const View: React.FC<Props> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  style,
  onFocus,
  onBlur,
  label,
  arrow,
  onClickArrow,
  error,
  disabled,
  onKeyDown,
  name
}) => {
  
  return (
    <div className={[styles.inputContainer, className].join(' ')}>
      { label !== '' &&
        <div className={styles.label}>
          {label}
        </div>
      }
      <input
        className={[styles.textfield, (error ? styles.error : undefined) , (disabled ? styles.disabled : undefined)].join(' ')}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        onKeyDown={onKeyDown}
        name={name}
      />
      <div className={styles.icon}>
        { arrow == 'up' &&
          <KeyboardArrowUpIcon onClick={onClickArrow} />
        }
        { arrow == 'down' &&
          <KeyboardArrowDownIcon onClick={onClickArrow} />
        }
      </div>
    </div>
  );
};

export default View;
