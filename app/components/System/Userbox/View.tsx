import Customoverbox from 'app/components/CustomComponents/Customoverbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import styles from './styles.module.scss';
import useTranslation from 'hooks/useTranslation';
import { Trads } from 'app/types/global';

type Props = {
  handleDisconnect: () => void,
  trads: Trads
}
  
const View: React.FC<Props> = ({
  handleDisconnect,
  trads
}) => {
  const {t} = useTranslation()
  return (
    <div className={styles.userboxContainer}>
      <Customoverbox>
        <AccountCircleIcon
          className={styles.icon}
        />
        <ul>
          <li 
            className={styles.deconnexion}
            onClick={handleDisconnect}  
          >
            <LogoutIcon className={styles.subIcon}/>
            {trads.disconnect}
          </li>
        </ul>
      </Customoverbox>
    </div>
  );
};

export default View;

