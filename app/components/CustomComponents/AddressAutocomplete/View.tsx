import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import CustomAutocomplete from 'app/components/CustomComponents/CustomAutocomplete'
import CustomInput from 'app/components/CustomComponents/CustomInput'
import styles from './styles.module.scss';
import PerfectScrollbar from 'react-perfect-scrollbar';

type Props = {
  inputAddress: string,
  setInputAddress: (value: string) => void,
  selectedAddress: string,
  setSelectedAddress: (arg: any) => void,
  addressesList: Array<any>,
  placeholder?: string,
  errorAddress: boolean,
  handleClickAddressCard: (e: any) => void
}
  
const View: React.FC<Props> = ({
  inputAddress,
  setInputAddress,
  selectedAddress,
  setSelectedAddress,
  addressesList,
  placeholder = '',
  errorAddress,
  handleClickAddressCard
}) => {
  
  return (
    <div className={styles.addressAutocompleteContainer}>
      <CustomAutocomplete
        value={selectedAddress}
        setter={(value: string) => {
          setSelectedAddress(value);
        }}
        options={addressesList}
        className={styles.autocomplete}
        inputValue={inputAddress}
        inputSetter={(value: string) => {
          setInputAddress(value);
        }}
        placeholder={placeholder}
      />
      {/* <CustomInput
        value={inputAddress}
        onChange={(e: any) => setInputAddress(e?.target.value)}
        className={styles.input}
        placeholder={placeholder}
        error={errorAddress}
      />
      { addressesList.length > 0 &&
        <PerfectScrollbar>
          <RadioGroup className={styles.addressesContainer}>
            { addressesList.map((address, index) => (
              <div key={address.id} className={styles.addressChip}>
                <FormControlLabel value={address.id} control={<Radio />} onChange={handleClickAddressCard} label={address.label} />
              </div>
            ))}
          </RadioGroup>
        </PerfectScrollbar>
      } */}
    </div>
  );
};

export default View