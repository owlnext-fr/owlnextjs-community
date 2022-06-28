import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DetailsNavigation from '../DetailsNavigation';

import styles from './styles.module.scss';

type Props = {
  title: string,
  onClickClose: () => void,
  menu: boolean,
  submenu: boolean,
  subTitle: string
}
  
const View: React.FC<Props> = ({
  children,
  title,
  onClickClose,
  menu,
  submenu,
  subTitle
}) => {
  return (
    <div className={styles.detailsHeaderContainer}>
      <div className={styles.row}>
        <div className={styles.title}>
          <div className={styles.text}>
            {title}
          </div>
          <div className={styles.cross}>
            <HighlightOffIcon
              onClick={onClickClose}
            />
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.subTitle}>
          {subTitle}
        </div>
      </div>
      { menu &&
        <div className={`${styles.row} ${styles.bottom}`}>
          <div className={styles.navigation}>
            <DetailsNavigation

            />
          </div>
        </div>
      }
      { submenu &&
        <>
          {children}
        </>
      }
    </div>
  );
};

export default View;

