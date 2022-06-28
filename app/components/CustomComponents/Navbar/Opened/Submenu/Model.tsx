import { useMemo, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router'
import View from './View';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { decodeJWTToken } from 'utils/jwt-utils'

type Props = {
  name: string | null,
  pathname: string,
  subMenus: Array<{
    name: string,
    path: string,
    roles: Array<any>,
    icon?: ReactJSXElement,
    count?: number
  }>
}

const ViewModel: React.FC<Props> = ({
  name,
  pathname,
  subMenus
}) => {
  const [isDeployed, setIsDeployed] = useState<boolean>(true)
  const router = useRouter()

  const handleClickDeployed = useCallback(() => {
    setIsDeployed((prev) => !prev)
  }, [setIsDeployed])
  
  useEffect(() => {
    for (let i = 0; i < subMenus.length; i ++) {
      if (('/' + subMenus[i].path.substring(0, subMenus[i].path.indexOf('?'))) == pathname) {
        setIsDeployed(true)
      }
    }
  }, [subMenus, pathname])

  const currentRoles = useMemo(() => {
    const jwtToken = sessionStorage.getItem(`${process.env.NEXT_PUBLIC_APPNAME}_jwtToken`)
    const decodedToken = decodeJWTToken(jwtToken)

    return decodedToken.role
  }, [])
  
  return (
    <View
      name={name}
      pathname={pathname}
      subMenus={subMenus}
      isDeployed={isDeployed}
      handleClickDeployed={handleClickDeployed}
      currentRoles={currentRoles}
      completePath={router.asPath}
    />
  );
};

export default ViewModel;

