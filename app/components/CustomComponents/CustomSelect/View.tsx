import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SelectOption from './SelectOption'
import styles from './styles.module.scss';

type TypeEnum = 'general' | 'user';

type Props = {
  className?: string;
  style?: StyleSheet;
  value?: any;
  onChange?: (e: any, option: any) => void,
  options: Array<any>,
  isDeployed: boolean,
  handleClick: (e: any) => void,
  type?: TypeEnum,
  setIsDeployed: (arg: boolean) => void;
  wrapperRef: any;
}
  
const View: React.FC<Props> = ({
  className, 
  style, 
  value, 
  onChange,
  options,
  isDeployed,
  handleClick,
  type,
  setIsDeployed,
  wrapperRef
}) => {

  return (
    <div 
      ref={wrapperRef}
      onClick={handleClick}
      className={styles.selectContainer}
    >
      <div className={[styles.currentValue, (isDeployed && styles.focus)].join(' ')}>
        { typeof(value.photo) !== 'undefined' &&
          <img className={styles.photo} src={value.photo} />
        }
        { typeof(value.label) !== 'undefined' &&
          <div className={styles.label}>
            {value.label}
          </div>
        }
        {isDeployed ?
          <KeyboardArrowUpIcon className={styles.icon} />
        :
          <KeyboardArrowDownIcon className={styles.icon} />
        }
      </div>
      { isDeployed &&
        <div className={styles.dropdown}>
          {options.map((option, index) => (
            <SelectOption
              key={index}
              className={styles.option}
              option={option}
              type={type}
              // data-value={option.value} 
              // key={'select_' + option.value}
              onClick={(e: any, option: any) => {
                handleClick(e)
                typeof(onChange) !== 'undefined' ? onChange(e, option) : undefined
              }}
            />
            // <span 
              
            // >
            //   {option.label}
            // </span>
          ))}
        </div>
      }
    </div>
  );
};

export default View;