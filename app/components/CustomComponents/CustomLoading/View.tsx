import styles from './styles.module.scss';
import CircularProgress from '@mui/material/CircularProgress';

type Props = {
  width: number,
  height: number,
  customTop: number
}
  
const View: React.FC<Props> = ({
  width,
  height,
  customTop
}) => {
  return (
    <div className={styles.loadContainer}>
      <div className={styles.overlay}>
        
      </div>
      <div style={{ top: customTop }}  className={styles.loader}>
        <CircularProgress 
          className={styles.loader}
          color="secondary" 
        />
      </div>
    </div>
  );
};

export default View;