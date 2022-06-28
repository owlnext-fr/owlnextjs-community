import Typography from 'app/components/CustomComponents/Typography';
import useTranslation from 'hooks/useTranslation';
import styles from './styles.module.scss';

type Props = {
  labelValue: string;
  onclickSnack: () => void;
  typeClass: string;
  disapear: string;
  color: string;
}
  
const View: React.FC<Props> = ({labelValue, onclickSnack, typeClass, disapear, color}) => {
  const {t} = useTranslation()
return (
  <div className={[styles.snack, typeClass, disapear].join(' ')} onClick={onclickSnack}>
    <div>
      <Typography type="p" color={color}>
        {t(labelValue)}
      </Typography>
    </div>
    <div style={{marginTop: 3}} className={styles.closeIcon}>
      <svg id="Groupe_300" data-name="Groupe 300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
        <path id="Icon_material-cancel" data-name="Icon material-cancel" d="M10.5,3A7.5,7.5,0,1,0,18,10.5,7.493,7.493,0,0,0,10.5,3Zm3.75,10.192-1.057,1.057L10.5,11.557,7.807,14.249,6.75,13.192,9.442,10.5,6.75,7.807,7.807,6.75,10.5,9.442,13.192,6.75l1.057,1.057L11.557,10.5Z" transform="translate(-3 -3)" fill={color}/>
        <rect id="Rectangle_805" data-name="Rectangle 805" width="15" height="15" fill="none"/>
      </svg>
    </div>
  </div>
);
};

export default View;