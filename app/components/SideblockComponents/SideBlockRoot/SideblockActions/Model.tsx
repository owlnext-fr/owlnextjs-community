
  import View from './View';

  type Props = {
    showValidate?: boolean;
    showDismiss?: boolean;
    validateText?: string;
    dismissText?: string;
    dismissColor?: string;
    dismissStyle?: "outlined" | "light";
    showModify?: boolean,
    validateAction?: () => void;
    dismissAction?: () => void;
    modifyAction?: () => void,
    showDelete: boolean,
    deleteAction: () => void
  }
  
  const ViewModel: React.FC<Props> = ({
    showValidate = false,
    showDismiss = false,
    validateText,
    dismissText,
    dismissColor,
    dismissStyle,
    validateAction = () => {},
    dismissAction = () => {},
    modifyAction = () => {},
    showModify = false,
    showDelete = false,
    deleteAction = () => {}
  }) => {
    
    return (
      <View
        showValidate={showValidate}
        showDismiss={showDismiss}
        validateText={validateText}
        validateAction={validateAction}
        dismissText={dismissText}
        dismissColor={dismissColor}
        dismissAction={dismissAction}
        dismissStyle={dismissStyle}
        showModify={showModify}
        modifyAction={modifyAction}
        showDelete={showDelete}
        deleteAction={deleteAction}
      />
    );
  };
  
  export default ViewModel;
  
  