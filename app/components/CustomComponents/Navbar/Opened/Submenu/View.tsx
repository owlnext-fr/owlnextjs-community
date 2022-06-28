import PerfectScrollbar from 'react-perfect-scrollbar';
import { Fragment } from 'react'
import styles from './styles.module.scss';
import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'hooks/useTranslation';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

type Props = {
  name: string | null,
  pathname: string,
  subMenus: Array<{
    name: string,
    path: string,
    icon?: ReactJSXElement;
    count?: number
  }>,
  isDeployed: boolean,
  handleClickDeployed: () => void,
  currentRoles: Array<any>,
  completePath: string
}
  
const View: React.FC<Props> = ({
  name,
  pathname,
  subMenus,
  isDeployed,
  handleClickDeployed,
  currentRoles,
  completePath
}) => {
  const { t } = useTranslation()
  return (
    <div className={[styles.menuContainer, ((!name && subMenus[0].name !== 'home') ? styles.soloContainer : undefined)].join(' ')}>
      { name &&
        <div
          // onClick={handleClickDeployed} 
          className={styles.menuName}
        >
          <div className={styles.name}>
            {name}
          </div>
          {/* { isDeployed ?
            <ExpandLessIcon />
          :
            <ExpandMoreIcon />
          } */}
        </div>
      }
      { isDeployed &&
        <div className={styles.subMenu}>
          { subMenus.map((submenu:any, key:number) => {
            let show = false

            if (submenu.roles[0] == '*') {
              show = true
            } else if (submenu.roles.length > 0) {
              for (const currentRole of currentRoles) {
                for (const mandatoryRole of submenu.roles) {
                  if (currentRole == mandatoryRole) {
                    show = true
                  }
                }
              }
            }
            
            return (
              <Fragment key={submenu.path + '_submenu_' + key}>
                { show &&
                  <Link passHref href={`/${submenu.path}`} shallow replace>
                    <div className={[(pathname == `/${submenu.path}` || `/${submenu.path}` == completePath) ? styles.selected : undefined, styles.linkContainer].join(' ')}>
                      <div className={styles.menuBody}>
                        <div className={styles.icon}>
                          {submenu.icon}
                        </div>
                        <div>
                          {t(`Navbar_${submenu.name}`)}
                        </div>
                      </div>
                      {submenu.count > 0 && (
                        <div className={styles.count}>
                          {submenu.count}
                        </div>
                      )}
                    </div>
                  </Link>
                }
              </Fragment>
            )
          })}
        </div>
      }
    </div>
  );
};

export default View;