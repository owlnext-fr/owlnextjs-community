import { useState, useRef, RefObject, useEffect } from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import View from './View';

type Props = {
  children: Array<ReactJSXElement>
}

const ViewModel: React.FC<Props> = ({
  children
}) => {
  const [isShown, setIsShown] = useState(false);
  const wrapperRef = useRef(null)

  const useOutsideAlerter = (ref: RefObject<any>) => {
    useEffect(() => {
      const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsShown(false)
        }
      }
      
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [ref]);
}

  const handleClick = () => {
    setIsShown((prev) => !prev)
  }

  useOutsideAlerter(wrapperRef)
  
  return (
    <View
      currentRef={wrapperRef}
      handleClick={handleClick}
      isShown={isShown}
      setIsShown={setIsShown}
    >
      { children }
    </View>
  );
};

export default ViewModel;

