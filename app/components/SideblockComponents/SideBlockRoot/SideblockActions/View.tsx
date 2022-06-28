
import CustomButton from 'app/components/CustomComponents/CustomButton';
import styles from './styles.module.scss';

  type Props = {
    showValidate: boolean;
    showDismiss: boolean;
    validateText?: string;
    dismissText?: string;
    validateAction: () => void;
    dismissColor?: string;
    dismissAction: () => void;
    dismissStyle?: "outlined" | "light",
    showModify?: boolean,
    modifyAction?: () => void,
    showDelete: boolean,
    deleteAction: () => void
  }
    
  const View: React.FC<Props> = ({
    showValidate,
    showDismiss,
    validateText,
    dismissText,
    validateAction,
    dismissColor,
    dismissAction,
    dismissStyle,
    showModify,
    modifyAction,
    showDelete,
    deleteAction,
  }) => {
    
    return (
      <div className={styles.sideblockactions}>
        <div>
          {showDismiss && (
            <CustomButton
              content={dismissText || 'Retour'}
              type='cancel'
              onClick={dismissAction}
            />
          )}
          {showDelete && (
            <CustomButton
              content={"Supprimer"}
              type='cancel'
              onClick={deleteAction}
            />
          )}
        </div>
        <div>
          {showValidate && (
            <CustomButton
              content={validateText || "Valider"}
              type='next'
              onClick={validateAction}
            />
          )}
          {showModify && (
            <CustomButton
              content={"Modifier"}
              type='next'
              onClick={modifyAction}
            />
          )}
        </div>
      </div>
    );
  };
  
  export default View;
  
  