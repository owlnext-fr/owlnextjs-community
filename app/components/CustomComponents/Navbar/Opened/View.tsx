import PerfectScrollbar from 'react-perfect-scrollbar';
import styles from './styles.module.scss';
import Image from 'next/image'

import Submenu from './Submenu'
import Logo from 'public/assets/images/owlnext.png';

import Home from 'public/assets/images/menuIcons/home.svg'
import Permission from 'app/components/System/Permission';

import { Trads } from 'app/types/global';
import useTranslation from 'hooks/useTranslation';

type Props = {
  pathname: string,
  trads: Trads,
  handleClickLogo: () => void;
}
  
const View: React.FC<Props> = ({
  pathname,
  trads,
  handleClickLogo,
}) => {
  const {t} = useTranslation()
  return (
    <div className={styles.openedContainer}>
      <PerfectScrollbar
        options={{
          suppressScrollX: true
        }}
      >
        <div className={styles.top}>
          <div className={styles.logo}>
            <Image
              src={Logo}
              alt='Logo'
              onClick={handleClickLogo}
            />
          </div>
          <div className={styles.dynamicContainer}>
            <div className={styles.menu}>
              <Permission
                roles={['ROLE_TEST']}
              >
                <Submenu
                  name={trads.home}
                  pathname={pathname}
                  subMenus={[
                    { 
                      path: 'home',
                      roles: ['*'],
                      name: 'Home',
                      icon: <Home />
                    }
                  ]}
                />
              </Permission>
            </div>
          </div>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default View;