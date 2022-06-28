import CustomAutocomplete from '../CustomAutocomplete';
import Typography from 'app/components/CustomComponents/Typography';
import styles from './styles.module.scss';

type Props = {
  options: Array<any>,
  setter: (arg: any) => void,
  value: any,
  isVisible: boolean,
  className: any,
  title: string,
  placeholder: string,
  error: boolean
}
  
const View: React.FC<Props> = ({
  options,
  setter,
  value,
  isVisible,
  className,
  title,
  placeholder,
  error
}) => {
  return (
    <div className={[styles.dynamicAutocompleteContainer, className].join(' ')}>
      { isVisible &&
        <>
          <Typography
            type={'p'}
            bold={true}
          >
            {title}
          </Typography>
          <CustomAutocomplete
            options={options}
            setter={setter}
            value={value}
            className={className}
            placeholder={placeholder}
            error={error}
          />
        </>
      }
    </div>
  );
};

export default View;

