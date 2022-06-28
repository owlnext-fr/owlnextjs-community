import { useCallback } from 'react';
import View from './View';

type Props = {
  sideblockTitle: string,
  clearAboveSideblock: () => void,
  menu?: boolean,
  submenu?: boolean,
  children?: any,
  subTitle?: string,
  setAppFields: (field: string, value: any) => void,
  checkSideblockHistory: (object: any) => void,
  currentDetailsAboveObject: any;
  onClose?: () => void;
  preventDefaultOnClose?: boolean;
}

const ViewModel: React.FC<Props> = ({
  sideblockTitle,
  clearAboveSideblock,
  menu = true,
  children,
  submenu = false,
  subTitle = '',
  setAppFields,
  checkSideblockHistory,
  currentDetailsAboveObject,
  onClose = () => {},
  preventDefaultOnClose = false
}) => {

  const onClickClose = useCallback(() => {
    // clearAboveSideblock()
    if (!preventDefaultOnClose) {
      checkSideblockHistory(currentDetailsAboveObject)
      setAppFields('selectedItem', '')
    }
    onClose()
  }, [checkSideblockHistory, currentDetailsAboveObject, onClose, preventDefaultOnClose, setAppFields])

  return (
    <View 
      title={sideblockTitle}
      onClickClose={onClickClose}
      menu={menu}
      submenu={submenu}
      subTitle={subTitle}
    >
      {children}
    </View>
  );
};

export default ViewModel;

