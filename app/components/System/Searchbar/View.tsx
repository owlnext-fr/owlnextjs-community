import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.module.scss';
import { Trads } from 'app/types/global';
import { ChangeEventHandler } from 'react';

type Props = {
  trads: Trads,
  value: string,
  setValue: (arg: string) => void,
  submitSearch: (arg: any) => void;
  isSearchScreen: boolean;
  onChangeValue: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined
}
  
const View: React.FC<Props> = ({
  trads,
  value,
  setValue,
  submitSearch,
  onChangeValue
}) => {
  return (
    <form 
      className={styles.searchbarForm}
      onSubmit={ (e) => { 
        e.preventDefault()
      }}
    >
      <TextField
        value={value}
        style={{ width: '100%' }}
        className={styles.input} 
        variant="outlined"
        placeholder={trads.searchPlaceholder}
        spellCheck={false}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={onChangeValue}
      />
    </form>
  );
};

export default View;

