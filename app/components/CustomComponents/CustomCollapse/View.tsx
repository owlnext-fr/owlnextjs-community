
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowDownUp from '@mui/icons-material/KeyboardArrowUp';
import styles from './styles.module.scss';

type Props = {
  children: any,
  title: string,
  isDeployed: boolean,
  handleClickCollapse: () => void,
  loading: boolean
}
  
const View: React.FC<Props> = ({
  children,
  title,
  isDeployed,
  handleClickCollapse,
  loading
}) => {
  
  return (
    <div className={styles.customCollapseContainer}>
      <div 
        className={styles.header}
        onClick={handleClickCollapse}
      >
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.arrow}>
          { isDeployed ?
            <KeyboardArrowDownUp />
          :
            <KeyboardArrowDownIcon />
          }
        </div>
      </div>
      { isDeployed &&
        <div className={styles.content}>
          {children}
        </div>
      }
    </div>
  );
};

export default View;

