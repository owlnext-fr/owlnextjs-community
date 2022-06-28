import { useMemo } from 'react'
import View from './View';

type Props = {
  roles: Array<string>,
  children: React.ReactNode,
  placeholder?: React.ReactNode
}

const ViewModel: React.FC<Props> = ({
  roles,
  children,
  placeholder = <></>
}) => {
  
  const show = useMemo(() => {
    const currentRoles = sessionStorage.getItem(`${process.env.NEXT_PUBLIC_APPNAME}_roles`)
    let success = false

    if (currentRoles !== '' && currentRoles !== null) {
      const currentRolesArray = JSON.parse(currentRoles)

      for (let i = 0; i < roles.length; i ++) {
        if (currentRolesArray.includes(roles[i])) {
          success = true
        }
      }
    }

    return success
  }, [roles])

  return (
    <View 
      show={show}
      placeholder={placeholder}
    >
      {children}
    </View>
  );
};

export default ViewModel;

