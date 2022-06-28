import { cloneElement, RefObject } from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styles from './styles.module.scss';

type Props = {
  children: Array<ReactJSXElement>,
  currentRef: RefObject<any>,
  handleClick: () => void,
  isShown: boolean,
  setIsShown: (arg: boolean) => void
}

const View: React.FC<Props> = ({
  children,
  currentRef,
  handleClick,
  isShown,
  setIsShown
}) => {
  
  return (
    <div
      ref={currentRef}
      className={styles.customOverboxContainer}
    >
      {cloneElement(children[0], { onClick: handleClick })}
      { isShown &&
        <div 
          className={styles.overlayContainer}
          onClick={() => {
            setTimeout(() => {
              setIsShown(false)
            }, 100)
          }}  
        >
          {children[1]}
        </div>
      }
    </div>
  );
};

export default View;

