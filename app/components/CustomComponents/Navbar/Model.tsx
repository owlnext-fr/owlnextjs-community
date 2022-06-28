import { useEffect, useMemo, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';

import View from './View';

const Navbar = ({  }) => {
  const [isDeployed, setIsDeployed] = useState(true)
  const router = useRouter()

  const mediaQueries = {
    isSmallScreen: useMediaQuery('(min-width:1024px)')
  }
  
  return (
    <View
      pathname={router.pathname}
      isDeployed={mediaQueries.isSmallScreen}
    />
  );
};

export default Navbar;