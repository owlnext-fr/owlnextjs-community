import Searchbar from 'app/components/System/Searchbar';
import Userbox from 'app/components/System/Userbox';

import styles from './styles.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import Permission from '../../Permission';
import CustomButton from 'app/components/CustomComponents/CustomButton';
import { Trads } from 'app/types/global';
import Typography from 'app/components/CustomComponents/Typography';
import useTranslation from 'hooks/useTranslation';

type Props = {
  isSearchScreen: boolean;
  onClickClose: () => void;
  currentRole: 'DATAADMIN' | 'FREEMIUM' | 'ONLINE',
  trads: Trads,
  handleClickUpsell: () => void;
  isKyc: boolean;
}
  
const View: React.FC<Props> = ({
  isSearchScreen,
  onClickClose,
  currentRole,
  trads,
  handleClickUpsell,
  isKyc
}) => {
  const {t} = useTranslation()
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.searchbarContainer}>
          <Permission
            roles={['ROLE_TEST']}
          >
            <Searchbar

            />
          </Permission>
        </div>
        <div className={styles.userboxContainer}>
          {isSearchScreen ? (
            <div className={styles.closeIcon}>
              <CloseIcon
                style={{color: '#a1a1a1'}}
                onClick={onClickClose}
              />
            </div>
          ) : (
            <div className={styles.boxContainer}>
              <Userbox
    
              />
            </div>
          )}
        </div>
      </div>
      {isKyc && (
        <div className={styles.kycBanner}>
          <Typography type="p" bold>
            {t('Layout_kycToCheck_banner')}
          </Typography>
        </div>
      )}
    </>
  );
};

export default View;

