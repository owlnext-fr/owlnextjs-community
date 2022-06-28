import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import MailIcon from '@mui/icons-material/Mail';

import styles from './styles.module.scss';

type Props = {
  selectedDetailsSubTab: string
  handleClick: (arg: string) => void,
  sideblockTitle: string
}
  
const View: React.FC<Props> = ({
  selectedDetailsSubTab,
  handleClick,
  sideblockTitle
}) => {
  return (
    <div className={styles.detailsNavigationContainer}>
      <div className={styles.line} />
      <div
        className={`${styles.item} ${(selectedDetailsSubTab == 'infos' ? styles.highlighted : '')}`}
        onClick={ () => handleClick('infos') }
      >
        <InfoOutlinedIcon
          
        />
      </div>
      <div
        className={`${styles.item} ${(selectedDetailsSubTab == 'agenda' ? styles.highlighted : '')}`}
        onClick={ () => handleClick('agenda') }
      >
        <CalendarTodayIcon
          
        />
      </div>
      <div
        className={`${styles.item} ${(selectedDetailsSubTab == 'notes' ? styles.highlighted : '')}`}
        onClick={ () => handleClick('notes') }
      >
        <FileCopyOutlinedIcon
          
        />
      </div>
      <div
        className={`${styles.item} ${(selectedDetailsSubTab == 'notifications' ? styles.highlighted : '')}`}
        onClick={ () => handleClick('notifications') }
      >
        <MailIcon
          
        />
      </div>
    </div>
  );
};

export default View;

