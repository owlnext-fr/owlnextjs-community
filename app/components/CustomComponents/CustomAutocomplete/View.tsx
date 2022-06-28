import CustomInput from '../CustomInput'
import Option from './Option'
import { AutoCompleteOption } from 'app/types/global';
import PerfectScrollbar from 'react-perfect-scrollbar';
import styles from './styles.module.scss';
import { Ref } from 'react';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  options: Array<AutoCompleteOption>,
  value: string,
  setter: (arg: any) => void,
  isDeployed: boolean,
  setIsDeployed: (arg: boolean) => void,
  onClickOption: (arg: any) => void,
  wrapperRef: Ref<any>,
  label?: string,
  className?: any,
  error?: boolean,
  disabled?: boolean,
  placeholder: string,
  inputSetter: (arg: any) => void,
  onClickArrow: () => void
}
  
const View: React.FC<Props> = ({
  options,
  value,
  setter,
  isDeployed,
  setIsDeployed,
  onClickOption,
  wrapperRef,
  label,
  className,
  error = false,
  disabled = false,
  placeholder,
  inputSetter,
  onClickArrow
}) => {  
  return (
    <div ref={wrapperRef} className={[styles.customAutocompleteContainer, className].join(' ')}>
      <div className={styles.icon}>
        <SearchIcon />
      </div>
      <CustomInput
        value={value}
        onChange={(e: any) => {
          setter(e.target.value)
          inputSetter(e.target.value)
        }}
        onFocus={ () => setIsDeployed(true) }
        onClickArrow={onClickArrow}
        label={label}
        arrow={isDeployed ? 'up' : 'down'}
        error={error}
        disabled={disabled}
        placeholder={placeholder}
        className={styles.input}
      />
      { isDeployed && !disabled &&
        <div className={styles.options}>
          <PerfectScrollbar style={{ maxHeight: '150px'}}>
            { options.map((option: AutoCompleteOption, key) => (
              <Option
                key={'option_' + key}
                option={option}
                onClickOption={onClickOption}
              />
            ))}
          </PerfectScrollbar>
        </div>
      }
      
    </div>
  );
};

export default View;

